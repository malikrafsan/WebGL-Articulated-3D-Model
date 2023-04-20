import { ElmtContainer } from "./ElmtContainer";
import { ContextGL } from "../webgl";
import { Animator } from "../structs/Animator";
import { PROJECTION } from "../config";
import { SaveLoader } from "../utils/SaveLoader";
import { ArticulatedModel } from ".";
import { GlobalVars } from "./GlobalVars";
import { TreeUtils } from "../utils/TreeUtils";

export function addElmtListener(globalVars: GlobalVars) {
    // const animator = globalVars.animator;
    // const elmtContainer = globalVars.elmtContainer;
    // const contextGL = globalVars.contextGL;
    // const model = globalVars.model;
    // const renderer = globalVars.renderer;
    // const tree = globalVars.tree;

    // ANIMATION
    globalVars.elmtContainer.buttonAnimationPlay.onclick = () => {
      globalVars.animator.start();
    };
    globalVars.elmtContainer.buttonAnimationPause.onclick = () => {
        globalVars.animator.pause();
    };
    globalVars.elmtContainer.buttonAnimationStop.onclick = () => {
      globalVars.animator.stop();
    };
    globalVars.elmtContainer.buttonAnimationPrev.onclick = () => {
      globalVars.animator.prev();
    };
    globalVars.elmtContainer.buttonAnimationNext.onclick = () => {
      globalVars.animator.next();
    };

    globalVars.animator.setOnChange((idxFrame) => {
      globalVars.elmtContainer.idxFrame.innerText = idxFrame.toString();
    });

    refreshModel(globalVars.elmtContainer, globalVars);
    
    // CHANGE OBJECT
    globalVars.elmtContainer.selectModel.addEventListener("change", () => {});
  
    // TRANSLATION
    globalVars.elmtContainer.buttonTranslateLeft.addEventListener(
      "click",
      () => {
        globalVars.tree.ref.transform.translation[0] -= 5;
      }
    );
    globalVars.elmtContainer.buttonTranslateRight.addEventListener(
      "click",
      () => {
        globalVars.tree.ref.transform.translation[0] += 5;
      }
    );
    globalVars.elmtContainer.buttonTranslateUp.addEventListener("click", () => {
      globalVars.tree.ref.transform.translation[1] += 5;
    });
    globalVars.elmtContainer.buttonTranslateDown.addEventListener(
      "click",
      () => {
        globalVars.tree.ref.transform.translation[1] -= 5;
      }
    );
    globalVars.elmtContainer.buttonTranslateIn.addEventListener("click", () => {
      globalVars.tree.ref.transform.translation[2] -= 5;
    });
    globalVars.elmtContainer.buttonTranslateOut.addEventListener(
      "click",
      () => {
        globalVars.tree.ref.transform.translation[2] += 5;
      }
    );
  
    // SCALING
    globalVars.elmtContainer.scaleFactor.addEventListener("change", () => {
      // do nothing
    });
    globalVars.elmtContainer.scaleButton.addEventListener("click", () => {
      for (let index = 0; index < 3; index++) {
        globalVars.tree.ref.transform.scale[index] =
          globalVars.elmtContainer.scaleFactor.valueAsNumber;
      }
    });
    globalVars.elmtContainer.buttonEnlarge.addEventListener("click", () => {
      for (let index = 0; index < 3; index++) {
        globalVars.tree.ref.transform.scale[index] += 0.1;
      }
    });
    globalVars.elmtContainer.buttonShrink.addEventListener("click", () => {
      for (let index = 0; index < 3; index++) {
        globalVars.tree.ref.transform.scale[index] -= 0.1;
      }
    });
  
    // ROTATION
    globalVars.elmtContainer.rotateXObject.addEventListener("input", () => {
      globalVars.tree.ref.transform.rotation[0] =
        globalVars.elmtContainer.rotateXObject.valueAsNumber;
    });
    globalVars.elmtContainer.rotateYObject.addEventListener("input", () => {
      globalVars.tree.ref.transform.rotation[1] =
        globalVars.elmtContainer.rotateYObject.valueAsNumber;
    });
    globalVars.elmtContainer.rotateZObject.addEventListener("input", () => {
      globalVars.tree.ref.transform.rotation[2] =
        globalVars.elmtContainer.rotateZObject.valueAsNumber;
    });
  
    // CAMERA
    globalVars.elmtContainer.buttonZoomIn.addEventListener("click", () => {});
    globalVars.elmtContainer.buttonZoomOut.addEventListener("click", () => {});
    globalVars.elmtContainer.cameraRotateX.addEventListener("input", () => {});
    globalVars.elmtContainer.cameraRotateY.addEventListener("input", () => {});
    globalVars.elmtContainer.cameraRotateZ.addEventListener("input", () => {});
  
  
    // PROJECTION
    globalVars.elmtContainer.buttonProjOrthographic.addEventListener(
      "click",
      () => {
        globalVars.renderer.setProjection(PROJECTION.ORTHOGRAPHIC);
      }
    );
    globalVars.elmtContainer.buttonProjPerspective.addEventListener(
      "click",
      () => {
        globalVars.renderer.setProjection(PROJECTION.PERSPECTIVE);
      }
    );
    globalVars.elmtContainer.buttonProjOblique.addEventListener("click", () => {
      globalVars.renderer.setProjection(PROJECTION.OBLIQUE);
    });
  
    // SHADE
    globalVars.elmtContainer.shaderOn.addEventListener("click", () => {});
  
    // RESET
    globalVars.elmtContainer.buttonReset.addEventListener("click", () => {});
  
    // SAVE & LOAD
    globalVars.elmtContainer.buttonSave.addEventListener("click", () => {
        // TODO: animation
      SaveLoader.saveModel(globalVars.model, "file.json");
    });
    globalVars.elmtContainer.loadInput.addEventListener("change", () => {
      const file = globalVars.elmtContainer.loadInput.files?.[0];
      if (!file) {
        return;
      }

    SaveLoader.loadModel(file, (model) => {
          // TODO: animation
        TreeUtils.resetTree(globalVars.elmtContainer);
        globalVars.model = new ArticulatedModel(globalVars.contextGL, model);
        const tree = TreeUtils.mapperTree(globalVars.model);
        globalVars.tree = tree;
        TreeUtils.mapTreeToComponentTree(globalVars.elmtContainer, tree, globalVars);
        refreshModel(
          globalVars.elmtContainer,
          globalVars
        );
        globalVars.elmtContainer.activeComponent.innerHTML = tree.name;
      });
    });
  
    // MODAL
    globalVars.elmtContainer.helpBtn.addEventListener("click", () => {});
  
    console.log("addElmtListener");
  }

export function refreshModel(elmtContainer: ElmtContainer, globalVars: GlobalVars) {
    elmtContainer.rotateXObject.value = globalVars.tree.ref.transform.rotation[0].toString();
    elmtContainer.rotateYObject.value = globalVars.tree.ref.transform.rotation[1].toString();
    elmtContainer.rotateZObject.value = globalVars.tree.ref.transform.rotation[2].toString();
}