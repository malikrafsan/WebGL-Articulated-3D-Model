import { ArticulatedModel } from "./ArticulatedModel";

export interface ITree {
    name: string;
    ref: ArticulatedModel;
    level: number;
    children: ITree[];
  }

export interface ITreeButton extends ITree {
    button: HTMLElement;
  }