export class ElmtContainer {
  public readonly canvas: HTMLCanvasElement;
  public readonly mapElmts: Map<string, HTMLElement> = new Map();
  public readonly selectModel: HTMLSelectElement;
  public readonly rotateXObject: HTMLInputElement;
  public readonly rotateYObject: HTMLInputElement;
  public readonly rotateZObject: HTMLInputElement;
  public readonly buttonTranslateLeft: HTMLButtonElement;
  public readonly buttonTranslateRight: HTMLButtonElement;
  public readonly buttonTranslateUp: HTMLButtonElement;
  public readonly buttonTranslateDown: HTMLButtonElement;
  public readonly buttonTranslateOut: HTMLButtonElement;
  public readonly buttonTranslateIn: HTMLButtonElement;
  public readonly scaleFactor: HTMLInputElement;
  public readonly scaleButton: HTMLButtonElement;
  public readonly buttonShrink: HTMLButtonElement;
  public readonly buttonEnlarge: HTMLButtonElement;
  public readonly cameraRotateX: HTMLInputElement;
  public readonly cameraRotateY: HTMLInputElement;
  public readonly buttonZoomIn: HTMLButtonElement;
  public readonly buttonZoomOut: HTMLButtonElement;
  public readonly shaderOn: HTMLInputElement;
  public readonly buttonReset: HTMLButtonElement;
  public readonly buttonProjOrthographic: HTMLButtonElement;
  public readonly buttonProjPerspective: HTMLButtonElement;
  public readonly buttonProjOblique: HTMLButtonElement;
  public readonly buttonAnimationPlay: HTMLButtonElement;
  public readonly buttonAnimationPause: HTMLButtonElement;
  public readonly buttonAnimationStop: HTMLButtonElement;
  public readonly buttonAnimationPrev: HTMLButtonElement;
  public readonly buttonAnimationNext: HTMLButtonElement;
  public readonly buttonTextureBump: HTMLButtonElement;
  public readonly buttonTextureEnvironment: HTMLButtonElement;
  public readonly buttonTextureReflective: HTMLButtonElement;
  public readonly buttonTextureNone: HTMLButtonElement;
  public readonly activeComponent: HTMLElement;
  public readonly buttonSave: HTMLButtonElement;
  public readonly loadInput: HTMLInputElement;
  public readonly helpBtn: HTMLButtonElement;
  public readonly idxFrame: HTMLDivElement;
  public readonly saveAsFrame: HTMLButtonElement;
  public readonly deleteFrame: HTMLButtonElement;
  public readonly insertAsNextFrame: HTMLElement;
  public readonly uploadFrame: HTMLInputElement;
  public readonly saveAnimation: HTMLButtonElement;

  // public readonly modalContainer: HTMLDivElement;
  // public readonly modalBackdrop: HTMLDivElement;
  // public readonly modalBody: HTMLDivElement;


  constructor() {
    const canvas = document.querySelector("#canvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("No canvas found");
    }

    const selectModel = document.getElementById("model");

    const rotateXObject = document.getElementById("rotateX");
    const rotateYObject = document.getElementById("rotateY");
    const rotateZObject = document.getElementById("rotateZ");

    const buttonTranslateLeft = document.getElementById(
      "button-translate-left"
    );
    const buttonTranslateRight = document.getElementById(
      "button-translate-right"
    );
    const buttonTranslateUp = document.getElementById("button-translate-up");
    const buttonTranslateDown = document.getElementById(
      "button-translate-down"
    );
    const buttonTranslateOut = document.getElementById("button-translate-out");
    const buttonTranslateIn = document.getElementById("button-translate-in");
    const scaleFactor = document.getElementById("scale");
    const scaleButton = document.getElementById("button-scale");
    const buttonShrink = document.getElementById("button-shrink");
    const buttonEnlarge = document.getElementById("button-enlarge");

    const cameraRotateX = document.getElementById("cameraX");
    const cameraRotateY = document.getElementById("cameraY");

    const buttonZoomIn = document.getElementById("button-zoom-in");
    const buttonZoomOut = document.getElementById("button-zoom-out");
    const shaderOn = document.getElementById("shader");
    const buttonReset = document.getElementById("button-reset");

    const buttonProjOrthographic = document.getElementById(
      "button-proj-orthographic"
    );
    const buttonProjPerspective = document.getElementById(
      "button-proj-perspective"
    );
    const buttonProjOblique = document.getElementById("button-proj-oblique");

    const buttonAnimationPlay = document.getElementById("button-animation-play");
    const buttonAnimationPause = document.getElementById("button-animation-pause");
    const buttonAnimationStop = document.getElementById("button-animation-stop");
    const buttonAnimationPrev = document.getElementById(
      "button-animation-prev"
    );
    const buttonAnimationNext = document.getElementById(
      "button-animation-next"
    );
    const idxFrame = document.getElementById("idx-frame");

    const buttonTextureBump = document.getElementById("button-texture-bump");
    const buttonTextureEnvironment = document.getElementById("button-texture-environment");
    const buttonTextureReflective = document.getElementById("button-texture-reflective");
    const buttonTextureNone = document.getElementById("button-texture-none");

    const activeComponent = document.getElementById("active-component");

    const buttonSave = document.getElementById("save");
    const loadInput = document.getElementById("load");
    const helpBtn = document.getElementById("help");

    const saveAsFrame = document.getElementById("save-as-frame");
    const deleteFrame = document.getElementById("delete-frame");
    const insertAsNextFrame = document.getElementById("insert-as-next-frame");
    const uploadFrame = document.getElementById("uploadframe");
    const saveAnimation = document.getElementById("save-animation");

    // const modalContainer = document.getElementById("modal-container");
    // const modalBackdrop = document.getElementById("modal-backdrop");
    // const modalBody = document.getElementById("modal-body");

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("Canvas not found");
    }
    if (!(selectModel instanceof HTMLSelectElement)) {
      throw new Error("Select not found");
    }
    if (!(rotateXObject instanceof HTMLInputElement)) {
      throw new Error("Rotate X not found");
    }
    if (!(rotateYObject instanceof HTMLInputElement)) {
      throw new Error("Rotate Y not found");
    }
    if (!(rotateZObject instanceof HTMLInputElement)) {
      throw new Error("Rotate Z not found");
    }
    if (!(buttonTranslateLeft instanceof HTMLButtonElement)) {
      throw new Error("Button translate left not found");
    }
    if (!(buttonTranslateRight instanceof HTMLButtonElement)) {
      throw new Error("Button translate right not found");
    }
    if (!(buttonTranslateUp instanceof HTMLButtonElement)) {
      throw new Error("Button translate up not found");
    }
    if (!(buttonTranslateDown instanceof HTMLButtonElement)) {
      throw new Error("Button translate down not found");
    }
    if (!(buttonTranslateOut instanceof HTMLButtonElement)) {
      throw new Error("Button translate out not found");
    }
    if (!(buttonTranslateIn instanceof HTMLButtonElement)) {
      throw new Error("Button translate in not found");
    }
    if (!(scaleFactor instanceof HTMLInputElement)) {
      throw new Error("Scale factor not found");
    }
    if (!(scaleButton instanceof HTMLButtonElement)) {
      throw new Error("Scale button not found");
    }
    if (!(buttonShrink instanceof HTMLButtonElement)) {
      throw new Error("Button shrink not found");
    }
    if (!(buttonEnlarge instanceof HTMLButtonElement)) {
      throw new Error("Button enlarge not found");
    }
    if (!(cameraRotateX instanceof HTMLInputElement)) {
      throw new Error("Camera rotate X not found");
    }
    if (!(cameraRotateY instanceof HTMLInputElement)) {
      throw new Error("Camera rotate Y not found");
    }
    if (!(buttonZoomIn instanceof HTMLButtonElement)) {
      throw new Error("Button zoom in not found");
    }
    if (!(buttonZoomOut instanceof HTMLButtonElement)) {
      throw new Error("Button zoom out not found");
    }
    if (!(shaderOn instanceof HTMLInputElement)) {
      throw new Error("Shader on not found");
    }
    if (!(buttonReset instanceof HTMLButtonElement)) {
      throw new Error("Button reset not found");
    }
    if (!(buttonProjOrthographic instanceof HTMLButtonElement)) {
      throw new Error("Button proj orthographic not found");
    }
    if (!(buttonProjPerspective instanceof HTMLButtonElement)) {
      throw new Error("Button proj perspective not found");
    }
    if (!(buttonProjOblique instanceof HTMLButtonElement)) {
      throw new Error("Button proj oblique not found");
    }
    if (!(buttonAnimationPlay instanceof HTMLButtonElement)) {
      throw new Error("buttonAnimationPlay not found");
    }
    if (!(buttonAnimationPause instanceof HTMLButtonElement)) {
      throw new Error("buttonAnimationPause not found");
    }
    if (!(buttonAnimationStop instanceof HTMLButtonElement)) {
      throw new Error("buttonAnimationStop not found");
    }
    if (!(buttonTextureBump instanceof HTMLButtonElement)) {
      throw new Error("buttonTextureBump not found");
    }
    if (!(buttonTextureEnvironment instanceof HTMLButtonElement)) {
      throw new Error("buttonTextureEnvironment not found");
    }
    if (!(buttonTextureReflective instanceof HTMLButtonElement)) {
      throw new Error("buttonTextureReflective not found");
    }
    if (!(buttonTextureNone instanceof HTMLButtonElement)) {
      throw new Error("buttonTextureNone not found");
    }
    if (!(activeComponent instanceof HTMLElement)) {
      throw new Error("activeComponent not found");
    }
    if (!(buttonSave instanceof HTMLButtonElement)) {
      throw new Error("save not found");
    }
    if (!(loadInput instanceof HTMLInputElement)) {
      throw new Error("Load not found");
    }
    if (!(helpBtn instanceof HTMLButtonElement)) {
      throw new Error("Help not found");
    }
    if (!(buttonAnimationPrev instanceof HTMLButtonElement)) {
      throw new Error("Button animation prev not found");
    }
    if (!(buttonAnimationNext instanceof HTMLButtonElement)) {
      throw new Error("Button animation next not found");
    }
    if (!(idxFrame instanceof HTMLDivElement)) {
      throw new Error("Idx frame not found");
    }
    if (!(saveAsFrame instanceof HTMLButtonElement)) {
      throw new Error("Save as frame not found");
    }
    if (!(deleteFrame instanceof HTMLButtonElement)) {
      throw new Error("Delete frame not found");
    }
    if (!(insertAsNextFrame instanceof HTMLLabelElement)) {
      throw new Error("Insert as next frame not found");
    }
    if (!(uploadFrame instanceof HTMLInputElement)) {
      throw new Error("Upload frame not found");
    }
    if (!(saveAnimation instanceof HTMLButtonElement)) {
      throw new Error("Save animation not found");
    }

    // if (!(modalContainer instanceof HTMLDivElement)) {
    //   throw new Error("Modal container not found");
    // }
    // if (!(modalBackdrop instanceof HTMLDivElement)) {
    //   throw new Error("Modal backdrop not found");
    // }
    // if (!(modalBody instanceof HTMLDivElement)) {
    //   throw new Error("Modal body not found");
    // }

    this.canvas = canvas;
    this.selectModel = selectModel;
    this.rotateXObject = rotateXObject;
    this.rotateYObject = rotateYObject;
    this.rotateZObject = rotateZObject;
    this.buttonTranslateLeft = buttonTranslateLeft;
    this.buttonTranslateRight = buttonTranslateRight;
    this.buttonTranslateUp = buttonTranslateUp;
    this.buttonTranslateDown = buttonTranslateDown;
    this.buttonTranslateOut = buttonTranslateOut;
    this.buttonTranslateIn = buttonTranslateIn;
    this.scaleFactor = scaleFactor;
    this.scaleButton = scaleButton;
    this.buttonShrink = buttonShrink;
    this.buttonEnlarge = buttonEnlarge;
    this.cameraRotateX = cameraRotateX;
    this.cameraRotateY = cameraRotateY;
    this.buttonZoomIn = buttonZoomIn;
    this.buttonZoomOut = buttonZoomOut;
    this.shaderOn = shaderOn;
    this.buttonReset = buttonReset;
    this.buttonProjOrthographic = buttonProjOrthographic;
    this.buttonProjPerspective = buttonProjPerspective;
    this.buttonProjOblique = buttonProjOblique;
    this.buttonAnimationPlay = buttonAnimationPlay;
    this.buttonAnimationPause = buttonAnimationPause;
    this.buttonAnimationStop = buttonAnimationStop;
    this.buttonAnimationPrev = buttonAnimationPrev;
    this.buttonAnimationNext = buttonAnimationNext;
    this.idxFrame = idxFrame;
    this.buttonTextureBump = buttonTextureBump;
    this.buttonTextureEnvironment = buttonTextureEnvironment;
    this.buttonTextureReflective = buttonTextureReflective;
    this.buttonTextureNone = buttonTextureNone;
    this.activeComponent = activeComponent;
    this.buttonSave = buttonSave;
    this.loadInput = loadInput;
    this.helpBtn = helpBtn;
    this.saveAsFrame = saveAsFrame;
    this.deleteFrame = deleteFrame;
    this.insertAsNextFrame = insertAsNextFrame;
    this.uploadFrame = uploadFrame;
    this.saveAnimation = saveAnimation;
    // this.modalContainer = modalContainer;
    // this.modalBackdrop = modalBackdrop;
    // this.modalBody = modalBody;
  }

  public store(elmt: HTMLElement, key: string) {
    this.mapElmts.set(key, elmt);
  }

  public addElmt(parentSelector: string, elmt: HTMLElement) {
    const parent = document.querySelector(parentSelector);
    if (!parent) {
      throw new Error("No parent found");
    }

    parent.appendChild(elmt);
  }

  public getElmt(key: string) {
    const elmt = this.mapElmts.get(key);
    if (!elmt) {
      throw new Error("No element found");
    }

    return elmt;
  }

  public unStore(key: string) {
    this.mapElmts.delete(key);
  }

  public removeElmt(key: string) {
    const elmt = this.getElmt(key);
    elmt.remove();
    this.unStore(key);
  }

  public clearMapElmts() {
    this.mapElmts.forEach((elmt, key) => {
      elmt.remove();
      this.unStore(key);
    });
  }

  public clearComponent(selector: string) {
    const elmt = document.querySelector(selector);
    if (!elmt) {
      throw new Error("No element found");
    }
    elmt.innerHTML = "";
  }

  public createButton(props: {
    id: string;
    depth: number;
    callbackOnClick: () => void;
  }) {
    const { id, depth, callbackOnClick } = props;
    const btn = document.createElement("button");
    btn.id = id;
    const div = document.createElement("div");
    btn.className = "ml-" + depth*4 + " mt-2 w-1/3 flex flex-col items-center py-1 bg-purple-600 border border-slate-900/10 text-xs font-bold rounded-lg active:bg-violet-500";
    btn.innerHTML = id;
    btn.onclick = (event: Event) => {
      callbackOnClick();
    }
    return btn;
  };

  public createSlider(props: {
    id: string;
    min: number;
    max: number;
    value: number;
    callbackOnChange: (value: number) => void;
  }) {
    const { id, min, max, value, callbackOnChange } = props;
    const slider = document.createElement("input");
    slider.type = "range";
    slider.id = id;
    slider.min = min.toString();
    slider.max = max.toString();
    slider.value = value.toString();
    slider.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      callbackOnChange(+target.value);
    };

    const div = document.createElement("div");
    const label = document.createElement("label");
    label.innerText = id;
    div.appendChild(label);
    div.appendChild(slider);

    return div;
  }
}
