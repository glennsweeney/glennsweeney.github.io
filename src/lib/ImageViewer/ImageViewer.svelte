<script lang="ts">
	import DragNDrop from './DragNDrop.svelte';
	import * as fastpng from 'fast-png';

	let openFiles: File[] = [];

	async function readFile(file: File) {
		const buffer = await file.arrayBuffer();
		const png = fastpng.decode(buffer, { checkCrc: true });
		console.log(png);
	}

	function handleNewFiles(event: CustomEvent<File[]>) {
		const files = event.detail;

		openFiles = [...openFiles, ...files];

		files.forEach((file) => {
			readFile(file);
		});
	}
</script>

<div class="container">
	<DragNDrop width="14rem" height="8rem" on:files={handleNewFiles} />
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
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 32px;
	}
</style>
