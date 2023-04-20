import {
  ElmtContainer,
  ArticulatedModel,
  FileManager,
  CONFIG_PATH,
  ContextGL,
  CUBES,
  CAR,
  CAR_ANIM,
  CUBES_ANIM,
  Transform,
  Renderer,
  Matrix4,
  MatTransform,
  ITree,
  ITreeButton,
} from ".";
import { Animator } from "./structs/Animator";
import {
  addElmtListener,
  refreshModel,
  resetView,
} from "./structs/elmtListener";
import { GlobalVars } from "./structs/GlobalVars";
import { TreeUtils } from "./utils/TreeUtils";

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

  elmtContainer.showWarningToast(
    "Using model Car: the animation is intended to be not complete on some frames to test adaptive frame"
  );
  const articulatedModel = new ArticulatedModel(contextGL, CAR);
  const defaultModel = new ArticulatedModel(contextGL, CAR);
  const renderer = new Renderer(contextGL);

  const t2 = TreeUtils.mapperTree(articulatedModel);

  const selectedTree = t2;

  const animator = new Animator(CAR_ANIM, elmtContainer);
  animator.setModel(articulatedModel);
  // animator.apply();

  const globalVars = new GlobalVars({
    model: articulatedModel,
    animator: animator,
    elmtContainer,
    contextGL,
    tree: selectedTree,
    renderer,
    defaultModel,
  });
  // renderer.setModel(globalVars.model);

  addElmtListener(globalVars);
  elmtContainer.activeComponent.innerHTML = t2.name;
  TreeUtils.mapTreeToComponentTree(elmtContainer, t2, globalVars);

  let firstTime = true;

  requestAnimationFrame(() => {
    renderer.render(globalVars);
    if (firstTime) {
      resetView(globalVars);
      firstTime = false;
    }
  });
};

// global variable
// export var selectedTree: ITree;
// export var renderer: Renderer;

// main function
main();
// test();
