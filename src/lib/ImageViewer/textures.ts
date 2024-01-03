import { checkError } from './utils';

export function loadTexture(
	gl: WebGL2RenderingContext,
	pixels: Uint8Array | Uint16Array,
	width: number,
	height: number,
	channels: number
) {
	const texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);

	// Check buffer size
	if (pixels.length !== width * height * channels) {
		console.error(
			'Invalid pixel buffer size ',
			pixels.length,
			' for ',
			width,
			'x',
			height,
			'x',
			channels,
			' image'
		);
		return null;
	}

	// Handle one or three channel texture loading
	let internalFormat: number;
	let format: number;
	switch (channels) {
		case 1:
			internalFormat = gl.R32F;
			format = gl.RED;
			break;

		case 3:
			internalFormat = gl.RGB32F;
			format = gl.RGB;
			break;

		default:
			console.error('unsupported number of channels: ', channels);
			return null;
			break;
	}

	// Convert to float, required by this table:
	// https://registry.khronos.org/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE
	const textureBuffer = new Float32Array(pixels.length);
	for (let i = 0; i < pixels.length; i++) {
		textureBuffer[i] = pixels[i];
	}

	// Create the texture
	gl.texImage2D(
		gl.TEXTURE_2D,
		0,
		internalFormat,
		width,
		height,
		0,
		format,
		gl.FLOAT,
		textureBuffer
	);
	if (checkError(gl)) {
		console.error('Failed to load image texture.');
		return null;
	}

	// No mipmapping, clamp to edge, nearest neighbor interpolation
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

	return texture;
}
