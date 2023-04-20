import { COLORS, Vertex, Vector3, IArticulatedModel, TEXTURE, IModelAndAnimation } from "..";

export const CUBES: IArticulatedModel = {
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
              new Vertex(new Vector3(-25 + 75, -25 + 75, -25 + 75), COLORS.RED),
              new Vertex(new Vector3(25 + 75, -25 + 75, -25 + 75), COLORS.BLUE),
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
};

export const CUBES_ANIM = {
  name: "animator",
  frames: [
    {
      transform: {
        translation: [0, 0, 0],
        rotation: [45, 0, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 90, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 2, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [3, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, 0, 0],
        rotation: [45, 0, 0],
        scale: [1, 1, 2],
      },
      children: [
        {
          transform: {
            translation: [30, 0, 0],
            rotation: [0, 80, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 135],
                scale: [8, 8, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [10, 0, 0],
            rotation: [50, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, -40, 0],
        rotation: [45, 45, 0],
        scale: [1, 2, 1],
      },
      children: [
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [5, 5, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [270, -22.91831180523293, 65.89014644004466],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [1, 5, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, 0, 0],
        rotation: [45, 45, 0],
        scale: [1, 2, 1],
      },
      children: [
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [5, 5, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [270, 0, 90],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [1, 5, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, 0, 0],
        rotation: [90, 45, 0],
        scale: [2, 4, 1],
      },
      children: [
        {
          transform: {
            translation: [0, 10, 0],
            rotation: [0, 0, 30],
            scale: [1, 1, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [2, 1, 2],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [2, 1, 2],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [15, 0, 0],
        rotation: [-85.94366926962348, 60.16056848873644, 5.729577951308232],
        scale: [1, 2, 1],
      },
      children: [
        {
          transform: {
            translation: [-35, -15, 130],
            rotation: [0, -63.02535746439057, 83.07888029396936],
            scale: [5, 5, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [270, 0, 90],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [1, 5, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, -40, 0],
        rotation: [45, 45, 0],
        scale: [1, 2, 1],
      },
      children: [
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [5, 5, 1],
          },
          children: [
            {
              transform: {
                translation: [0, 0, 0],
                rotation: [270, -22.91831180523293, 65.89014644004466],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
        {
          transform: {
            translation: [5, 0, 0],
            rotation: [0, 10, 0],
            scale: [1, 5, 1],
          },
          children: [],
        },
      ],
    },
  ],
};

