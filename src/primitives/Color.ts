export class Color {
  private _r: number;
  private _g: number;
  private _b: number;
  private _a: number;

  constructor(r: number, g: number, b: number, a?: number) {
    this._r = r;
    this._g = g;
    this._b = b;
    this._a = a || 1;
  }

  public toArray(): number[] {
    return [this._r, this._g, this._b, this._a];
  }

  public clone() {
    return new Color(this._r, this._g, this._b, this._a);
  }
}
