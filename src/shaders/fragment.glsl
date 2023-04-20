precision mediump float;

uniform sampler2D u_fTextureImg;
uniform samplerCube u_fTextureReflective;
uniform sampler2D u_fTextureBump;

uniform vec3 u_fAmbientLight;
uniform vec3 u_fWorldCamPos;
uniform vec3 u_fReverseLightDir;
uniform int u_fTextureMode;
uniform float u_fAlbedoMultiplier;
uniform bool u_fIsShadingOn;

varying vec4 v_fCol;
varying vec3 v_fModelPos;
varying vec3 v_fViewModelPos;
varying vec3 v_fWorldNorm;
varying vec2 v_fTextureCoord;
varying mat3 v_fBumpMat;

void main() {
   vec3 worldNormal = normalize(v_fWorldNorm);

   if (u_fTextureMode == 0) { // custom texture
      gl_FragColor = texture2D(u_fTextureImg, v_fTextureCoord);
   } else if(u_fTextureMode == 1) { // reflective texture
      vec3 eyeToSurfaceDir = normalize(v_fModelPos - u_fWorldCamPos);
      vec3 reflectionDir = reflect(eyeToSurfaceDir, worldNormal);
      gl_FragColor = textureCube(u_fTextureReflective, reflectionDir);
   } else if(u_fTextureMode == 2) { // bump texture
      vec3 fragPos = v_fBumpMat * v_fViewModelPos;
      vec3 lightPos = v_fBumpMat * u_fReverseLightDir;

      vec3 lightDir = normalize(lightPos - fragPos);
      vec3 albedo = texture2D(u_fTextureBump, v_fTextureCoord).rgb;

      vec3 norm = normalize(texture2D(u_fTextureBump, v_fTextureCoord).rgb * 2.0 - 1.0);
      float diffuse = max(dot(lightDir, norm), 0.0);

      gl_FragColor = vec4((diffuse * albedo) + (u_fAlbedoMultiplier * albedo), 1.0);
   } else if (u_fTextureMode == -1) { // no texture
      gl_FragColor = v_fCol;
   }

   if(u_fIsShadingOn) {
     float dirLight = dot(worldNormal, u_fReverseLightDir);
     vec3 light = u_fAmbientLight + dirLight;
     gl_FragColor.rgb *= light;
   }

}