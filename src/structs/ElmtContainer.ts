export class ElmtContainer {
  public readonly canvas: HTMLCanvasElement;
  public readonly mapElmts: Map<string, HTMLElement> = new Map();

  constructor() {
    const canvas = document.querySelector("#canvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("No canvas found");
    }

    this.canvas = canvas;
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

  public clear() {
    this.mapElmts.forEach((elmt, key) => {
      elmt.remove();
      this.unStore(key);
    });
  }

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
