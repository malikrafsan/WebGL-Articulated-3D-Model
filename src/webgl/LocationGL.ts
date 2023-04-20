import { ContextGL, LOCATION_GL_CONFIG } from "..";

export class LocationGL {
  public readonly contextGL: ContextGL;

  public readonly position: number;
  public readonly color: number;
  public readonly normal: number;
  public readonly tangent: number;
  public readonly bitangent: number;
  public readonly textureCoord: number;

  public readonly projectionMatrix: WebGLUniformLocation;
  public readonly viewMatrix: WebGLUniformLocation;
  public readonly modelMatrix: WebGLUniformLocation;
  public readonly normalMatrix: WebGLUniformLocation;
  public readonly reverseLightDirection: WebGLUniformLocation;
  public readonly worldCameraPosition: WebGLUniformLocation;
  public readonly isShadingOn: WebGLUniformLocation;
  public readonly textureMode: WebGLUniformLocation;
  public readonly textureImage: WebGLUniformLocation;
  public readonly textureEnvironment: WebGLUniformLocation;
  public readonly textureBump: WebGLUniformLocation;
  public readonly ambientLight: WebGLUniformLocation;

  constructor(contextGL: ContextGL) {
    this.contextGL = contextGL;

    const gl = this.contextGL.gl;
    const program = this.contextGL.program;

    this.position = gl.getAttribLocation(program, LOCATION_GL_CONFIG.POSITION);
    this.color = gl.getAttribLocation(program, LOCATION_GL_CONFIG.COLOR);
    this.normal = gl.getAttribLocation(program, LOCATION_GL_CONFIG.NORMAL);
    this.tangent = gl.getAttribLocation(program, LOCATION_GL_CONFIG.TANGENT);
    this.bitangent = gl.getAttribLocation(
      program,
      LOCATION_GL_CONFIG.BITANGENT
    );
    this.textureCoord = gl.getAttribLocation(
      program,
      LOCATION_GL_CONFIG.TEXTURE_COORD
    );

    const projectionMatrix = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.PROJECTION_MATRIX
    );
    const viewMatrix = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.VIEW_MATRIX
    );
    const modelMatrix = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.MODEL_MATRIX
    );
    const normalMatrix = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.NORMAL_MATRIX
    );
    const reverseLightDirection = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.REVERSE_LIGHT_DIRECTION
    );
    const worldCameraPosition = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.WORLD_CAMERA_POSITION
    );
    const isShadingOn = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.SHADING_ON
    );
    const textureMode = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.TEXTURE_MODE
    );

    const textureImage = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.TEXTURE_IMAGE
    );
    const textureEnvironment = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.TEXTURE_ENVIRONMENT
    );
    const textureBump = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.TEXTURE_BUMP
    );
    const ambientLight = gl.getUniformLocation(
      program,
      LOCATION_GL_CONFIG.AMBIENT_LIGHT
    );

    if (
      !projectionMatrix ||
      !viewMatrix ||
      !modelMatrix ||
      !normalMatrix ||
      !reverseLightDirection ||
      !worldCameraPosition ||
      !isShadingOn ||
      !textureMode ||
      !textureImage ||
      !textureEnvironment ||
      !textureBump ||
      !ambientLight
    ) {
      throw new Error("Could not find uniform variable");
    }

    this.projectionMatrix = projectionMatrix;
    this.viewMatrix = viewMatrix;
    this.modelMatrix = modelMatrix;
    this.normalMatrix = normalMatrix;
    this.reverseLightDirection = reverseLightDirection;
    this.worldCameraPosition = worldCameraPosition;
    this.isShadingOn = isShadingOn;
    this.textureMode = textureMode;
    this.textureImage = textureImage;
    this.textureEnvironment = textureEnvironment;
    this.textureBump = textureBump;
    this.ambientLight = ambientLight;
  }
}
