import { ITransform, ExtendedMath } from "..";

export class Transform {
  private _translation: number[] = [0, 0, 0];
  private _rotation: number[] = [0, 0, 0];
  private _scale: number[] = [1, 1, 1];

  constructor(transform: ITransform) {
    const { translation, rotation, scale } = transform;

    this._translation = translation;
    this._rotation = rotation;
    this._scale = scale;
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
    this._rotation = this._rotation.map((value) =>
      ExtendedMath.degreeToRad(value)
    );
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
