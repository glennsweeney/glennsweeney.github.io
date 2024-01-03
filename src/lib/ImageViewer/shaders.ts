import { checkError } from './utils';
import defaultVert from './glsl/default.vert';
import defaultFrag from './glsl/default.frag';

function loadShader(gl: WebGL2RenderingContext, type: number, source: string) {
	const shader = gl.createShader(type);
	if (shader === null) {
		console.error('Unable to create shader');
		return null;
	}
	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

function initShaderProgram(
	gl: WebGL2RenderingContext,
	vertexShaderSource: string,
	fragmentShaderSource: string
) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	if (!vertexShader) {
		console.error('Failed to load vertex shader');
		return null;
	}
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	if (!fragmentShader) {
		console.error('Failed to load fragment shader');
		return null;
	}

	const shaderProgram = gl.createProgram();
	if (!shaderProgram) {
		console.error('Failed to create shader program');
		return null;
	}

	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);

	gl.linkProgram(shaderProgram);

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		console.error(
			'Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram)
		);
		return null;
	}

	return shaderProgram;
}

export function initShaders(gl: WebGL2RenderingContext) {
	const defaultShader = initShaderProgram(gl, defaultVert, defaultFrag);
	if (!defaultShader || checkError(gl)) {
		console.error('Failed to initialize default shader');
		return null;
	}

	const shaders = {
		default: defaultShader
	};

	return shaders;
}
