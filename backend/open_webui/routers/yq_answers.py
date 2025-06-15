import os
import re
import logging
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from openai import OpenAI
from pinecone import Pinecone
from presidio_analyzer import AnalyzerEngine
from presidio_anonymizer import AnonymizerEngine
from pinecone.openapi_support.exceptions import PineconeApiException
from open_webui.utils.auth import get_verified_user
from open_webui.models.users import UserModel

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Presidio setup
analyzer = AnalyzerEngine()
anonymizer = AnonymizerEngine()

router = APIRouter()

# Initialize clients
client = OpenAI(api_key=os.getenv("YQ_OPENAI_API_KEY"))
pc = Pinecone(api_key=os.getenv("YQ_PINECONE_API_KEY"), environment="us-east-1")
index = pc.Index("yq1-transcripts")

# Function to detect PII in text
def detect_pii_entities(text: str):
    return analyzer.analyze(text, language='en')

# Function to anonymize text
def anonymize_text(text: str) -> str:
    entities = detect_pii_entities(text)
    result = anonymizer.anonymize(text=text, analyzer_results=entities)
    return result.text

# Function to extract start seconds from text
def extract_start_sec(text: str) -> int:
    match = re.search(r"\[\s*([0-9.]+)\s*–", text)
    if match:
        try:
            return int(float(match.group(1)))
        except:
            return 0
    return 0

# Function to embed the query
def embed_query(query: str) -> List[float]:
    try:
        response = client.embeddings.create(
            model="text-embedding-3-large",
            input=[query]
        )
        return response.data[0].embedding
    except PineconeApiException as e:
        logger.error(f"Pinecone embed error: {e}")
        return None

# Function to query Pinecone index
def search_pinecone(embedding: List[float], top_k: int = 3) -> List[dict]:
    try:
        results = index.query(
            namespace="ns1",
            vector=embedding,
            top_k=top_k,
            include_values=False,
            include_metadata=True
        )
        return [match["metadata"] for match in results.get("matches", [])]
    except PineconeApiException as e:
        logger.error(f"Pinecone query error: {e}")
        return []

# Function called by api.py to answer user text queries
def answer_query(messages: List[dict]) -> str:
    # Extract last user message
    user_message = next((m["content"] for m in reversed(messages) if m["role"] == "user"), None)
    if not user_message:
        return "No user message found."

    # Run PII detection before continuing (anonymize text)
    query = anonymize_text(user_message)

    # Embed the query
    embedding = embed_query(query)
    if not embedding:
        return "Sorry, I couldn't process your request... (Backend Error - Embedding)"

    # Query Pinecone
    pinecone_results = search_pinecone(embedding)
    if not pinecone_results:
        return "Sorry, I couldn't process your request... (Backend Error - Search Pinecone)"

    # Build context from pinecone results
    context = "\n\n---\n\n".join([r.get("text", "") for r in pinecone_results])
    sources = []
    for r in pinecone_results:
        link = r.get("Link")
        text = r.get("text", "")
        if link:
            start_sec = extract_start_sec(text)
            title = r.get("Title", "Video Link")
            sources.append(f"[{title}]({link}&t={start_sec})")

    system_prompt = """
    You are an Islamic Assistant that uses Shaykh Dr. Yasir Qadhi's videos to answer questions.

    • The context is a collection of Shaykh Yasir Qadhi's video transcripts, just summarize the transcripts as a human readable answer.
    • If context clearly does not answer the question, say "Allah And His Messenger know best (I couldn't find the answer in Shayk Yasir Qadhi's videos)"
    • If the question is completely unrelated to Islam, reply with: "Sorry, I can only help with questions related to Islam."
    • Be concise, respectful, and format in Markdown.
    """

    # Compose messages to send to OpenAI
    final_messages = [{"role": "system", "content": system_prompt}] + messages
    final_messages.append({
        "role": "user",
        "content": f"""Context:\n{context}\n\nBased on this context, please answer the above conversation."""
    })

    # Send to LLM
    try:
        chat = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=final_messages,
            temperature=0.3
        )
        answer = chat.choices[0].message.content
    except Exception as e:
        logger.error(f"OpenAI text query error: {e}")
        return "Sorry, I couldn't process your request... (Backend Error - LLM)"

    if sources:
        inline, footnotes = format_citations(sources)
        answer = f"{answer} {inline}\n{footnotes}"

    # Log the exchange
    log_exchange(user_message, context, answer)

    return answer

def log_exchange(question: str, context: str, answer: str) -> None:
    """Append one row to chat_history.csv (no readback)."""
    import csv
    with open("chat_history.csv", "a", newline="", encoding="utf-8") as f:
        csv.writer(f).writerow([question, context, answer])

def format_citations(urls: list[str]) -> tuple[str, str]:
    if not urls:
        return "", ""
    footer = "\n\n**Sources:**\n" + "\n".join(f"- {url}" for url in urls)
    return "", footer

# === OpenAI-compatible chat/completions endpoint ===
class ChatMessage(BaseModel):
    role: str
    content: str

class ChatCompletionRequest(BaseModel):
    model: str
    messages: List[ChatMessage]
    temperature: float = 0.3

@router.post("/chat/completions", tags=["OpenAI Compatibility"])
async def chat_completion(request_data: ChatCompletionRequest):
    messages = [m.dict() for m in request_data.messages]
    try:
        answer = answer_query(messages)
    except Exception as e:
        logger.error(f"LLM error: {e}")
        raise HTTPException(500, f"LLM error: {str(e)}")

    return {
        "id": "chatcmpl-local-001",
        "object": "chat.completion",
        "created": 0,
        "model": request_data.model,
        "choices": [
            {
                "index": 0,
                "message": {
                    "role": "assistant",
                    "content": answer
                },
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 0,
            "completion_tokens": 0,
            "total_tokens": 0
        }
    }

# === OpenAI-compatible models endpoint ===
@router.get("/models", tags=["OpenAI Compatibility"])
async def get_models():
    return {
        "object": "list",
        "data": [
            {
                "id": "YQ Answers",
                "object": "model",
                "created": 1715200000,
                "owned_by": "local",
                "permission": [],
            },
        ]
    }

@router.get("/")
def read_root():
    return {"message": "It works!"} 