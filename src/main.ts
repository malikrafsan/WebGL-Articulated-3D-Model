import {
  ElmtContainer,
  ArticulatedModel,
  FileManager,
  CONFIG_PATH,
  ContextGL,
  CUBES,
  Transform,
  Renderer,
  Matrix4,
  MatTransform,
} from ".";
import { ITree, ITreeButton } from "./structs/tree";
import { Animator } from "./structs/Animator";
import { addElmtListener, refreshModel } from "./structs/elmtListener";

const tree = (model: ArticulatedModel, level: number = 0) => {
  const t = {
    name: model.name,
    ref: model,
    level: level,
    children: model.children.map((child) => tree(child, level + 1)),
  } as const;

  return t;
};

const mapperTree = (model: ArticulatedModel, level: number = 0) => {
  const tree: ITree = {
    name: model.name,
    level: level,
    ref: model,
    children: model.children.map((child) => mapperTree(child, level + 1)),
  } as const;

  return tree;
};

// interface ITreeSlider extends ITree {
//   slider: HTMLElement;
// }

// const mapTreeToSlider = (elmtContainer: ElmtContainer, tree: ITree) => {
//   const slider = elmtContainer.createSlider({
//     id: "slider-" + tree.name,
//     min: -180,
//     max: 180,
//     value: 0,
//     callbackOnChange: (value: number) => {
//       tree.ref.transform.rotation[0] = value;
//     },
//   });
//   elmtContainer.addElmt("#sliders", slider);

//   const sliderTree: ITreeSlider = {
//     ...tree,
//     slider: slider,
//     children: tree.children.map((child) =>
//       mapTreeToSlider(elmtContainer, child)
//     ),
//   };

//   return sliderTree;
// };

const mapTreeToComponentTree = (elmtContainer: ElmtContainer, tree: ITree) => {
  const btn = elmtContainer.createButton({
    id: tree.name,
    depth: tree.level,
    callbackOnClick: () => {
      selectedTree = tree;
      refreshModel(elmtContainer);
      elmtContainer.activeComponent.innerHTML = tree.name;
    },
  });
  elmtContainer.addElmt("#component-tree", btn);

  const componentTree: ITreeButton = {
    ...tree,
    button: btn,
    children: tree.children.map((child) =>
      mapTreeToComponentTree(elmtContainer, child)
    ),
  };

  return componentTree;
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

const test = () => {
  const transform = new Transform({
    translation: [10, 9, 1],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
  });

  const mat = new Matrix4([
    [1, 3, 4, 5],
    [-1, 2, 5, 2],
    [5, 3, 1, 3],
    [1, 4, 5, 1],
  ]);
  const newMat = new MatTransform(mat).scale(1.1,1.1,1.1);

  console.log("result");
  console.log(newMat);
};

const main = async () => {
  test();

  const vertexShaderScript = await FileManager.readFile(
    CONFIG_PATH.VERTEX_SHADER
  );
  const fragmentShaderScript = await FileManager.readFile(
    CONFIG_PATH.FRAGMENT_SHADER
  );

  const elmtContainer = new ElmtContainer();
  const contextGL = new ContextGL(elmtContainer.canvas);
  contextGL.init({ vertexShaderScript, fragmentShaderScript });

  const articulatedModel = new ArticulatedModel(contextGL, CUBES.model);
  renderer = new Renderer(contextGL);
  renderer.setModel(articulatedModel);

  const t = tree(articulatedModel);
  console.log(t);
  printTree(t);

  const t2 = mapperTree(articulatedModel);

  selectedTree = t2;

  const animator = new Animator(CUBES.animation);
  animator.setModel(articulatedModel);

  addElmtListener(elmtContainer, contextGL, animator, articulatedModel);
  elmtContainer.activeComponent.innerHTML = t2.name;
  mapTreeToComponentTree(elmtContainer, t2);

  requestAnimationFrame(renderer.render.bind(renderer));
};

// global variable
export var selectedTree: ITree;
export var renderer: Renderer;

// main function
main();
// test();