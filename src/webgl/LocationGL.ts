import { ContextGL } from "..";

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
  public readonly shadingOn: WebGLUniformLocation;
  public readonly textureMode: WebGLUniformLocation;
  public readonly textureImage: WebGLUniformLocation;
  public readonly textureEnvironment: WebGLUniformLocation;
  public readonly textureBump: WebGLUniformLocation;

  constructor(contextGL: ContextGL) {
    this.contextGL = contextGL;

    const gl = this.contextGL.gl;
    const program = this.contextGL.program;

    this.position = gl.getAttribLocation(program, "a_position");
    this.color = gl.getAttribLocation(program, "a_color");
    this.normal = gl.getAttribLocation(program, "a_normal");
    this.tangent = gl.getAttribLocation(program, "a_tangent");
    this.bitangent = gl.getAttribLocation(program, "a_bitangent");
    this.textureCoord = gl.getAttribLocation(program, "a_textureCoord");

    const projectionMatrix = gl.getUniformLocation(
      program,
      "u_projectionMatrix"
    );
    const viewMatrix = gl.getUniformLocation(program, "u_viewMatrix");
    const modelMatrix = gl.getUniformLocation(program, "u_modelMatrix");
    const normalMatrix = gl.getUniformLocation(program, "u_normalMatrix");
    const reverseLightDirection = gl.getUniformLocation(
      program,
      "u_reverseLightDirection"
    );
    const worldCameraPosition = gl.getUniformLocation(
      program,
      "u_worldCameraPosition"
    );
    const shadingOn = gl.getUniformLocation(program, "u_shadingOn");
    const textureMode = gl.getUniformLocation(program, "u_textureMode");

    const textureImage = gl.getUniformLocation(program, "u_texture_image");
    const textureEnvironment = gl.getUniformLocation(
      program,
      "u_texture_environment"
    );
    const textureBump = gl.getUniformLocation(program, "u_texture_bump");

    if (
      !projectionMatrix ||
      !viewMatrix ||
      !modelMatrix ||
      !normalMatrix ||
      !reverseLightDirection ||
      !worldCameraPosition ||
      !shadingOn ||
      !textureMode ||
      !textureImage ||
      !textureEnvironment ||
      !textureBump
    ) {
      throw new Error("Could not find uniform variable");
    }

    this.projectionMatrix = projectionMatrix;
    this.viewMatrix = viewMatrix;
    this.modelMatrix = modelMatrix;
    this.normalMatrix = normalMatrix;
    this.reverseLightDirection = reverseLightDirection;
    this.worldCameraPosition = worldCameraPosition;
    this.shadingOn = shadingOn;
    this.textureMode = textureMode;
    this.textureImage = textureImage;
    this.textureEnvironment = textureEnvironment;
    this.textureBump = textureBump;
  }
}
