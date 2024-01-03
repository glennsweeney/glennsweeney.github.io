<script lang="ts">
	import DragNDrop from './DragNDrop.svelte';
	import ImageDisplay from './ImageDisplay.svelte';
	import * as fastpng from 'fast-png';

	let openFiles: File[] = [];

	let activePixels: Uint8Array | Uint16Array | null = null;
	let activeWidth: number = 0;
	let activeHeight: number = 0;
	let activeChannels: number = 0;

	async function readFile(file: File) {
		const buffer = await file.arrayBuffer();
		const png = fastpng.decode(buffer, { checkCrc: true });
		return png;
	}

	function handleNewFiles(event: CustomEvent<File[]>) {
		const files = event.detail;

		openFiles = [...openFiles, ...files];

		files.forEach(async (file) => {
			let png = await readFile(file);
			activePixels = png.data as Uint8Array | Uint16Array;
			activeWidth = png.width;
			activeHeight = png.height;
			activeChannels = png.channels;
		});
	}
</script>

<div class="container">
	<DragNDrop width="14rem" height="8rem" on:files={handleNewFiles} />

	<ImageDisplay
		imagePixels={activePixels}
		width={activeWidth}
		height={activeHeight}
		channels={activeChannels}
	/>
</div>

{#if openFiles.length > 0}
	<ul>
		{#each openFiles as file}
			<li>{file.name}</li>
		{/each}
	</ul>
{/if}

<style>
	.container {
		display: block;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 32px;
	}
</style>
