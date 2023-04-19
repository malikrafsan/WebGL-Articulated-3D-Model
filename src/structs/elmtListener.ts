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

    refreshModel(elmtContainer);
    
    // CHANGE OBJECT
    elmtContainer.selectModel.addEventListener("change", () => {
  
    });
  
    // TRANSLATION
    elmtContainer.buttonTranslateLeft.addEventListener("click", () => {
        selectedTree.ref.transform.translation[0] -= 5;
    });
    elmtContainer.buttonTranslateRight.addEventListener("click", () => {
        selectedTree.ref.transform.translation[0] += 5;
    });
    elmtContainer.buttonTranslateUp.addEventListener("click", () => {
        selectedTree.ref.transform.translation[1] += 5;
    });
    elmtContainer.buttonTranslateDown.addEventListener("click", () => {
        selectedTree.ref.transform.translation[1] -= 5;
    });
    elmtContainer.buttonTranslateIn.addEventListener("click", () => {
        selectedTree.ref.transform.translation[2] -= 5;
    });
    elmtContainer.buttonTranslateOut.addEventListener("click", () => {
        selectedTree.ref.transform.translation[2] += 5;
    });
  
    // SCALING
    elmtContainer.scaleFactor.addEventListener("change", () => {
        // do nothing
    });
    elmtContainer.scaleButton.addEventListener("click", () => {
        for (let index = 0; index < 3; index++) {
            selectedTree.ref.transform.scale[index] = elmtContainer.scaleFactor.valueAsNumber;
        }
    });
    elmtContainer.buttonEnlarge.addEventListener("click", () => {
        for (let index = 0; index < 3; index++) {
            selectedTree.ref.transform.scale[index] += 0.1;
        }
    });
    elmtContainer.buttonShrink.addEventListener("click", () => {
        for (let index = 0; index < 3; index++) {
            selectedTree.ref.transform.scale[index] -= 0.1;
        }
    });
  
    // ROTATION
    elmtContainer.rotateXObject.addEventListener("input", () => {
        selectedTree.ref.transform.rotation[0] = elmtContainer.rotateXObject.valueAsNumber;
    });
    elmtContainer.rotateYObject.addEventListener("input", () => {
        selectedTree.ref.transform.rotation[1] = elmtContainer.rotateYObject.valueAsNumber;
    });
    elmtContainer.rotateZObject.addEventListener("input", () => {
        selectedTree.ref.transform.rotation[2] = elmtContainer.rotateZObject.valueAsNumber;
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

export function refreshModel(elmtContainer: ElmtContainer) {
    elmtContainer.rotateXObject.value = selectedTree.ref.transform.rotation[0].toString();
    elmtContainer.rotateYObject.value = selectedTree.ref.transform.rotation[1].toString();
    elmtContainer.rotateZObject.value = selectedTree.ref.transform.rotation[2].toString();
}