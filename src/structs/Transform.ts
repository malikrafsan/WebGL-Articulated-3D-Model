import { ITransform, ExtendedMath } from "..";

export class Transform {
  private _translation: number[] = [0, 0, 0];
  private _rotation: number[] = [0, 0, 0];
  private _scale: number[] = [1, 1, 1];

  constructor(transform: ITransform) {
    const { translation, rotation, scale } = transform;

    for (let index = 0; index < 3; index++) {
      this._translation[index] = translation[index];
      this._rotation[index] = rotation[index];
      this._scale[index] = scale[index];
    }
  }

  public get translation(): number[] {
    return this._translation;
  }

  public get rotation(): number[] {
    return this._rotation;
  }

  public get scale(): number[] {
    return this._scale;
  }

  public ToRad() {
    const cloned = this.clone();
    cloned._rotation = cloned._rotation.map((value) =>
      ExtendedMath.degreeToRad(value)
    );
    return cloned;
  }

  public ToDegree() {
    const cloned = this.clone();
    cloned._rotation = cloned._rotation.map((value) => {
      return ExtendedMath.radToDegree(value);
    });
    return cloned;
  }

  public clone() {
    return new Transform({
      translation: this._translation,
      rotation: this._rotation,
      scale: this._scale,
    });
  }

  public toInterface(): ITransform {
    return {
      translation: this._translation,
      rotation: this._rotation,
      scale: this._scale,
    };
  }
}
