import { ArticulatedModel, ITree, ElmtContainer, ITreeButton } from "..";
import { GlobalVars } from "../structs/GlobalVars";
import { refreshModel } from "../structs/elmtListener";

export class TreeUtils {
  public static mapperTree(model: ArticulatedModel, level: number = 0) {
    const tree: ITree = {
      name: model.name,
      level: level,
      ref: model,
      children: model.children.map((child) =>
        TreeUtils.mapperTree(child, level + 1)
      ),
    } as const;

    return tree;
  }

  public static resetTree(elmtContainer: ElmtContainer) {
    elmtContainer.clearComponent("#component-tree");
  }

  public static mapTreeToComponentTree(
    elmtContainer: ElmtContainer,
    tree: ITree,
    globalVars: GlobalVars
  ) {
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
        TreeUtils.mapTreeToComponentTree(elmtContainer, child, globalVars)
      ),
    };

    return componentTree;
  }

  public static map(globalVars: GlobalVars) {
    const tree = TreeUtils.mapperTree(globalVars.model);
    const componentTree = TreeUtils.mapTreeToComponentTree(
      globalVars.elmtContainer,
      tree,
      globalVars
    );
    return {
      tree,
      componentTree,
    };
  }
}
