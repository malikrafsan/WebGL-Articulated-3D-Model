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

  public toArray() {
    return {
      position: this._position.toArray(),
      color: this._color.toArray(),
    }
  }

  public static fromArray(array: {
    position: number[],
    color: number[],
  }) {
    return new Vertex(
      Vector3.fromArray(array.position),
      Color.fromArray(array.color)
    );
  }
}
