import { TEXTURE, TEXTURE_VALUES, ExtendedMath, FileManager } from "..";

const config = (gl: WebGLRenderingContext) => {
  return {
    IMAGE_URL: "../assets/image-mapping.jpg",
    BUMP_URL: "../assets/bump-mapping-2.jpg",
    REFLECTION_URLS: [
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        url: "../assets/pos-x.jpg",
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        url: "../assets/neg-x.jpg",
      },
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        url: "../assets/pos-y.jpg",
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        url: "../assets/neg-y.jpg",
      },
      {
        target: gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        url: "../assets/pos-z.jpg",
      },
      {
        target: gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
        url: "../assets/neg-z.jpg",
      },
    ],
  } as const;
};

export class TextureGL {
  public static textureNumber(texture: TEXTURE_VALUES) {
    switch (texture) {
      case TEXTURE.IMAGE:
        return 0;
      case TEXTURE.REFLECTION:
        return 1;
      case TEXTURE.BUMP:
        return 2;
      default:
        return -1;
    }
  }

  public static image(gl: WebGLRenderingContext) {
    const url = config(gl).IMAGE_URL;

    return TextureGL.loadTexture2D(gl, url);
  }

  public static bump(gl: WebGLRenderingContext) {
    const url = config(gl).BUMP_URL;

    return TextureGL.loadTexture2D(gl, url);
  }

  public static reflection(gl: WebGLRenderingContext) {
    const texture = gl.createTexture();
    if (!texture) {
      throw new Error("Failed to create the texture object");
    }

    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);

    const faceInfos = config(gl).REFLECTION_URLS;
    faceInfos.forEach((faceInfo) => {
      const { target, url } = faceInfo;

      // Upload the canvas to the cubemap face.
      const level = 0;
      const internalFormat = gl.RGBA;
      const width = 512;
      const height = 512;
      const format = gl.RGBA;
      const type = gl.UNSIGNED_BYTE;

      // setup each face so it's immediately renderable
      gl.texImage2D(
        target,
        level,
        internalFormat,
        width,
        height,
        0,
        format,
        type,
        null
      );

      const _ = FileManager.loadImage(url, (img) => {
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        gl.texImage2D(target, level, internalFormat, format, type, img);
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
      });

      // // Asynchronously load an image
      // const image = new Image();
      // image.src = url;
      // image.crossOrigin = ""; // ask for CORS permission
      // image.addEventListener("load", function () {
      //   // Now that the image has loaded make copy it to the texture.
      //   gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
      //   gl.texImage2D(target, level, internalFormat, format, type, image);
      //   gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
      // });
    });
    gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    gl.texParameteri(
      gl.TEXTURE_CUBE_MAP,
      gl.TEXTURE_MIN_FILTER,
      gl.LINEAR_MIPMAP_LINEAR
    );

    //console.log("Texture loaded 11");

    return texture;

    // const
  }

  public static loadTexture2D(
    gl: WebGLRenderingContext,
    url: string
  ): WebGLTexture {
    const texture = gl.createTexture();
    if (!texture) {
      throw new Error("Failed to create the texture object");
    }
    gl.bindTexture(gl.TEXTURE_2D, texture);

    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 0, 255]);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      width,
      height,
      border,
      srcFormat,
      srcType,
      pixel
    );

    const _ = FileManager.loadImage(url, (img) => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

      if (
        ExtendedMath.isPowerOfTwo(img.width) &&
        ExtendedMath.isPowerOfTwo(img.height)
      ) {
        gl.generateMipmap(gl.TEXTURE_2D);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
    });

    // const image = new Image();
    // image.src = url;
    // image.crossOrigin = "";
    // image.addEventListener("load", () => {
    //   // console.log("Image loaded");

    //   // console.log(image);
    //   // console.log(image.width, image.height);

    //   gl.bindTexture(gl.TEXTURE_2D, texture);
    //   gl.texImage2D(
    //     gl.TEXTURE_2D,
    //     0,
    //     gl.RGBA,
    //     gl.RGBA,
    //     gl.UNSIGNED_BYTE,
    //     image
    //   );

    //   if (
    //     ExtendedMath.isPowerOfTwo(image.width) &&
    //     ExtendedMath.isPowerOfTwo(image.height)
    //   ) {
    //     gl.generateMipmap(gl.TEXTURE_2D);
    //   } else {
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    //     gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    //   }
    // });

    return texture;
  }
}
