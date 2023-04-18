import { COLORS, Vertex, Vector3, IArticulatedModel, TEXTURE, IModelAndAnimation } from "..";



export const CUBES: IModelAndAnimation = {
  model: {
    name: "Cubes",
    node: {
      vertices: [
        new Vertex(new Vector3(100, 100, 100), COLORS.BLUE),
        new Vertex(new Vector3(-100, 100, 100), COLORS.BLUE),
        new Vertex(new Vector3(-100, -100, 100), COLORS.BLUE),
        new Vertex(new Vector3(100, -100, 100), COLORS.BLUE),
        new Vertex(new Vector3(100, 100, -100), COLORS.RED),
        new Vertex(new Vector3(-100, 100, -100), COLORS.RED),
        new Vertex(new Vector3(-100, -100, -100), COLORS.RED),
        new Vertex(new Vector3(100, -100, -100), COLORS.RED),
      ],
      faces: [
        [0, 1, 2, 3],
        [5, 4, 7, 6],
        [4, 0, 3, 7],
        [1, 5, 6, 2],
        [0, 4, 5, 1],
        [2, 6, 7, 3],
      ],
    },
    transform: {
      translation: [0, 0, 0],
      rotation: [45, 135, 45],
      scale: [1, 1, 1], // TODO: USE CONFIG
    },
    children: [
      {
        name: "Cubes1",
        node: {
          vertices: [
            new Vertex(new Vector3(25 - 75, 25 - 75, 25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(-25 - 75, 25 - 75, 25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(-25 - 75, -25 - 75, 25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(25 - 75, -25 - 75, 25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(25 - 75, 25 - 75, -25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(-25 - 75, 25 - 75, -25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(-25 - 75, -25 - 75, -25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(25 - 75, -25 - 75, -25 - 75), COLORS.BLUE),
          ],
          faces: [
            [0, 1, 2, 3],
            [5, 4, 7, 6],
            [4, 0, 3, 7],
            [1, 5, 6, 2],
            [0, 4, 5, 1],
            [2, 6, 7, 3],
          ],
        },
        transform: {
          translation: [0, 0, 0],
          rotation: [0, 0, 0],
          scale: [1, 2, 1],
        },
        children: [
          {
            name: "Cubes11",
            node: {
              vertices: [
                new Vertex(new Vector3(25 + 75, 25 + 75, 25 + 75), COLORS.BLUE),
                new Vertex(new Vector3(-25 + 75, 25 + 75, 25 + 75), COLORS.RED),
                new Vertex(
                  new Vector3(-25 + 75, -25 + 75, 25 + 75),
                  COLORS.AZURE
                ),
                new Vertex(
                  new Vector3(25 + 75, -25 + 75, 25 + 75),
                  COLORS.YELLOW
                ),
                new Vertex(
                  new Vector3(25 + 75, 25 + 75, -25 + 75),
                  COLORS.YELLOW
                ),
                new Vertex(
                  new Vector3(-25 + 75, 25 + 75, -25 + 75),
                  COLORS.AZURE
                ),
                new Vertex(
                  new Vector3(-25 + 75, -25 + 75, -25 + 75),
                  COLORS.RED
                ),
                new Vertex(
                  new Vector3(25 + 75, -25 + 75, -25 + 75),
                  COLORS.BLUE
                ),
              ],
              faces: [
                [0, 1, 2, 3],
                [5, 4, 7, 6],
                [4, 0, 3, 7],
                [1, 5, 6, 2],
                [0, 4, 5, 1],
                [2, 6, 7, 3],
              ],
            },
            transform: {
              translation: [0, 0, 0],
              rotation: [0, 0, 0],
              scale: [2, 1, 2],
            },
            children: [],
            texture: TEXTURE.NONE,
          },
        ],
        texture: TEXTURE.IMAGE,
      },
      {
        name: "Cubes2",
        node: {
          vertices: [
            new Vertex(new Vector3(25 + 75, 25 + 75, 25 - 75), COLORS.BLUE),
            new Vertex(new Vector3(-25 + 75, 25 + 75, 25 - 75), COLORS.RED),
            new Vertex(new Vector3(-25 + 75, -25 + 75, 25 - 75), COLORS.AZURE),
            new Vertex(new Vector3(25 + 75, -25 + 75, 25 - 75), COLORS.YELLOW),
            new Vertex(new Vector3(25 + 75, 25 + 75, -25 - 75), COLORS.YELLOW),
            new Vertex(new Vector3(-25 + 75, 25 + 75, -25 - 75), COLORS.AZURE),
            new Vertex(new Vector3(-25 + 75, -25 + 75, -25 - 75), COLORS.RED),
            new Vertex(new Vector3(25 + 75, -25 + 75, -25 - 75), COLORS.BLUE),
          ],
          faces: [
            [0, 1, 2, 3],
            [5, 4, 7, 6],
            [4, 0, 3, 7],
            [1, 5, 6, 2],
            [0, 4, 5, 1],
            [2, 6, 7, 3],
          ],
        },
        transform: {
          translation: [0, 0, 0],
          rotation: [45, 0, 0],
          scale: [2, 2, 2],
        },
        children: [],
        texture: TEXTURE.BUMP,
      },
    ],
    texture: TEXTURE.REFLECTION,
  },
  animation: {
    name: "animator",
    frames: [
      {
        transform: {
          translation: [0, 0, 0],
          rotation: [45, 0, 0],
          scale: [1, 1, 1],
        },
      },
      {
        transform: {
          translation: [0, 0, 0],
          rotation: [45, 0, 0],
          scale: [1, 1, 2],
        },
      },
      {
        transform: {
          translation: [0, 0, 0],
          rotation: [45, 45, 0],
          scale: [1, 2, 1],
        },
      },
      {
        transform: {
          translation: [0, 0, 0],
          rotation: [0, 45, 0],
          scale: [2, 1, 1],
        },
      },
    ],
  },
};
