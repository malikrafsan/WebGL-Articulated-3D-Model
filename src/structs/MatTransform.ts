import { Matrix4, Transform, AXIS_VALUES, AXIS } from "..";

export class MatTransform {
  private _mat: Matrix4;

  constructor(mat?: Matrix4) {
    if (mat) {
      this._mat = mat;
      return this;
    }

    this._mat = Matrix4.identity();
  }

  public get mat() {
    return this._mat;
  }

  public position() {
    return [this._mat.elmt(3, 0), this._mat.elmt(3, 1), this._mat.elmt(3, 2)];
  }

  public transform(transform: Transform): MatTransform {
    const translation = transform.translation;
    const rotation = transform.rotation;
    const scale = transform.scale;

    return this.translate(translation[0], translation[1], translation[2])
      .rotateX(rotation[0])
      .rotateY(rotation[1])
      .rotateZ(rotation[2])
      .scale(scale[0], scale[1], scale[2]);
  }

  public static orthographic(
    left: number,
    right: number,
    bottom: number,
    top: number,
    near: number,
    far: number
  ) {
    const width = right - left;
    const height = top - bottom;
    const depth = far - near;

    const mat = new Matrix4([
      [2 / width, 0, 0, 0],
      [0, 2 / height, 0, 0],
      [0, 0, 2 / depth, 0],
      [0, 0, 0, 1],
    ]);

    return new MatTransform(mat);
  }

  public static perpective(props: {
    fov: number;
    near: number;
    far: number;
    aspectRatio: number;
  }) {
    const { fov, near, far, aspectRatio } = props;

    const f = Math.tan(Math.PI * 0.5 - 0.5 * fov);
    const depth = far - near;
    const invDepth = 1 / depth;

    const mat = new Matrix4([
      [f / aspectRatio, 0, 0, 0],
      [0, f, 0, 0],
      [0, 0, (far + near) * invDepth, -1],
      [0, 0, 2 * near * far * invDepth, 0],
    ]);

    return new MatTransform(mat);
  }

  public translate(x: number, y: number, z: number): MatTransform {
    // TODO: CHECK VALIDITY
    const mat = Matrix4.identity();
    mat.setElmt(3, 0, x);
    mat.setElmt(3, 1, y);
    mat.setElmt(3, 2, z);
    this._mat = Matrix4.multiply(mat, this._mat);
    return this;
  }

  public scale(x: number, y: number, z: number): MatTransform {
    const mat = Matrix4.identity();
    mat.setElmt(0, 0, x);
    mat.setElmt(1, 1, y);
    mat.setElmt(2, 2, z);
    this._mat = Matrix4.multiply(mat, this._mat);
    return this;
  }

  public rotateX(angle: number): MatTransform {
    const mat = Matrix4.identity();
    mat.setElmt(1, 1, Math.cos(angle));
    mat.setElmt(1, 2, Math.sin(angle));
    mat.setElmt(2, 1, -Math.sin(angle));
    mat.setElmt(2, 2, Math.cos(angle));
    this._mat = Matrix4.multiply(mat, this._mat);
    return this;
  }

  public rotateY(angle: number): MatTransform {
    const mat = Matrix4.identity();
    mat.setElmt(0, 0, Math.cos(angle));
    mat.setElmt(0, 2, -Math.sin(angle));
    mat.setElmt(2, 0, Math.sin(angle));
    mat.setElmt(2, 2, Math.cos(angle));
    this._mat = Matrix4.multiply(mat, this._mat);
    return this;
  }

  public rotateZ(angle: number): MatTransform {
    const mat = Matrix4.identity();
    mat.setElmt(0, 0, Math.cos(angle));
    mat.setElmt(0, 1, Math.sin(angle));
    mat.setElmt(1, 0, -Math.sin(angle));
    mat.setElmt(1, 1, Math.cos(angle));
    this._mat = Matrix4.multiply(mat, this._mat);
    return this;
  }

  public rotate(axis: AXIS_VALUES, angle: number): MatTransform {
    switch (axis) {
      case AXIS.X:
        return this.rotateX(angle);
      case AXIS.Y:
        return this.rotateY(angle);
      case AXIS.Z:
        return this.rotateZ(angle);
      default:
        throw new Error("Invalid axis");
    }
  }

  public clone(): MatTransform {
    return new MatTransform(this._mat.clone());
  }
}
