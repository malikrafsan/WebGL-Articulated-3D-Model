import {
  ContextGL,
  ElmtContainer,
  IAnimation,
  ArticulatedModel,
  IGlobalVars,
  Renderer,
  ITree,
} from "..";
import { Animator } from "./Animator";

export class GlobalVars {
  private _model: ArticulatedModel;
  private _animator: Animator;
  private _elmtContainer: ElmtContainer;
  private _contextGL: ContextGL;
  private _tree: ITree;
  private _renderer: Renderer;
  private _default: ArticulatedModel;

  constructor(props: IGlobalVars) {
    const { model, animator, elmtContainer, contextGL, tree, renderer, defaultModel } = props;

    this._model = model;
    this._animator = animator;
    this._elmtContainer = elmtContainer;
    this._contextGL = contextGL;
    this._tree = tree;
    this._renderer = renderer;
    this._default = defaultModel;
  }

  public get default() {
    return this._default;
  }

  public set default(defaultModel: ArticulatedModel) {
    this._default = defaultModel;
  }

  public get model() {
    return this._model;
  }

  public set model(model: ArticulatedModel) {
    this._model = model;
  }

  public get animator() {
    return this._animator;
  }

  public set animator(animator: Animator) {
    this._animator = animator;
  }

  public get elmtContainer() {
    return this._elmtContainer;
  }

  public get contextGL() {
    return this._contextGL;
  }

  public get tree() {
    return this._tree;
  }
  public set tree(tree: ITree) {
    this._tree = tree;
  }

  public get renderer() {
    return this._renderer;
  }
}
