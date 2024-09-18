//the shader ig?
attribute vec3 aVertexPosition;
void main(){
  gl_Position = vec4(aVertexPosition, 1.0);
}

void main(){
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}