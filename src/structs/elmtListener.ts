import { ElmtContainer } from "./ElmtContainer";
import { ContextGL } from "../webgl";
import { Animator } from "../structs/Animator";
import { PROJECTION, TEXTURE } from "../config";
import { SaveLoader } from "../utils/SaveLoader";
import { ArticulatedModel } from ".";
import { GlobalVars } from "./GlobalVars";
import { TreeUtils } from "../utils/TreeUtils";
import { ExtendedMath } from "../utils";
import {
  CAR,
  CAR_ANIM,
  CUBES,
  CUBES_ANIM,
  DOG,
  MINECRAFT_PEOPLE,
  MINECRAFT_PEOPLE_ANIM,
} from "../models";

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
  globalVars.elmtContainer.saveAsFrame.onclick = () => {
    globalVars.animator.saveAsFrame();
  };
  globalVars.elmtContainer.deleteFrame.onclick = () => {
    globalVars.animator.delCurFrame();
  };
  globalVars.elmtContainer.uploadFrame.addEventListener("change", () => {
    const file = globalVars.elmtContainer.uploadFrame.files?.[0];
    console.log(file);
    if (!file) {
      return;
    }
    globalVars.animator.loadFrame(file);
    globalVars.elmtContainer.uploadFrame.value = "";
    globalVars.elmtContainer.uploadFrame.files = null;
  });
  globalVars.elmtContainer.saveAnimation.onclick = () => {
    globalVars.animator.saveAnimation();
  };

  globalVars.animator.setOnChange((idxFrame) => {
    globalVars.elmtContainer.idxFrame.innerText = idxFrame.toString();
  });

  refreshModel(globalVars.elmtContainer, globalVars);

  // CHANGE OBJECT
  globalVars.elmtContainer.selectModel.addEventListener("change", () => {
    TreeUtils.resetTree(globalVars.elmtContainer);
    // let articulatedModel: ArticulatedModel;
    // let animator: Animator;
    if (globalVars.elmtContainer.selectModel.value == "MINECRAFT_PEOPLE") {
      globalVars.model = new ArticulatedModel(
        globalVars.contextGL,
        MINECRAFT_PEOPLE
      );
      globalVars.default = new ArticulatedModel(
        globalVars.contextGL,
        MINECRAFT_PEOPLE
      );
      globalVars.animator.setAnimation(MINECRAFT_PEOPLE_ANIM);
      // animator = new Animator(MINECRAFT_PEOPLE_ANIM);
    } else if (globalVars.elmtContainer.selectModel.value == "CAR") {
      globalVars.elmtContainer.showWarningToast(
        "Using model Car: the animation is intended to be not complete on some frames to test adaptive frame"
      );
      globalVars.model = new ArticulatedModel(globalVars.contextGL, CAR);
      globalVars.default = new ArticulatedModel(globalVars.contextGL, CAR);
      globalVars.animator.setAnimation(CAR_ANIM);
    } else if (globalVars.elmtContainer.selectModel.value == "DOG") {
      globalVars.model = new ArticulatedModel(globalVars.contextGL, DOG);
      globalVars.default = new ArticulatedModel(globalVars.contextGL, DOG);
      // globalVars.animator.setAnimation(CAR_ANIM);
    } else {
      globalVars.model = new ArticulatedModel(globalVars.contextGL, CUBES);
      globalVars.default = new ArticulatedModel(globalVars.contextGL, CUBES);
      globalVars.animator.setAnimation(CUBES_ANIM);
    }
    // globalVars.model = new ArticulatedModel(globalVars.contextGL, articulatedModel);
    const tree = TreeUtils.mapperTree(globalVars.model);
    // globalVars.animator = animator;
    globalVars.animator.setModel(globalVars.model); //articulatedModel);
    globalVars.tree = tree;
    globalVars.tree.ref = globalVars.model;
    TreeUtils.mapTreeToComponentTree(
      globalVars.elmtContainer,
      tree,
      globalVars
    );
    refreshModel(globalVars.elmtContainer, globalVars);
    globalVars.elmtContainer.activeComponent.innerHTML = tree.name;
  });

  // CHANGE TEXTURE
  globalVars.elmtContainer.buttonTextureBump.addEventListener("click", () => {
    globalVars.tree.ref.setTexture(TEXTURE.BUMP, globalVars);
  });
  globalVars.elmtContainer.buttonTextureImage.addEventListener("click", () => {
    globalVars.tree.ref.setTexture(TEXTURE.IMAGE, globalVars);
  });
  globalVars.elmtContainer.buttonTextureReflective.addEventListener(
    "click",
    () => {
      globalVars.tree.ref.setTexture(TEXTURE.REFLECTION, globalVars);
    }
  );
  globalVars.elmtContainer.buttonTextureNone.addEventListener("click", () => {
    globalVars.tree.ref.setTexture(TEXTURE.NONE, globalVars);
  });
  globalVars.elmtContainer.swapWithNextFrame.onclick = () => {
    globalVars.animator.swapWithNextFrame();
  };
  globalVars.elmtContainer.setAnimation.onchange = (ev) => {
    const file = globalVars.elmtContainer.setAnimation.files?.[0];
    if (!file) {
      return;
    }
    globalVars.animator.loadAnimation(file);
    globalVars.elmtContainer.setAnimation.value = "";
    globalVars.elmtContainer.setAnimation.files = null;
  };

  // TRANSLATION
  globalVars.elmtContainer.buttonTranslateLeft.addEventListener("click", () => {
    globalVars.tree.ref.translate(-10, 0, true, globalVars);
  });
  globalVars.elmtContainer.buttonTranslateRight.addEventListener(
    "click",
    () => {
      globalVars.tree.ref.translate(10, 0, true, globalVars);
    }
  );
  globalVars.elmtContainer.buttonTranslateUp.addEventListener("click", () => {
    // globalVars.tree.ref.transform.translation[1] += 5;
    globalVars.tree.ref.translate(10, 1, true, globalVars);
  });
  globalVars.elmtContainer.buttonTranslateDown.addEventListener("click", () => {
    // globalVars.tree.ref.transform.translation[1] -= 5;
    globalVars.tree.ref.translate(-10, 1, true, globalVars);
  });
  globalVars.elmtContainer.buttonTranslateIn.addEventListener("click", () => {
    // globalVars.tree.ref.transform.translation[2] -= 5;
    globalVars.tree.ref.translate(-10, 2, true, globalVars);
  });
  globalVars.elmtContainer.buttonTranslateOut.addEventListener("click", () => {
    // globalVars.tree.ref.transform.translation[2] += 5;
    globalVars.tree.ref.translate(10, 2, true, globalVars);
  });

  // SCALING
  globalVars.elmtContainer.scaleFactor.addEventListener("change", () => {
    // do nothing
  });
  globalVars.elmtContainer.scaleButton.addEventListener("click", () => {
    const newValue = globalVars.elmtContainer.scaleFactor.valueAsNumber;

    for (let index = 0; index < 3; index++) {
      globalVars.tree.ref.scale(newValue, index, false, globalVars);
    }
  });
  globalVars.elmtContainer.buttonEnlarge.addEventListener("click", () => {
    for (let index = 0; index < 3; index++) {
      globalVars.tree.ref.scale(0.1, index, true, globalVars);
    }
  });
  globalVars.elmtContainer.buttonShrink.addEventListener("click", () => {
    for (let index = 0; index < 3; index++) {
      globalVars.tree.ref.scale(-0.1, index, true, globalVars);
    }
  });

  // ROTATION
  globalVars.elmtContainer.rotateXObject.addEventListener("input", () => {
    const angle = globalVars.elmtContainer.rotateXObject.valueAsNumber;
    globalVars.tree.ref.rotate(angle, 0, globalVars);
  });
  globalVars.elmtContainer.rotateYObject.addEventListener("input", () => {
    const angle = globalVars.elmtContainer.rotateYObject.valueAsNumber;
    globalVars.tree.ref.rotate(angle, 1, globalVars);
  });
  globalVars.elmtContainer.rotateZObject.addEventListener("input", () => {
    const angle = globalVars.elmtContainer.rotateZObject.valueAsNumber;
    globalVars.tree.ref.rotate(angle, 2, globalVars);
  });
  globalVars.elmtContainer.scaleXObject.addEventListener("input", () => {
    const val = globalVars.elmtContainer.scaleXObject.valueAsNumber;
    globalVars.tree.ref.scale(val, 0, false, globalVars);
  });
  globalVars.elmtContainer.scaleYObject.addEventListener("input", () => {
    const val = globalVars.elmtContainer.scaleYObject.valueAsNumber;
    globalVars.tree.ref.scale(val, 1, false, globalVars);
  });
  globalVars.elmtContainer.scaleZObject.addEventListener("input", () => {
    const val = globalVars.elmtContainer.scaleZObject.valueAsNumber;
    globalVars.tree.ref.scale(val, 2, false, globalVars);
  });

  // CAMERA
  globalVars.elmtContainer.buttonZoomIn.addEventListener("click", () => {
    globalVars.renderer.setCameraRadius(0.9);
  });
  globalVars.elmtContainer.buttonZoomOut.addEventListener("click", () => {
    globalVars.renderer.setCameraRadius(1.1);
  });
  globalVars.elmtContainer.cameraRotateX.addEventListener("input", () => {
    globalVars.renderer.setCameraAngleY(
      globalVars.elmtContainer.cameraRotateX.valueAsNumber
    );
  });
  globalVars.elmtContainer.cameraRotateY.addEventListener("input", () => {
    globalVars.renderer.setCameraAngleX(
      globalVars.elmtContainer.cameraRotateY.valueAsNumber
    );
  });

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
  globalVars.elmtContainer.shaderOn.addEventListener("click", () => {
    globalVars.renderer.setShading(globalVars.elmtContainer.shaderOn.checked);
  });
  // RESET
  globalVars.elmtContainer.buttonReset.addEventListener("click", () => {
    resetView(globalVars);
    // globalVars.model.resetTransform(globalVars.default);
    // refreshModel(globalVars.elmtContainer, globalVars);
  });

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
      globalVars.default = new ArticulatedModel(globalVars.contextGL, model);
      const tree = TreeUtils.mapperTree(globalVars.model);
      globalVars.tree = tree;
      TreeUtils.mapTreeToComponentTree(
        globalVars.elmtContainer,
        tree,
        globalVars
      );
      refreshModel(globalVars.elmtContainer, globalVars);
      globalVars.elmtContainer.activeComponent.innerHTML = tree.name;
    });
    globalVars.elmtContainer.loadInput.files = null;
    globalVars.elmtContainer.loadInput.value = "";
  });

  globalVars.elmtContainer.btnSetDuration.onclick = () => {
    const duration = globalVars.elmtContainer.durationInput.valueAsNumber;
    globalVars.animator.setDuration(duration);
  }
  globalVars.elmtContainer.reverseAnimation.onclick = () => {
    globalVars.animator.reverseAnimation();
  }

  // MODAL
  globalVars.elmtContainer.helpBtn.addEventListener("click", () => {});

  console.log("addElmtListener");
}

export function refreshModel(
  elmtContainer: ElmtContainer,
  globalVars: GlobalVars
) {
  elmtContainer.rotateXObject.value =
    globalVars.tree.ref.transform.rotation[0].toString();
  elmtContainer.rotateYObject.value =
    globalVars.tree.ref.transform.rotation[1].toString();
  elmtContainer.rotateZObject.value =
    globalVars.tree.ref.transform.rotation[2].toString();
  elmtContainer.scaleXObject.value =
    globalVars.tree.ref.transform.scale[0].toString();
  elmtContainer.scaleYObject.value =
    globalVars.tree.ref.transform.scale[1].toString();
  elmtContainer.scaleZObject.value =
    globalVars.tree.ref.transform.scale[2].toString();
}

export const refreshRendererControl = (
  globalVars: GlobalVars,
) => {
  globalVars.elmtContainer.cameraRotateX.value = globalVars.renderer.getCameraAngleX().toString();
  globalVars.elmtContainer.cameraRotateY.value = globalVars.renderer.getCameraAngleY().toString();
  globalVars.elmtContainer.shaderOn.checked = globalVars.renderer.isShadingOn;
}

export const resetView = (globalVars: GlobalVars) => {
  console.log("resetView");
  globalVars.model.resetTransform(globalVars.default);
  refreshModel(globalVars.elmtContainer, globalVars);
  globalVars.renderer.reset();
  refreshRendererControl(globalVars);
};
