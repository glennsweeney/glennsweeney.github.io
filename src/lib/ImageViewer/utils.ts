function getWebGLErrorString(gl: WebGL2RenderingContext, error: number): string {
	switch (error) {
		case gl.NO_ERROR:
			return 'No error';
		case gl.INVALID_ENUM:
			return 'Invalid enum';
		case gl.INVALID_VALUE:
			return 'Invalid value';
		case gl.INVALID_OPERATION:
			return 'Invalid operation';
		case gl.OUT_OF_MEMORY:
			return 'Out of memory';
		case gl.INVALID_FRAMEBUFFER_OPERATION:
			return 'Invalid framebuffer operation';
		case gl.CONTEXT_LOST_WEBGL:
			return 'Context lost';
		default:
			return `Unknown error code ${error}`;
	}
}

export function checkError(gl: WebGL2RenderingContext) {
	const error = gl.getError();
	if (error !== gl.NO_ERROR) {
		console.error('WebGL Error: ', getWebGLErrorString(gl, error), ' (', error, ')');
	}
	return error !== gl.NO_ERROR;
}
