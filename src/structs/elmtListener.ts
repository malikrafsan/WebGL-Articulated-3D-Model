import { ElmtContainer } from "./ElmtContainer";
import { ContextGL } from "../webgl";
import { selectedTree } from "../main";
import { Animator } from "../structs/Animator";

export function addElmtListener(elmtContainer: ElmtContainer, contextGL: ContextGL, animator: Animator) {
    // ANIMATION
    elmtContainer.buttonAnimationPlay.onclick = () => {
        animator.start();
    };
    elmtContainer.buttonAnimationPause.onclick = () => {
        animator.pause();
    };
    elmtContainer.buttonAnimationStop.onclick = () => {
        animator.stop();
    };
    elmtContainer.buttonAnimationPrev.onclick = () => {
        animator.prev();
    };
    elmtContainer.buttonAnimationNext.onclick = () => {
        animator.next();
    };

    animator.setOnChange((idxFrame) => {
        elmtContainer.idxFrame.innerText = idxFrame.toString();
    });


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