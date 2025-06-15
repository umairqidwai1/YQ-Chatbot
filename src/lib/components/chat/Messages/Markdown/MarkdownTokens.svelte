<script lang="ts">
	import DOMPurify from 'dompurify';
	import { onMount, getContext } from 'svelte';
	const i18n = getContext('i18n');

	import fileSaver from 'file-saver';
	const { saveAs } = fileSaver;

	import { marked, type Token } from 'marked';
	import { unescapeHtml } from '$lib/utils';

	import { WEBUI_BASE_URL } from '$lib/constants';

	import CodeBlock from '$lib/components/chat/Messages/CodeBlock.svelte';
	import MarkdownInlineTokens from '$lib/components/chat/Messages/Markdown/MarkdownInlineTokens.svelte';
	import KatexRenderer from './KatexRenderer.svelte';
	import AlertRenderer, { alertComponent } from './AlertRenderer.svelte';
	import Collapsible from '$lib/components/common/Collapsible.svelte';
	import Tooltip from '$lib/components/common/Tooltip.svelte';
	import ArrowDownTray from '$lib/components/icons/ArrowDownTray.svelte';

	import Source from './Source.svelte';
	import { settings } from '$lib/stores';
	import HtmlToken from './HTMLToken.svelte';
	import YouTube from '$lib/components/icons/YouTube.svelte';

	export let id: string;
	export let tokens: Token[];
	export let top = true;
	export let attributes = {};

	export let save = false;
	export let preview = false;

	export let onSave: Function = () => {};
	export let onUpdate: Function = () => {};
	export let onPreview: Function = () => {};

	export let onTaskClick: Function = () => {};
	export let onSourceClick: Function = () => {};

	const headerComponent = (depth: number) => {
		return 'h' + depth;
	};

	const exportTableToCSVHandler = (token, tokenIdx = 0) => {
		console.log('Exporting table to CSV');

		// Extract header row text and escape for CSV.
		const header = token.header.map((headerCell) => `"${headerCell.text.replace(/"/g, '""')}"`);

		// Create an array for rows that will hold the mapped cell text.
		const rows = token.rows.map((row) =>
			row.map((cell) => {
				// Map tokens into a single text
				const cellContent = cell.tokens.map((token) => token.text).join('');
				// Escape double quotes and wrap the content in double quotes
				return `"${cellContent.replace(/"/g, '""')}"`;
			})
		);

		// Combine header and rows
		const csvData = [header, ...rows];

		// Join the rows using commas (,) as the separator and rows using newline (\n).
		const csvContent = csvData.map((row) => row.join(',')).join('\n');

		// Log rows and CSV content to ensure everything is correct.
		console.log(csvData);
		console.log(csvContent);

		// To handle Unicode characters, you need to prefix the data with a BOM:
		const bom = '\uFEFF'; // BOM for UTF-8

		// Create a new Blob prefixed with the BOM to ensure proper Unicode encoding.
		const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=UTF-8' });

		// Use FileSaver.js's saveAs function to save the generated CSV file.
		saveAs(blob, `table-${id}-${tokenIdx}.csv`);
	};

	// Helper to extract all sources from tokens, including plain text [Title](URL) items
	function extractAllSourcesFromTokens(tokens: any[]): { title: string; url: string }[] {
		let sources: { title: string; url: string }[] = [];
		let i = 0;
		const linkRegex = /^\[([^\]]+)\]\(([^\)]+)\)$/;
		while (i < tokens.length) {
			const t = tokens[i];
			if (
				t.type === 'paragraph' &&
				t.tokens &&
				t.tokens.length === 1 &&
				t.tokens[0].type === 'strong' &&
				t.tokens[0].tokens &&
				t.tokens[0].tokens.length === 1 &&
				t.tokens[0].tokens[0].type === 'text' &&
				t.tokens[0].tokens[0].text.trim().toLowerCase().startsWith('sources:')
			) {
				const listToken = tokens[i + 1];
				if (listToken && listToken.type === 'list') {
					for (const item of listToken.items) {
						// Prefer markdown link token
						const linkToken = (item.tokens || []).find((t) => t.type === 'link');
						if (linkToken) {
							sources.push({
								title: linkToken.text,
								url: linkToken.href
							});
						} else if (item.text) {
							// Try to extract [Title](URL) from plain text
							const match = item.text.match(linkRegex);
							if (match) {
								sources.push({
									title: match[1],
									url: match[2]
								});
							}
						}
					}
					i += 2; // Skip the list as well
					continue;
				}
			}
			i++;
		}
		return sources;
	}

	// Remove all sources sections from tokens
	function filterOutAllSourcesSections(tokens: any[]): any[] {
		let filtered = [];
		let i = 0;
		while (i < tokens.length) {
			const t = tokens[i];
			if (
				t.type === 'paragraph' &&
				t.tokens &&
				t.tokens.length === 1 &&
				t.tokens[0].type === 'strong' &&
				t.tokens[0].tokens &&
				t.tokens[0].tokens.length === 1 &&
				t.tokens[0].tokens[0].type === 'text' &&
				t.tokens[0].tokens[0].text.trim().toLowerCase().startsWith('sources:')
			) {
				// Skip this paragraph and the next list (if present)
				if (tokens[i + 1] && tokens[i + 1].type === 'list') {
					i += 2;
					continue;
				} else {
					i++;
					continue;
				}
			}
			filtered.push(t);
			i++;
		}
		return filtered;
	}

	// Temporary debug log to inspect tokens for the current message
	console.log('MarkdownTokens.svelte tokens:', tokens);

	// --- Custom: Extract all sources and filter tokens ---
	$: extractedSources = extractAllSourcesFromTokens(tokens);
	$: filteredTokens = extractedSources.length > 0 ? filterOutAllSourcesSections(tokens) : tokens;
	// --- END Custom ---

	// Helper to extract YouTube video ID from a URL
	function getYouTubeId(url: string): string | null {
		const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
		return match ? match[1] : null;
	}
</script>

<!-- {JSON.stringify(tokens)} -->
{#each filteredTokens as token, tokenIdx (tokenIdx)}
	{#if token.type === 'hr'}
		<hr class=" border-gray-100 dark:border-gray-850" />
	{:else if token.type === 'heading'}
		<svelte:element this={headerComponent(token.depth)} dir="auto">
			<MarkdownInlineTokens id={`${id}-${tokenIdx}-h`} tokens={token.tokens} {onSourceClick} />
		</svelte:element>
	{:else if token.type === 'code'}
		{#if token.raw.includes('```')}
			<CodeBlock
				id={`${id}-${tokenIdx}`}
				collapsed={$settings?.collapseCodeBlocks ?? false}
				{token}
				lang={token?.lang ?? ''}
				code={token?.text ?? ''}
				{attributes}
				{save}
				{preview}
				onSave={(value) => {
					onSave({
						raw: token.raw,
						oldContent: token.text,
						newContent: value
					});
				}}
				{onUpdate}
				{onPreview}
			/>
		{:else}
			{token.text}
		{/if}
	{:else if token.type === 'table'}
		<div class="relative w-full group">
			<div class="scrollbar-hidden relative overflow-x-auto max-w-full rounded-lg">
				<table
					class=" w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-full rounded-xl"
				>
					<thead
						class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400 border-none"
					>
						<tr class="">
							{#each token.header as header, headerIdx}
								<th
									scope="col"
									class="px-3! py-1.5! cursor-pointer border border-gray-100 dark:border-gray-850"
									style={token.align[headerIdx] ? '' : `text-align: ${token.align[headerIdx]}`}
								>
									<div class="gap-1.5 text-left">
										<div class="shrink-0 break-normal">
											<MarkdownInlineTokens
												id={`${id}-${tokenIdx}-header-${headerIdx}`}
												tokens={header.tokens}
												{onSourceClick}
											/>
										</div>
									</div>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each token.rows as row, rowIdx}
							<tr class="bg-white dark:bg-gray-900 dark:border-gray-850 text-xs">
								{#each row ?? [] as cell, cellIdx}
									<td
										class="px-3! py-1.5! text-gray-900 dark:text-white w-max border border-gray-100 dark:border-gray-850"
										style={token.align[cellIdx] ? '' : `text-align: ${token.align[cellIdx]}`}
									>
										<div class="break-normal">
											<MarkdownInlineTokens
												id={`${id}-${tokenIdx}-row-${rowIdx}-${cellIdx}`}
												tokens={cell.tokens}
												{onSourceClick}
											/>
										</div>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class=" absolute top-1 right-1.5 z-20 invisible group-hover:visible">
				<Tooltip content={$i18n.t('Export to CSV')}>
					<button
						class="p-1 rounded-lg bg-transparent transition"
						on:click={(e) => {
							e.stopPropagation();
							exportTableToCSVHandler(token, tokenIdx);
						}}
					>
						<ArrowDownTray className=" size-3.5" strokeWidth="1.5" />
					</button>
				</Tooltip>
			</div>
		</div>
	{:else if token.type === 'blockquote'}
		{@const alert = alertComponent(token)}
		{#if alert}
			<AlertRenderer {token} {alert} />
		{:else}
			<blockquote dir="auto">
				<svelte:self id={`${id}-${tokenIdx}`} tokens={token.tokens} {onTaskClick} {onSourceClick} />
			</blockquote>
		{/if}
	{:else if token.type === 'list'}
		{#if token.ordered}
			<ol start={token.start || 1} dir="auto">
				{#each token.items as item, itemIdx}
					<li class="text-start">
						{#if item?.task}
							<input
								class=" translate-y-[1px] -translate-x-1"
								type="checkbox"
								checked={item.checked}
								on:change={(e) => {
									onTaskClick({
										id: id,
										token: token,
										tokenIdx: tokenIdx,
										item: item,
										itemIdx: itemIdx,
										checked: e.target.checked
									});
								}}
							/>
						{/if}

						<svelte:self
							id={`${id}-${tokenIdx}-${itemIdx}`}
							tokens={item.tokens}
							top={token.loose}
							{onTaskClick}
							{onSourceClick}
						/>
					</li>
				{/each}
			</ol>
		{:else}
			<ul dir="auto">
				{#each token.items as item, itemIdx}
					<li class="text-start">
						{#if item?.task}
							<input
								class=" translate-y-[1px] -translate-x-1"
								type="checkbox"
								checked={item.checked}
								on:change={(e) => {
									onTaskClick({
										id: id,
										token: token,
										tokenIdx: tokenIdx,
										item: item,
										itemIdx: itemIdx,
										checked: e.target.checked
									});
								}}
							/>
						{/if}

						<svelte:self
							id={`${id}-${tokenIdx}-${itemIdx}`}
							tokens={item.tokens}
							top={token.loose}
							{onTaskClick}
							{onSourceClick}
						/>
					</li>
				{/each}
			</ul>
		{/if}
	{:else if token.type === 'details'}
		<Collapsible
			title={token.summary}
			open={$settings?.expandDetails ?? false}
			attributes={token?.attributes}
			className="w-full space-y-1"
			dir="auto"
		>
			<div class=" mb-1.5" slot="content">
				<svelte:self
					id={`${id}-${tokenIdx}-d`}
					tokens={marked.lexer(token.text)}
					attributes={token?.attributes}
					{onTaskClick}
					{onSourceClick}
				/>
			</div>
		</Collapsible>
	{:else if token.type === 'html'}
		<HtmlToken {id} {token} {onSourceClick} />
	{:else if token.type === 'iframe'}
		<iframe
			src="{WEBUI_BASE_URL}/api/v1/files/{token.fileId}/content"
			title={token.fileId}
			width="100%"
			frameborder="0"
			onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"
		></iframe>
	{:else if token.type === 'paragraph'}
		<p dir="auto">
			<MarkdownInlineTokens
				id={`${id}-${tokenIdx}-p`}
				tokens={token.tokens ?? []}
				{onSourceClick}
			/>
		</p>
	{:else if token.type === 'text'}
		{#if top}
			<p>
				{#if token.tokens}
					<MarkdownInlineTokens id={`${id}-${tokenIdx}-t`} tokens={token.tokens} {onSourceClick} />
				{:else}
					{unescapeHtml(token.text)}
				{/if}
			</p>
		{:else if token.tokens}
			<MarkdownInlineTokens
				id={`${id}-${tokenIdx}-p`}
				tokens={token.tokens ?? []}
				{onSourceClick}
			/>
		{:else}
			{unescapeHtml(token.text)}
		{/if}
	{:else if token.type === 'inlineKatex'}
		{#if token.text}
			<KatexRenderer content={token.text} displayMode={token?.displayMode ?? false} />
		{/if}
	{:else if token.type === 'blockKatex'}
		{#if token.text}
			<KatexRenderer content={token.text} displayMode={token?.displayMode ?? false} />
		{/if}
	{:else if token.type === 'space'}
		<div class="my-2" />
	{:else}
		{console.log('Unknown token', token)}
	{/if}
{/each}

<!-- Custom: Render extracted sources as citations at the end -->
{#if extractedSources}
	<style>
		.citation-card {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			background: #11131a;
			color: #fff;
			border-radius: 12px;
			border: 1px solid #23272f;
			box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
			padding: 0;
			margin-right: 0.6rem;
			margin-bottom: 0.6rem;
			max-width: 180px;
			min-width: 140px;
			transition: box-shadow 0.2s, transform 0.2s, background 0.2s, color 0.2s;
			text-decoration: none;
			min-height: 1.7rem;
			overflow: hidden;
		}
		.citation-card:hover {
			box-shadow: 0 6px 18px 0 rgba(0,0,0,0.18);
			transform: translateY(-3px) scale(1.03);
			background: #181a20;
			color: #fff;
		}
		.citation-thumb {
			width: 100%;
			height: 90px;
			object-fit: cover;
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
			display: block;
			background: #000;
			margin-top: 0;
		}
		.citation-content {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 0.7rem 0.7rem 0.9rem 0.7rem;
			gap: 0.4rem;
		}
		.citation-icon {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 0;
			margin-right: 0.3rem;
		}
		.citation-title {
			font-weight: 500;
			font-size: 0.85em;
			line-height: 1.2;
			text-align: left;
			margin-top: 0;
			max-width: 100%;
			max-height: 2.6em;
			white-space: normal;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			color: #fff;
		}
	</style>
	<div class="py-0.5 -mx-0.5 w-full flex gap-1 items-center flex-wrap mt-2">
		<div class="flex font-medium flex-wrap">
			{#each extractedSources as source, idx}
				<a
					href={source.url}
					target="_blank"
					rel="noopener noreferrer"
					class="citation-card"
					title={source.title}
				>
					{#if getYouTubeId(source.url)}
						<img class="citation-thumb" src={`https://img.youtube.com/vi/${getYouTubeId(source.url)}/hqdefault.jpg`} alt="YouTube thumbnail" />
					{/if}
					<div class="citation-content">
						<div class="citation-icon">
							<YouTube size={18} color="#ff0000" />
						</div>
						<div class="citation-title">{source.title.length > 48 ? `${source.title.slice(0, 45)}...` : source.title}</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
{/if}
