import { Vertex, AXIS, TEXTURE, PROJECTION } from "..";

export type AXIS_KEYS = keyof typeof AXIS;
export type AXIS_VALUES = (typeof AXIS)[AXIS_KEYS];

export type TEXTURE_KEYS = keyof typeof TEXTURE;
export type TEXTURE_VALUES = (typeof TEXTURE)[TEXTURE_KEYS];

export type PROJECTION_KEYS = keyof typeof PROJECTION;
export type PROJECTION_VALUES = (typeof PROJECTION)[PROJECTION_KEYS];

export interface ITransform {
  translation: number[];
  rotation: number[];
  scale: number[];
}

export interface INodeModel {
  vertices: Vertex[];
  faces: number[][];
}

export interface IArticulatedModel {
  name: string;
  node: INodeModel;
  transform: ITransform;
  children: IArticulatedModel[];
  texture: TEXTURE_VALUES;
}

export const a = 0;
