import { IAnimation, IArticulatedModel, IFrame } from "../types";
import { FileManager } from "../utils";
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
    this.stop();
    this.resume();
  }

  public setOnChange(callback: (idx: number) => void) {
    this._callback = callback;
  }

  private apply() {
    if (!this._model) {
      return;
    }

    try {
      this._model.setFrame(this._animation.frames[this.idxCurAnimation]);
      this._callback(this.idxCurAnimation);
    } catch (e) {
      alert(e);
      clearInterval(this._interval);
    }
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
    this._interval = setInterval(() => {
      this.apply();

      this.idxCurAnimation = this.idxCurAnimation + 1;
      // TODO: if
    }, Animator.TIME_INTERVAL);
  }

  public prev() {
    this.idxCurAnimation = this.idxCurAnimation - 1;
    this.apply();
  }

  public next() {
    this.idxCurAnimation = this.idxCurAnimation + 1;
    this.apply();
  }

  public saveCurFrame() {
    const curFrame = this._animation.frames[this.idxCurAnimation]
    const json = JSON.stringify(curFrame);
    FileManager.writeFile("frame.json", json);
  }

  public saveAsFrame() {
    const model = this._model;
    if (!model) {
      return;
    }

    const asInterface = model.toInterface();
    const frame = this.transformToFrame(asInterface);
    const json = JSON.stringify(frame);
    FileManager.writeFile("frame.json", json);
  }

  public transformToFrame(iModel: IArticulatedModel) {
    const frame: IFrame = {
      transform: iModel.transform,
      children: iModel.children.map((child) => this.transformToFrame(child)),
    };
    return frame;
  }

  public loadFrame(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data: IFrame = JSON.parse(e.target?.result as string);
      alert("Frame loaded: " + this.idxCurAnimation);

      const allbefore = this._animation.frames.filter((_, idx) => {
        return idx <= this.idxCurAnimation;
      });
      const allafter = this._animation.frames.filter((_, idx) => {
        return idx > this.idxCurAnimation;
      });

      this._animation.frames = [...allbefore, data, ...allafter];
      this.idxCurAnimation = this.idxCurAnimation + 1;

      // const before = this._animation.frames.slice(0, this.idxCurAnimation);
      // const after = this._animation.frames.slice(this.idxCurAnimation);
      // this._animation.frames = [...before, data, ...after];

      // this._animation.frames[this.idxCurAnimation] = data;


      // this.idxCurAnimation = this.idxCurAnimation + 1;
      // this._animation.frames.splice(this.idxCurAnimation, 0, data);
      this.apply();
    };
    reader.readAsText(file);
  }

  public delCurFrame() {
    this._animation.frames.splice(this.idxCurAnimation, 1);
    this.idxCurAnimation = this.idxCurAnimation - 1;
    this.apply();
  }

  public saveAnimation() {
    const json = JSON.stringify(this._animation);
    FileManager.writeFile("animation.json", json);
  }
}
