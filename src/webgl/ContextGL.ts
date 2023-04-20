import { FileManager, CONFIG_GL } from "..";
import { GlobalVars } from "../structs/GlobalVars";

export class ContextGL {
  private readonly _canvas: HTMLCanvasElement;
  private readonly _gl: WebGLRenderingContext;
  private _program: WebGLProgram;
  private _width: number;
  private _height: number;

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      throw new Error("WebGL not supported");
    }

    this._gl = gl;
    this._width = canvas.width;
    this._height = canvas.height;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }

  public get gl() {
    return this._gl;
  }

  public get program() {
    return this._program;
  }

  public adjustSize(globalVars: GlobalVars) {
    const { clientWidth, clientHeight } = this._canvas;
    if (
      this._canvas.width !== clientWidth ||
      this._canvas.height !== clientHeight
    ) {
      this._canvas.width = clientWidth;
      this._canvas.height = clientHeight;
      globalVars.renderer.reset();
    }

    this._width = clientWidth;
    this._height = clientHeight;
  }

  public clear() {
    this._gl.viewport(0, 0, this._gl.canvas.width, this._gl.canvas.height);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT);
    this._gl.enable(this._gl.CULL_FACE);
    this._gl.enable(this._gl.DEPTH_TEST);
  }

  private initShader(type: number, shaderText: string) {
    const shader = this._gl.createShader(type);
    if (!shader) {
      throw new Error("Could not create shader");
    }

    this._gl.shaderSource(shader, shaderText);
    this._gl.compileShader(shader);

    const success = this._gl.getShaderParameter(
      shader,
      this._gl.COMPILE_STATUS
    );
    if (!success) {
      throw new Error("Could not compile shader");
    }

    return shader;
  }

  private initProgram(props: {
    vertexShaderScript: string;
    fragmentShaderScript: string;
  }) {
    const { vertexShaderScript, fragmentShaderScript } = props;

    const vertexShader = this.initShader(
      this._gl.VERTEX_SHADER,
      vertexShaderScript
    );
    const fragmentShader = this.initShader(
      this._gl.FRAGMENT_SHADER,
      fragmentShaderScript
    );

    const program = this._gl.createProgram();
    if (!program) {
      throw new Error("Could not create program");
    }

    this._gl.attachShader(program, vertexShader);
    this._gl.attachShader(program, fragmentShader);
    this._gl.linkProgram(program);

    const success = this._gl.getProgramParameter(program, this._gl.LINK_STATUS);
    if (!success) {
      throw new Error("Could not link program");
    }

    return program;
  }

  public init(props: {
    vertexShaderScript: string;
    fragmentShaderScript: string;
  }) {
    this._program = this.initProgram(props);

    this._gl.useProgram(this._program);

    this.setUniformVar(
      CONFIG_GL.VAR_RESOLUTION,
      this._gl.canvas.width,
      this._gl.canvas.height
    );
  }

  public setUniformVar(name: string, ...values: number[]) {
    if (!this._program) {
      throw new Error("Program not initialized");
    }

    const location = this._gl.getUniformLocation(this._program, name);

    switch (values.length) {
      case 1:
        this._gl.uniform1f(location, values[0]);
        break;
      case 2:
        this._gl.uniform2f(location, values[0], values[1]);
        break;
      case 3:
        this._gl.uniform3f(location, values[0], values[1], values[2]);
        break;
      case 4:
        this._gl.uniform4f(
          location,
          values[0],
          values[1],
          values[2],
          values[3]
        );
        break;
      default:
        throw new Error("Invalid number of values");
    }
  }
}
