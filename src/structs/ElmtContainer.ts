export class ElmtContainer {
  public readonly canvas: HTMLCanvasElement;

  constructor() {
    const canvas = document.querySelector("#canvas");

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("No canvas found");
    }

    this.canvas = canvas;
  }
}
