export class Vector3 {
  private _x1: number;
  private _x2: number;
  private _x3: number;

  constructor(x1: number, x2: number, x3: number) {
    this._x1 = x1;
    this._x2 = x2;
    this._x3 = x3;
  }

  public toArray(): number[] {
    return [this._x1, this._x2, this._x3];
  }

  public get x1() {
    return this._x1;
  }

  public get x2() {
    return this._x2;
  }

  public get x3() {
    return this._x3;
  }

  public set x1(x1: number) {
    this._x1 = x1;
  }

  public set x2(x2: number) {
    this._x2 = x2;
  }

  public set x3(x3: number) {
    this._x3 = x3;
  }

  public static zero() {
    return new Vector3(0, 0, 0);
  }

  public static subtract(v1: Vector3, v2: Vector3) {
    return new Vector3(v1._x1 - v2._x1, v1._x2 - v2._x2, v1._x3 - v2._x3);
  }

  public static add(v1: Vector3, v2: Vector3) {
    return new Vector3(v1._x1 + v2._x1, v1._x2 + v2._x2, v1._x3 + v2._x3);
  }

  public static dot(v1: Vector3, v2: Vector3) {
    return v1._x1 * v2._x1 + v1._x2 * v2._x2 + v1._x3 * v2._x3;
  }

  public static cross(v1: Vector3, v2: Vector3) {
    return new Vector3(
      v1._x2 * v2._x3 - v1._x3 * v2._x2,
      v1._x3 * v2._x1 - v1._x1 * v2._x3,
      v1._x1 * v2._x2 - v1._x2 * v2._x1
    );
  }

  public normalize() {
    const length = Math.sqrt(
      this._x1 * this._x1 + this._x2 * this._x2 + this._x3 * this._x3
    );

    this._x1 /= length;
    this._x2 /= length;
    this._x3 /= length;

    return this;
  }
}
