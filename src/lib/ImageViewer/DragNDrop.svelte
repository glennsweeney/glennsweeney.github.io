<!-- Helpful reference for input, etc: https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications -->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// Allow the component instantiator to set our size
	export let width: string;
	export let height: string;

	// Current state whether or not we are dragged-to
	let dragging = false;

	// Event dispatcher for new files
	const dispatch = createEventDispatcher<{ files: File[] }>();

	let fileInput: HTMLInputElement;

	// Function to handle file selection
	function handleFileSelect(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		const selectedFiles = inputElement.files;
		if (!selectedFiles) {
			return;
		}
		const files = Array.from(selectedFiles);
		dispatchFiles(files);
	}

	// Event listener for button click (trigger the hidden input)
	function handleClick(event: Event) {
		console.log('click');
		fileInput.click();
	}

	// Event listeners for different drag states
	function handleDragEnter(event: DragEvent) {
		event.stopPropagation();
		event.preventDefault();
		dragging = true;
	}

	function handleDragLeave(event: DragEvent) {
		event.stopPropagation();
		event.preventDefault();
		dragging = false;
	}

	function handleDragOver(event: DragEvent) {
		event.stopPropagation();
		event.preventDefault();
		dragging = true;
	}

	// Event listener for file drop
	function handleDrop(event: DragEvent) {
		event.stopPropagation();
		event.preventDefault();
		dragging = false;
		if (!event.dataTransfer) {
			return;
		}
		const droppedFiles = event.dataTransfer.files;
		if (droppedFiles) {
			const files = Array.from(droppedFiles);
			dispatchFiles(files);
		}
	}

	function dispatchFiles(files: File[]) {
		console.log('Selected files:', files);
		dispatch('files', files);
	}
</script>

<button
	class="file-selector"
	on:dragenter={handleDragEnter}
	on:dragleave={handleDragLeave}
	on:dragover={handleDragOver}
	on:drop={handleDrop}
	on:click={handleClick}
	style="width: {width}; height: {height};"
>
	{#if dragging}
		<p>Drop files here</p>
	{:else}
		<p>Click to select files</p>
	{/if}
</button>
<input bind:this={fileInput} on:change={handleFileSelect} type="file" multiple />

<style>
	input {
		display: none;
	}

	.file-selector {
		border-width: 2px;
		border-style: dotted;
		border-color: black;
		background-color: transparent;
		border-radius: 12px;
		cursor: pointer;
	}

	.file-selector:hover {
		background-color: var(--highlight-color);
	}
</style>
