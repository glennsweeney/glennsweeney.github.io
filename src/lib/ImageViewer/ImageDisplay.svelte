<script lang="ts">
	import { onMount } from 'svelte';
	import { initShaders } from './shaders';
	import { initBuffers } from './buffers';
	import { loadTexture } from './textures';

	export let imagePixels: Uint8Array | Uint16Array | null;
	export let width: number;
	export let height: number;
	export let channels: number;

	let canvas: HTMLCanvasElement;
	let gl: WebGL2RenderingContext | null;
	let texture: WebGLTexture | null;
	let activeShader: WebGLProgram;
	let activeBuffer: WebGLBuffer;

	// Reactively reload the texture whenever a new image is supplied
	$: if (imagePixels && gl) {
		texture = loadTexture(gl, imagePixels, width, height, channels);
		draw(gl, activeShader, activeBuffer);
	}

	function draw(gl: WebGL2RenderingContext, shaderProgram: WebGLProgram, buffer: WebGLBuffer) {
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(shaderProgram);
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		const attribPositionIndex = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
		const attribTextureIndex = gl.getAttribLocation(shaderProgram, 'aTextureCoordinate');
		gl.vertexAttribPointer(
			attribPositionIndex,
			2,
			gl.FLOAT,
			false,
			4 * Float32Array.BYTES_PER_ELEMENT,
			0
		);
		gl.enableVertexAttribArray(attribPositionIndex);

		if (texture) {
			gl.vertexAttribPointer(
				attribTextureIndex,
				2,
				gl.FLOAT,
				false,
				4 * Float32Array.BYTES_PER_ELEMENT,
				2 * Float32Array.BYTES_PER_ELEMENT
			);

			gl.enableVertexAttribArray(attribTextureIndex);

			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.uniform1i(gl.getUniformLocation(shaderProgram, 'uSampler'), 0);
		}

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	onMount(() => {
		gl = canvas.getContext('webgl2');
		if (!gl) {
			console.error('WebGL2 is not supported - please check browser compatibility');
			alert('WebGL2 is not supported - please check browser compatibility.');
			return;
		}
		if (!gl.getExtension('EXT_color_buffer_float')) {
			console.error('Floating point textures are not supported on this system');
			alert('Floating point textures are not supported on this system.');
		}

		const shaders = initShaders(gl)!;
		const buffers = initBuffers(gl)!;

		activeShader = shaders.default;
		activeBuffer = buffers.quad;

		draw(gl, activeShader, activeBuffer);
	});
</script>

<canvas bind:this={canvas}></canvas>
