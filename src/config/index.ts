import { Color, ContextGL } from "..";

export const CONFIG_PATH = {
  VERTEX_SHADER: "shaders/vertex.glsl",
  FRAGMENT_SHADER: "shaders/fragment.glsl",
};

export const CONFIG_GL = {
  VAR_RESOLUTION: "u_resolution",
} as const;

export const AXIS = {
  X: "X",
  Y: "Y",
  Z: "Z",
} as const;

export const PATH = {
  vertexShader: "shaders/vertex.glsl",
  fragmentShader: "shaders/fragment.glsl",
} as const;

export const TEXTURE = {
  NONE: "NONE",
  IMAGE: "IMAGE",
  REFLECTION: "REFLECTION",
  BUMP: "BUMP",
} as const;

export const PROJECTION = {
  PERSPECTIVE: "PERSPECTIVE",
  ORTHOGRAPHIC: "ORTHOGRAPHIC",
  OBLIQUE: "OBLIQUE",
} as const;

export const COLORS = {
  RED: new Color(255, 0, 0, 255),
  GREEN: new Color(0, 255, 0, 255),
  BLUE: new Color(0, 0, 255, 255),
  WHITE: new Color(255, 255, 255, 255),
  BLACK: new Color(0, 0, 0, 255),
  YELLOW: new Color(255, 255, 0, 255),
  PURPLE: new Color(255, 0, 255, 255),
  CYAN: new Color(0, 255, 255, 255),
  ORANGE: new Color(255, 165, 0, 255),
  BROWN: new Color(165, 42, 42, 255),
  PINK: new Color(255, 192, 203, 255),
  GRAY: new Color(128, 128, 128, 255),
  LIGHT_GRAY: new Color(211, 211, 211, 255),
  DARK_GRAY: new Color(169, 169, 169, 255),
  GOLD: new Color(255, 215, 0, 255),
  SILVER: new Color(192, 192, 192, 255),
  BRONZE: new Color(205, 127, 50, 255),
  COPPER: new Color(184, 115, 51, 255),
  CHROME: new Color(255, 255, 255, 255),
  RUBY: new Color(224, 17, 95, 255),
  EMERALD: new Color(46, 204, 113, 255),
  SAPPHIRE: new Color(52, 152, 219, 255),
  TURQUOISE: new Color(26, 188, 156, 255),
  AMETHYST: new Color(155, 89, 182, 255),
  JADE: new Color(0, 168, 107, 255),
  OBSIDIAN: new Color(63, 72, 204, 255),
  ONYX: new Color(53, 56, 57, 255),
  PERIDOT: new Color(230, 126, 34, 255),
  QUARTZ: new Color(224, 255, 255, 255),
  AMBER: new Color(255, 191, 0, 255),
  AQUAMARINE: new Color(127, 255, 212, 255),
  AZURE: new Color(0, 127, 255, 255),
  BEIGE: new Color(245, 245, 220, 255),
  BISQUE: new Color(255, 228, 196, 255),
  BLANCHED_ALMOND: new Color(255, 235, 205, 255),
  BLUE_VIOLET: new Color(138, 43, 226, 255),
  BURLY_WOOD: new Color(222, 184, 135, 255),
  CADET_BLUE: new Color(95, 158, 160, 255),
  CHARTREUSE: new Color(127, 255, 0, 255),
  CHOCOLATE: new Color(210, 105, 30, 255),
  CORAL: new Color(255, 127, 80, 255),
  CORNFLOWER_BLUE: new Color(100, 149, 237, 255),
  CORNSILK: new Color(255, 248, 220, 255),
  CRIMSON: new Color(220, 20, 60, 255),
  DARK_BLUE: new Color(0, 0, 139, 255),
  DARK_CYAN: new Color(0, 139, 139, 255),
  DARK_GOLDEN_ROD: new Color(184, 134, 11, 255),
  DARK_GREEN: new Color(0, 100, 0, 255),
  DARK_KHAKI: new Color(189, 183, 107, 255),
  DARK_MAGENTA: new Color(139, 0, 139, 255),
} as const;

export const configProjection = (contextGL: ContextGL) => {
  return {
    LEFT: 0,
    RIGHT: contextGL.width,
    BOTTOM: 0,
    TOP: contextGL.height,
    NEAR: 1000,
    FAR: -1000,
  }
}

export const CONFIG_RENDERER = {
  DEFAULT_PROJECTION: PROJECTION.ORTHOGRAPHIC,
} as const;
