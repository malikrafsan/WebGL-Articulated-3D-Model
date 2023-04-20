import { Matrix4, Vector3, ExtendedMath, MatTransform } from "..";

export class Camera {
  private _target = new Vector3(0, 0, 0);
  private _up = new Vector3(0, 1, 0);
  private _angleX = 0;
  private _angleY = 0;
  private _rotateX = true;
  private _radius: number = 500;
  private _lookAt: Matrix4;

  constructor() {
    this._lookAt = this.recalcLookAt();
  }

  public reset() {
    this._angleX = ExtendedMath.degreeToRad(0);
    this._angleY = ExtendedMath.degreeToRad(0);
    this._radius = 500;
    this._lookAt = this.recalcLookAt();
  }

  public setangleX(angleX: number) {
    this._angleX = angleX;
    this._lookAt = this.recalcLookAt();
    console.log(this._lookAt);
  }

  public setangleY(angleY: number) {
    this._angleY = angleY;
    this._lookAt = this.recalcLookAt();
  }

  public get angle(): Array<Number> {
    return [this._angleX, this._angleY];
  }

  public setRadius(radius: number) {
    this._radius *= radius;
    this._lookAt = this.recalcLookAt();
  }

  public get radius(): number {
    return this._radius;
  }

  public get lookAt(): Matrix4 {
    return this.recalcLookAt();
  }

  public get position(): Vector3 {
    const camMat = new MatTransform(Matrix4.identity());

    camMat.rotateX(this._angleX);
    camMat.rotateY(this._angleY);

    camMat.translate(0, 0, this._radius);

    const pos = new Vector3(
      camMat.mat.elmt(3, 0),
      camMat.mat.elmt(3, 1),
      camMat.mat.elmt(3, 2)
    );

    return pos;
  }

  public recalcLookAt() {
    const pos = this.position;

    const zAxis = Vector3.subtract(pos, this._target).normalize();
    const xAxis = Vector3.cross(this._up, zAxis).normalize();
    const yAxis = Vector3.cross(zAxis, xAxis).normalize();

    const mat = new Matrix4([
      [xAxis.x1, xAxis.x2, xAxis.x3, 0],
      [yAxis.x1, yAxis.x2, yAxis.x3, 0],
      [zAxis.x1, zAxis.x2, zAxis.x3, 0],
      [pos.x1, pos.x2, pos.x3, 1],
    ]);

    return mat;
  }
}
