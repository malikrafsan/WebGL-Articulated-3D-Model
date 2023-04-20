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
  ITree,
  ITreeButton,
} from ".";
import { Animator } from "./structs/Animator";
import { addElmtListener, refreshModel } from "./structs/elmtListener";
import { GlobalVars } from "./structs/GlobalVars";

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

const mapTreeToComponentTree = (elmtContainer: ElmtContainer, tree: ITree, globalVars: GlobalVars) => {
  const btn = elmtContainer.createButton({
    id: tree.name,
    depth: tree.level,
    callbackOnClick: () => {
      globalVars.tree = tree;
      refreshModel(elmtContainer, globalVars);
      elmtContainer.activeComponent.innerHTML = tree.name;
    },
  });
  elmtContainer.addElmt("#component-tree", btn);

  const componentTree: ITreeButton = {
    ...tree,
    button: btn,
    children: tree.children.map((child) =>
      mapTreeToComponentTree(elmtContainer, child, globalVars)
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

  const articulatedModel = new ArticulatedModel(contextGL, CUBES.model);
  const renderer = new Renderer(contextGL);


  const t = tree(articulatedModel);
  console.log(t);
  printTree(t);

  const t2 = mapperTree(articulatedModel);

  const selectedTree = t2;

  const animator = new Animator(CUBES.animation);
  animator.setModel(articulatedModel);

  const globalVars = new GlobalVars({
    model: articulatedModel,
    animator: animator,
    elmtContainer,
    contextGL,
    tree: selectedTree,
    renderer,
  });
  // renderer.setModel(globalVars.model);

  addElmtListener(globalVars);
  elmtContainer.activeComponent.innerHTML = t2.name;
  mapTreeToComponentTree(elmtContainer, t2, globalVars);

  requestAnimationFrame(() => {
    renderer.render(globalVars);
  });
};

// global variable
// export var selectedTree: ITree;
// export var renderer: Renderer;

// main function
main();
// test();