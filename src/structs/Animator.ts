import { IAnimation } from "../types";
import { ArticulatedModel } from "./ArticulatedModel";

export class Animator {
  public static readonly TIME_INTERVAL = 1000;
  private readonly _animation: IAnimation;
  private _idxCurAnimation: number = 0;
  private _interval: NodeJS.Timer;
  private _callback: (idx: number) => void = () => {};
  private _model: ArticulatedModel | null = null;

  constructor(animation: IAnimation) {
    this._animation = animation;
  }

  public setModel(model: ArticulatedModel) {
    this._model = model;
  }

  public start() {
    this._interval = setInterval(() => {
      this.apply();
      
      this.idxCurAnimation = this.idxCurAnimation + 1;
      // TODO: if 
    }, Animator.TIME_INTERVAL);
  }

  public setOnChange(callback: (idx: number) => void) {
    this._callback = callback;
  }

  private apply() {
    if (!this._model) {
      return;
    }

    this._model.setTransform(
      this._animation.frames[this.idxCurAnimation].transform
    );
    this._callback(this.idxCurAnimation);
  }

  public get idxCurAnimation() {
    return this._idxCurAnimation;
  }

  private set idxCurAnimation(idx: number) {
    this._idxCurAnimation = idx;
    this._idxCurAnimation += this._animation.frames.length;
    this._idxCurAnimation %= this._animation.frames.length;
  }

  public stop() {
    clearInterval(this._interval);
    this.idxCurAnimation = 0;
    this.apply();
  }

  public pause() {
    clearInterval(this._interval);
  }

  public resume() {
    this.start();
  }

  public prev() {
    this.idxCurAnimation = this.idxCurAnimation - 1;
    this.apply();
  }

  public next() {
    this.idxCurAnimation = this.idxCurAnimation + 1;
    this.apply();
  }
}
