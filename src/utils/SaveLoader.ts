import {
  Color,
  ContextGL,
  FileManager,
  IArticulatedModel,
  ArticulatedModel,
  IRawArticulatedModel,
  Vector3,
  Vertex,
} from "..";

export class SaveLoader {
  static async saveModel(model: ArticulatedModel, filePath: string) {
    const json = JSON.stringify(this.convertToRaw(model.toInterface()));
    await FileManager.writeFile(filePath, json);
  }

  static async loadModel(
    file: File,
    callback: (model: IArticulatedModel) => void
  ) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const data: IRawArticulatedModel = JSON.parse(e.target?.result as string);
      const iModel = SaveLoader.convertFromRaw(data);
      callback(iModel);
    };
    reader.readAsText(file);


    // const json: IRawArticulatedModel = JSON.parse(file);
    // const iModel = this.convertFromRaw(json);

    // return new ArticulatedModel(contextGL, iModel);
  }

  static convertFromRaw(raw: IRawArticulatedModel): IArticulatedModel {
    return {
      name: raw.name,
      node: {
        vertices: raw.node.vertices.map((v) => Vertex.fromArray(v)),
        faces: raw.node.faces,
      },
      transform: raw.transform,
      children: raw.children.map((child) => this.convertFromRaw(child)),
      texture: raw.texture,
    };
  }

  static convertToRaw(model: IArticulatedModel): IRawArticulatedModel {
    return {
      name: model.name,
      node: {
        vertices: model.node.vertices.map((v) => v.toArray()),
        faces: model.node.faces,
      },
      transform: model.transform,
      children: model.children.map((child) => this.convertToRaw(child)),
      texture: model.texture,
    };
  }
}
