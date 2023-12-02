<script lang="ts">
	import { onMount, afterUpdate, tick } from 'svelte';

	let canvas: HTMLCanvasElement;
	let container: HTMLDivElement;
	let ctx: CanvasRenderingContext2D;
	let width: number;
	let height: number;

	const draw = () => {
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = 'rgb(255, 0, 0)';
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.beginPath();
		ctx.moveTo(width / 2 - 50, height / 2);
		ctx.arc(width / 2, height / 2, 50, 0, 2 * Math.PI);
		ctx.fill();
		console.log('DRAW');
	};

	const updateDimensions = () => {
		width = canvas.clientWidth;
		height = canvas.clientHeight;
		draw();
	};

	onMount(async () => {
		ctx = canvas.getContext('2d')!;
		updateDimensions();
		container.addEventListener('resize', updateDimensions);
		await tick();
		draw();
	});

	afterUpdate(() => {
		updateDimensions();
	});
</script>

<div class="container" bind:this={container} bind:clientWidth={width} bind:clientHeight={height}>
	<canvas bind:this={canvas} {width} {height} />
</div>

<style>
	.container {
		width: 100%;
		height: 200px;
	}
	canvas {
		border: 1px solid #000;
		display: block;
	}
</style>
