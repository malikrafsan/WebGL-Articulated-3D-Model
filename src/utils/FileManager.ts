export class FileManager {
  public static async readFile(path: string) {
    const response = await fetch(path);
    const text = await response.text();
    return text;
  }

  public static loadImage(
    path: string,
    callback: (img: HTMLImageElement) => void
  ) {
    const img = new Image();
    img.src = path;
    img.crossOrigin = "";
    img.onload = () => {
      callback(img);
    };

    return img;
  }
}
