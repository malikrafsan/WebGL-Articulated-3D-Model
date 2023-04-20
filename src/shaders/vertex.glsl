attribute vec4 a_vPos;
attribute vec4 a_vCol;
attribute vec3 a_vNorm;
attribute vec3 a_vTangent;
attribute vec3 a_vBitangent;
attribute vec2 a_vTextureCoord;

uniform mat4 u_vProjMat;
uniform mat4 u_vViewMat;
uniform mat4 u_vModelMat;
uniform mat4 u_vNormalMatrix;

varying mat3 v_fBumpMat;
varying vec4 v_fCol;
varying vec3 v_fModelPos;
varying vec3 v_fViewModelPos;
varying vec3 v_fWorldNorm;
varying vec2 v_fTextureCoord;

mat3 transpose(in mat3 v_in_Mat) {
  vec3 row0 = v_in_Mat[0];
  vec3 row1 = v_in_Mat[1];
  vec3 row2 = v_in_Mat[2];

  mat3 v_out_Mat = mat3(
    vec3(row0.x, row1.x, row2.x), 
    vec3(row0.y, row1.y, row2.y), 
    vec3(row0.z, row1.z, row2.z));
  return v_out_Mat;
}

void main() {
  mat4 viewModelMat = u_vViewMat * u_vModelMat;
  vec3 normalizedTangentVector = normalize(
    mat3(u_vNormalMatrix) * a_vTangent);
  vec3 normalizedBitangentVector = normalize(
    mat3(u_vNormalMatrix) * a_vBitangent);
  vec3 normalizedNormalVector = normalize(
    mat3(u_vNormalMatrix) * a_vNorm);

  gl_Position = u_vProjMat * viewModelMat * a_vPos;

  // pass to fragment shader
  v_fModelPos = vec3(u_vModelMat * a_vPos);
  v_fViewModelPos = vec3(viewModelMat * a_vPos);
  v_fWorldNorm = mat3(u_vModelMat) * a_vNorm;
  v_fCol = a_vCol;
  v_fTextureCoord = a_vTextureCoord;
  v_fBumpMat = transpose(mat3(
    normalizedTangentVector, 
    normalizedBitangentVector,
    normalizedNormalVector));
}