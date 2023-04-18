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

function addElmtListener(elmtContainer: ElmtContainer, contextGL: ContextGL) {
  // CHANGE OBJECT
  elmtContainer.selectModel.addEventListener("change", () => {

  });

  // TRANSLATION
  elmtContainer.buttonTranslateLeft.addEventListener("click", () => {

  });
  elmtContainer.buttonTranslateRight.addEventListener("click", () => {

  });
  elmtContainer.buttonTranslateUp.addEventListener("click", () => {

  });
  elmtContainer.buttonTranslateDown.addEventListener("click", () => {

  });
  elmtContainer.buttonTranslateIn.addEventListener("click", () => {

  });
  elmtContainer.buttonTranslateOut.addEventListener("click", () => {

  });

  // SCALING
  elmtContainer.scaleFactor.addEventListener("change", () => {

  });
  elmtContainer.scaleButton.addEventListener("click", () => {

  });
  elmtContainer.buttonEnlarge.addEventListener("click", () => {

  });
  elmtContainer.buttonShrink.addEventListener("click", () => {

  });

  // ROTATION
  elmtContainer.rotateXObject.addEventListener("input", () => {
      selectedTree.ref.transform.rotation[0] = elmtContainer.rotateXObject.valueAsNumber;
  });
  elmtContainer.rotateYObject.addEventListener("input", () => {
    
  });
  elmtContainer.rotateZObject.addEventListener("input", () => {
    
  });

  // CAMERA
  elmtContainer.buttonZoomIn.addEventListener("click", () => {

  });
  elmtContainer.buttonZoomOut.addEventListener("click", () => {

  });
  elmtContainer.cameraRotateX.addEventListener("input", () => {

  });
  elmtContainer.cameraRotateY.addEventListener("input", () => {

  });
  elmtContainer.cameraRotateZ.addEventListener("input", () => {

  });


  // PROJECTION
  elmtContainer.buttonProjOrthographic.addEventListener("click", () => {

  });
  elmtContainer.buttonProjPerspective.addEventListener("click", () => {

  });
  elmtContainer.buttonProjOblique.addEventListener("click", () => {

  });

  // SHADE
  elmtContainer.shaderOn.addEventListener("click", () => {

  });

  // RESET
  elmtContainer.buttonReset.addEventListener("click", () => {

  });

  // SAVE & LOAD
  elmtContainer.buttonSave.addEventListener("click", () => {

  });
  elmtContainer.loadInput.addEventListener("change", () => {
    
  });

  // MODAL
  elmtContainer.helpBtn.addEventListener("click", () => {
  });

  console.log("addElmtListener");
}

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
    },
  })
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
  const newMat = new MatTransform(mat).transform(transform).mat;

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

  const articulatedModel = new ArticulatedModel(contextGL, CUBES);
  const renderer = new Renderer(contextGL);
  renderer.setModel(articulatedModel);

  const t = tree(articulatedModel);
  console.log(t);
  printTree(t);

  const t2 = mapperTree(articulatedModel);
  
  selectedTree = t2;
  addElmtListener(elmtContainer, contextGL);
  mapTreeToComponentTree(elmtContainer, t2);

  // renderer.render();

  requestAnimationFrame(renderer.render.bind(renderer));
};

var selectedTree: ITree;
main();
