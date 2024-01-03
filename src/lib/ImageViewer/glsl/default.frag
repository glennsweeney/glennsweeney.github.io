uniform sampler2D uSampler;

varying highp vec2 vTextureCoordinate;

void main() {
    highp vec4 color = texture2D(uSampler, vTextureCoordinate);
    highp vec3 rgb = color.rgb;
    rgb = rgb / 255.0;
    color = vec4(rgb, 1.0);
    gl_FragColor = color;
}