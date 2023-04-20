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
import { GlobalVars } from "../structs/GlobalVars";

export class Renderer {
  private _contextGL: ContextGL;
  private _projection: PROJECTION_VALUES;
  private _projectionMatrix: Matrix4 = Matrix4.identity();
  private _isShadingOn: boolean = false;
  private _camera: Camera;
  // private _articulatedModel: ArticulatedModel | null = null;

  constructor(contextGL: ContextGL) {
    this._contextGL = contextGL;
    this._camera = new Camera();
    this.setProjection(CONFIG_RENDERER.DEFAULT_PROJECTION);
  }

  // public setModel(articulatedModel: ArticulatedModel) {
  //   this._articulatedModel = articulatedModel;
  // }

  public setShading(shading: boolean) {
    this._isShadingOn = shading;
  }

  public setCameraRadius(radius: number) {
    this._camera.setRadius(radius);
  }

  public setCameraAngleX(angle: number) {
    this._camera.setangleX(angle);
  }

  public setCameraAngleY(angle: number) {
    this._camera.setangleY(angle);
  }

  public getCameraAngle() {
    return this._camera.radius;
  }

  public setProjection(projection: PROJECTION_VALUES) {
    this._projection = projection;

    const config = configProjection(this._contextGL);
    const orthoConf = config.ORTHO;
    const persConf = config.PERSPECTIVE;
    const obConf = config.OBLIQUE;

    switch (projection) {
      case PROJECTION.ORTHOGRAPHIC:
        this._projectionMatrix = Matrix4.orthographic({
          left: orthoConf.LEFT,
          right: orthoConf.RIGHT,
          bottom: orthoConf.BOTTOM,
          top: orthoConf.TOP,
          near: orthoConf.NEAR,
          far: orthoConf.FAR,
        });
        break;
      // TODO: Implement other projections
      case PROJECTION.PERSPECTIVE:
        this._projectionMatrix = Matrix4.perspective({
          fov: persConf.FOV,
          near: persConf.NEAR,
          far: persConf.FAR,
          aspectRatio: persConf.ASPECT_RATIO,
        });
        break;
      case PROJECTION.OBLIQUE:
        const orthoMat = Matrix4.orthographic({
          left: orthoConf.LEFT,
          right: orthoConf.RIGHT,
          bottom: orthoConf.BOTTOM,
          top: orthoConf.TOP,
          near: orthoConf.NEAR,
          far: orthoConf.FAR,
        });
        const obliqueMat = Matrix4.oblique({
          theta: obConf.THETA,
          phi: obConf.PHI,
        });

        const mul = Matrix4.multiply(orthoMat, obliqueMat);
        this._projectionMatrix = mul;

        const matProject = new MatTransform(mul);
        matProject.translate(0, 0, obConf.Z_TRANSLATION);

        this._projectionMatrix = matProject.mat;
        break;
      default:
        throw new Error("Projection not implemented");
    }
  }

  public render(globalVars: GlobalVars) {
    const articulatedModel = globalVars.model;

    if (!articulatedModel) {
      throw new Error("No model to render");
    }

    this._contextGL.adjustSize();
    this._contextGL.clear();

    const projectionMat = this._projectionMatrix.clone();
    const lookAtMat = this._camera.lookAt;
    const viewMat = lookAtMat.clone().inverse();
    const modelMat = new MatTransform()
      // .rotateY(Math.PI / 5)
      // .scale(0.5, 0.5, 0.5)
      // .rotateX(Math.PI / 4)
      // .rotateZ(Math.PI)
      .mat;

    articulatedModel.draw({
      pMat: projectionMat,
      vMat: viewMat,
      mMat: modelMat,
      camera: this._camera,
      isShadingOn: this._isShadingOn,
    });

    requestAnimationFrame(() => this.render(globalVars));
  }
}