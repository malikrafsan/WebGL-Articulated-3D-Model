export class Matrix4 {
  private _m: number[][];

  constructor(m: number[][]) {
    if (m.length !== 4 || !m.every((row) => row.length === 4)) {
      throw new Error("Matrix must be 4x4");
    }

    this._m = m;
  }

  public get m() {
    return this._m;
  }

  public toArray() {
    return this._m.flat();
  }

  public static identity() {
    return new Matrix4([
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ]);
  }

  public elmt(i: number, j: number) {
    return this._m[i][j];
  }

  public setElmt(i: number, j: number, val: number) {
    this._m[i][j] = val;
  }

  public static multiply(m1: Matrix4, m2: Matrix4) {
    const m = m1.m;
    const n = m2.m;
    const result = new Array(4).fill(0).map(() => new Array(4).fill(0));

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          result[i][j] += m[i][k] * n[k][j];
        }
      }
    }

    return new Matrix4(result);
  }

  public static zero() {
    return new Matrix4([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  }

  public clone() {
    const newMat = this._m.map((row) => row.map((val) => val));
    return new Matrix4(newMat);
  }

  public inverse() {
    const m = this._m.flat();
    const inv = new Array(16).fill(0);

    inv[0] =
      m[5] * m[10] * m[15] -
      m[5] * m[11] * m[14] -
      m[9] * m[6] * m[15] +
      m[9] * m[7] * m[14] +
      m[13] * m[6] * m[11] -
      m[13] * m[7] * m[10];

    inv[4] =
      -m[4] * m[10] * m[15] +
      m[4] * m[11] * m[14] +
      m[8] * m[6] * m[15] -
      m[8] * m[7] * m[14] -
      m[12] * m[6] * m[11] +
      m[12] * m[7] * m[10];

    inv[8] =
      m[4] * m[9] * m[15] -
      m[4] * m[11] * m[13] -
      m[8] * m[5] * m[15] +
      m[8] * m[7] * m[13] +
      m[12] * m[5] * m[11] -
      m[12] * m[7] * m[9];

    inv[12] =
      -m[4] * m[9] * m[14] +
      m[4] * m[10] * m[13] +
      m[8] * m[5] * m[14] -
      m[8] * m[6] * m[13] -
      m[12] * m[5] * m[10] +
      m[12] * m[6] * m[9];

    inv[1] =
      -m[1] * m[10] * m[15] +
      m[1] * m[11] * m[14] +
      m[9] * m[2] * m[15] -
      m[9] * m[3] * m[14] -
      m[13] * m[2] * m[11] +
      m[13] * m[3] * m[10];

    inv[5] =
      m[0] * m[10] * m[15] -
      m[0] * m[11] * m[14] -
      m[8] * m[2] * m[15] +
      m[8] * m[3] * m[14] +
      m[12] * m[2] * m[11] -
      m[12] * m[3] * m[10];

    inv[9] =
      -m[0] * m[9] * m[15] +
      m[0] * m[11] * m[13] +
      m[8] * m[1] * m[15] -
      m[8] * m[3] * m[13] -
      m[12] * m[1] * m[11] +
      m[12] * m[3] * m[9];

    inv[13] =
      m[0] * m[9] * m[14] -
      m[0] * m[10] * m[13] -
      m[8] * m[1] * m[14] +
      m[8] * m[2] * m[13] +
      m[12] * m[1] * m[10] -
      m[12] * m[2] * m[9];

    inv[2] =
      m[1] * m[6] * m[15] -
      m[1] * m[7] * m[14] -
      m[5] * m[2] * m[15] +
      m[5] * m[3] * m[14] +
      m[13] * m[2] * m[7] -
      m[13] * m[3] * m[6];

    inv[6] =
      -m[0] * m[6] * m[15] +
      m[0] * m[7] * m[14] +
      m[4] * m[2] * m[15] -
      m[4] * m[3] * m[14] -
      m[12] * m[2] * m[7] +
      m[12] * m[3] * m[6];

    inv[10] =
      m[0] * m[5] * m[15] -
      m[0] * m[7] * m[13] -
      m[4] * m[1] * m[15] +
      m[4] * m[3] * m[13] +
      m[12] * m[1] * m[7] -
      m[12] * m[3] * m[5];

    inv[14] =
      -m[0] * m[5] * m[14] +
      m[0] * m[6] * m[13] +
      m[4] * m[1] * m[14] -
      m[4] * m[2] * m[13] -
      m[12] * m[1] * m[6] +
      m[12] * m[2] * m[5];

    inv[3] =
      -m[1] * m[6] * m[11] +
      m[1] * m[7] * m[10] +
      m[5] * m[2] * m[11] -
      m[5] * m[3] * m[10] -
      m[9] * m[2] * m[7] +
      m[9] * m[3] * m[6];

    inv[7] =
      m[0] * m[6] * m[11] -
      m[0] * m[7] * m[10] -
      m[4] * m[2] * m[11] +
      m[4] * m[3] * m[10] +
      m[8] * m[2] * m[7] -
      m[8] * m[3] * m[6];

    inv[11] =
      -m[0] * m[5] * m[11] +
      m[0] * m[7] * m[9] +
      m[4] * m[1] * m[11] -
      m[4] * m[3] * m[9] -
      m[8] * m[1] * m[7] +
      m[8] * m[3] * m[5];

    inv[15] =
      m[0] * m[5] * m[10] -
      m[0] * m[6] * m[9] -
      m[4] * m[1] * m[10] +
      m[4] * m[2] * m[9] +
      m[8] * m[1] * m[6] -
      m[8] * m[2] * m[5];

    const temp = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];

    if (temp < 0.001) {
      throw new Error("Matrix is not invertible");
    }

    const det = 1.0 / temp;

    const out = Array(16).fill(0);
    for (let i = 0; i < 16; i++) {
      out[i] = inv[i] * det;
    }

    const mat4x4 = [
      [out[0], out[1], out[2], out[3]],
      [out[4], out[5], out[6], out[7]],
      [out[8], out[9], out[10], out[11]],
      [out[12], out[13], out[14], out[15]],
    ];

    // this._m = mat4x4;
    // return this;
    return new Matrix4(mat4x4);
  }

  public static orthographic = (props: {
    left: number;
    right: number;
    bottom: number;
    top: number;
    near: number;
    far: number;
  }): Matrix4 => {
    const { left, right, bottom, top, near, far } = props;

    const width = right - left;
    const height = top - bottom;
    const depth = far - near;

    return new Matrix4([
      [2 / width, 0, 0, 0],
      [0, 2 / height, 0, 0],
      [0, 0, 2 / depth, 0],
      [0, 0, 0, 1],
    ]);
  };

  public transpose() {
    for (let i = 0; i < 4; i++) {
      for (let j = i; j < 4; j++) {
        const temp = this._m[i][j];
        this._m[i][j] = this._m[j][i];
        this._m[j][i] = temp;
      }
    }

    return this;
  }
}
