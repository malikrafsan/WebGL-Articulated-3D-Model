import {
  ElmtContainer,
  ArticulatedModel,
  FileManager,
  CONFIG_PATH,
  ContextGL,
  CUBES,
  Renderer,
} from ".";

const tree = (model: ArticulatedModel, level: number = 0) => {
  const t = {
    name: model.name,
    ref: model,
    level: level,
    children: model.children.map((child) => tree(child, level + 1)),
  } as const;

  return t;
};

interface ITree {
  name: string;
  ref: ArticulatedModel;
  level: number;
  children: ITree[];
}

const mapperTree = (model: ArticulatedModel, level: number = 0) => {
  const tree: ITree = {
    name: model.name,
    level: level,
    ref: model,
    children: model.children.map((child) => mapperTree(child, level + 1)),
  } as const;

  return tree;
};

interface ITreeSlider extends ITree {
  slider: HTMLElement;
}

const mapTreeToSlider = (elmtContainer: ElmtContainer, tree: ITree) => {
  const slider = elmtContainer.createSlider({
    id: "slider-" + tree.name,
    min: -180,
    max: 180,
    value: 0,
    callbackOnChange: (value: number) => {
      tree.ref.transform.rotation[0] = value;
    },
  });
  elmtContainer.addElmt("#sliders", slider);

  const sliderTree: ITreeSlider = {
    ...tree,
    slider: slider,
    children: tree.children.map((child) =>
      mapTreeToSlider(elmtContainer, child)
    ),
  };

  return sliderTree;
};

const duplicateStr = (str: string, n: number) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
};

const printTree = (tree: any) => {
  console.log(duplicateStr("\t", tree.level) + tree.name);
  tree.children.forEach((child: any) => printTree(child));
};

const main = async () => {
  const vertexShaderScript = await FileManager.readFile(
    CONFIG_PATH.VERTEX_SHADER
  );
  const fragmentShaderScript = await FileManager.readFile(
    CONFIG_PATH.FRAGMENT_SHADER
  );

  const elmtContainer = new ElmtContainer();
  const contextGL = new ContextGL(elmtContainer.canvas);
  contextGL.init({ vertexShaderScript, fragmentShaderScript });

  const articulatedModel = new ArticulatedModel(contextGL, CUBES);
  const renderer = new Renderer(contextGL);
  renderer.setModel(articulatedModel);

  const t = tree(articulatedModel);
  console.log(t);
  printTree(t);

  const t2 = mapperTree(articulatedModel);
  mapTreeToSlider(elmtContainer, t2);

  // renderer.render();

  requestAnimationFrame(renderer.render.bind(renderer));
};

main();
