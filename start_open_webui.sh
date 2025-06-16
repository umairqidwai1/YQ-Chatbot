#!/bin/bash

set -e
set -o pipefail

echo "🟢 Creating Python venv..."
cd ~/open-webui/backend
if [ ! -d "venv" ]; then
  python3.11 -m venv venv
fi
source venv/bin/activate

echo "🟡 Installing backend dependencies..."
pip install --upgrade pip
pip install -r requirements.txt -U

echo "🔵 Building frontend..."
cd ~/open-webui
npm install
npm run build

echo "🟣 Serving frontend..."
npm install -g serve
serve -s dist -l 5173 &

echo "🔴 Starting backend using dev.sh..."
cd ~/open-webui/backend
sh dev.sh &

echo "✅ Open WebUI is running!"
echo "Frontend: http://localhost:5173"
echo "Backend:  http://localhost:8080/docs"
