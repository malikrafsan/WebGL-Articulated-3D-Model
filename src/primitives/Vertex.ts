import { Vector3, Color } from "..";

export class Vertex {
  private _position: Vector3;
  private _color: Color;

  constructor(position: Vector3, color: Color) {
    this._position = position;
    this._color = color;
  }

  public get position(): Vector3 {
    return this._position;
  }

  public get color(): Color {
    return this._color;
  }
}
