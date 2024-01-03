import { checkError } from './utils';

function initQuadBuffer(gl: WebGL2RenderingContext, scale: number = 1.0) {
	const quadBuffer = gl.createBuffer();
	if (!quadBuffer || checkError(gl)) {
		return null;
	}

	gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);

	// VertexX, VertexY, TexCoordX, TexCoordY
	// prettier-ignore
	const coordinates = [
         scale,  scale, 1, 0,
        -scale,  scale, 0, 0,
         scale, -scale, 1, 1,
        -scale, -scale, 0, 1];

	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coordinates), gl.STATIC_DRAW);

	return quadBuffer;
}

export function initBuffers(gl: WebGL2RenderingContext) {
	const quadBuffer = initQuadBuffer(gl, 1.0);
	if (!quadBuffer || checkError(gl)) {
		return null;
	}

	return {
		quad: quadBuffer
	};
}
