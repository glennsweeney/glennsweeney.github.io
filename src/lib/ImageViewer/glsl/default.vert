attribute vec4 aVertexPosition;
attribute vec2 aTextureCoordinate;

varying highp vec2 vTextureCoordinate;

void main() {
    gl_Position = aVertexPosition;
    vTextureCoordinate = aTextureCoordinate;
}