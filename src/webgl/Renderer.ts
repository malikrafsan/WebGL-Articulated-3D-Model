import {
  ContextGL,
  Matrix4,
  PROJECTION,
  PROJECTION_VALUES,
  Camera,
  configProjection,
  CONFIG_RENDERER,
  ArticulatedModel,
  MatTransform,
} from "..";

export class Renderer {
  private _contextGL: ContextGL;
  private _projection: PROJECTION_VALUES;
  private _projectionMatrix: Matrix4 = Matrix4.identity();
  private _isShadingOn: boolean = false;
  private _camera: Camera;
  private _articulatedModel: ArticulatedModel | null = null;

  constructor(contextGL: ContextGL) {
    this._contextGL = contextGL;
    this._camera = new Camera();
    this.setProjection(CONFIG_RENDERER.DEFAULT_PROJECTION);
  }

  public setModel(articulatedModel: ArticulatedModel) {
    this._articulatedModel = articulatedModel;
  }

  public setProjection(projection: PROJECTION_VALUES) {
    this._projection = projection;

    const config = configProjection(this._contextGL);
    switch (projection) {
      case PROJECTION.ORTHOGRAPHIC:
        this._projectionMatrix = Matrix4.orthographic({
          left: config.LEFT,
          right: config.RIGHT,
          bottom: config.BOTTOM,
          top: config.TOP,
          near: config.NEAR,
          far: config.FAR,
        });
        break;
      // TODO: Implement other projections
      default:
        throw new Error("Projection not implemented");
    }
  }

  public render() {
    if (!this._articulatedModel) {
      throw new Error("No model to render");
    }

    this._contextGL.adjustSize();
    this._contextGL.clear();

    const projectionMat = this._projectionMatrix.clone();
    const lookAtMat = this._camera.lookAt;
    const viewMat = lookAtMat.clone().inverse();
    const modelMat = new MatTransform()
      .rotateY(90)
      .scale(0.9, 0.9, 0.9)
      .rotateX(45).mat;

    this._articulatedModel.draw({
      pMat: projectionMat,
      vMat: viewMat,
      mMat: modelMat,
      camera: this._camera,
      isShadingOn: this._isShadingOn,
    })

    requestAnimationFrame(this.render.bind(this));
  }
}
