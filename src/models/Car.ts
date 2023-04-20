import {
  Vertex,
  Vector3,
  COLORS,
  TEXTURE,
  IArticulatedModel,
  IAnimation,
} from "..";

export const CAR: IArticulatedModel = {
  name: "Body",
  node: {
    vertices: [
      new Vertex(new Vector3(0, 0, 0), COLORS.BLUE),
      new Vertex(new Vector3(200, 0, 0), COLORS.RED),
      new Vertex(new Vector3(200, 50, 0), COLORS.GREEN),
      new Vertex(new Vector3(0, 50, 0), COLORS.YELLOW),

      new Vertex(new Vector3(80, 50, 0), COLORS.BLUE),
      new Vertex(new Vector3(100, 90, 0), COLORS.RED),
      new Vertex(new Vector3(100, 50, 0), COLORS.GREEN),

      new Vertex(new Vector3(0, 0, -60), COLORS.BLUE),
      new Vertex(new Vector3(200, 0, -60), COLORS.RED),
      new Vertex(new Vector3(200, 50, -60), COLORS.GREEN),
      new Vertex(new Vector3(0, 50, -60), COLORS.YELLOW),

      new Vertex(new Vector3(80, 50, -60), COLORS.BLUE),
      new Vertex(new Vector3(100, 90, -60), COLORS.RED),
      new Vertex(new Vector3(100, 50, -60), COLORS.GREEN),
    ],
    faces: [
      // Right
      [0, 1, 2, 3],
      [4, 6, 5, 4],

      // Left
      [7, 10, 9, 8],
      [11, 12, 13, 11],

      // Front
      [0, 3, 10, 7],
      [4, 5, 12, 11],

      // back
      [1, 8, 9, 2],
      [6, 13, 12, 5],

      // top
      [3, 4, 11, 10],
      [2, 9, 13, 6],

      // bottom
      [1, 0, 7, 8],
    ],
  },
  transform: {
    translation: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1.5, 1.5, 1.5],
  },
  texture: TEXTURE.REFLECTION,
  children: [
    {
      name: "person",
      node: {
        vertices: [
          new Vertex(new Vector3(10, 10, 10), COLORS.BLUE),
          new Vertex(new Vector3(-10, 10, 10), COLORS.BLUE),
          new Vertex(new Vector3(-10, -10, 10), COLORS.BLUE),
          new Vertex(new Vector3(10, -10, 10), COLORS.BLUE),
          new Vertex(new Vector3(10, 10, -10), COLORS.RED),
          new Vertex(new Vector3(-10, 10, -10), COLORS.RED),
          new Vertex(new Vector3(-10, -10, -10), COLORS.RED),
          new Vertex(new Vector3(10, -10, -10), COLORS.RED),
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
        translation: [130, 50, -30],
        rotation: [0, 0, 0],
        scale: [1, 3, 1],
      },
      texture: TEXTURE.NONE,
      children: [],
    },
    {
      name: "front-left-wheel",
      node: {
        vertices: [
          new Vertex(new Vector3(10, 0, 0), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, 0), COLORS.RED),
          new Vertex(new Vector3(30, 10, 0), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, 0), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, 0), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, 0), COLORS.RED),
          new Vertex(new Vector3(0, 20, 0), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, 0), COLORS.YELLOW),

          new Vertex(new Vector3(10, 0, -10), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, -10), COLORS.RED),
          new Vertex(new Vector3(30, 10, -10), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, -10), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, -10), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, -10), COLORS.RED),
          new Vertex(new Vector3(0, 20, -10), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, -10), COLORS.YELLOW),
        ],
        faces: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [0, 3, 4, 7],

          [1, 0, 8, 9],
          [2, 1, 9, 10],
          [3, 2, 10, 11],
          [4, 3, 11, 12],
          [5, 4, 12, 13],
          [6, 5, 13, 14],
          [7, 6, 14, 15],
          [0, 7, 15, 8],

          [11, 10, 9, 8],
          [15, 14, 13, 12],
          [15, 12, 11, 8],
        ],
      },
      transform: {
        translation: [10, -10, 10],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [],
      texture: TEXTURE.BUMP,
    },
    {
      name: "back-left-wheel",
      node: {
        vertices: [
          new Vertex(new Vector3(10, 0, 0), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, 0), COLORS.RED),
          new Vertex(new Vector3(30, 10, 0), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, 0), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, 0), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, 0), COLORS.RED),
          new Vertex(new Vector3(0, 20, 0), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, 0), COLORS.YELLOW),

          new Vertex(new Vector3(10, 0, -10), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, -10), COLORS.RED),
          new Vertex(new Vector3(30, 10, -10), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, -10), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, -10), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, -10), COLORS.RED),
          new Vertex(new Vector3(0, 20, -10), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, -10), COLORS.YELLOW),
        ],
        faces: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [0, 3, 4, 7],

          [1, 0, 8, 9],
          [2, 1, 9, 10],
          [3, 2, 10, 11],
          [4, 3, 11, 12],
          [5, 4, 12, 13],
          [6, 5, 13, 14],
          [7, 6, 14, 15],
          [0, 7, 15, 8],

          [11, 10, 9, 8],
          [15, 14, 13, 12],
          [15, 12, 11, 8],
        ],
      },
      transform: {
        translation: [160, -10, 10],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [],
      texture: TEXTURE.BUMP,
    },
    {
      name: "back-right-wheel",
      node: {
        vertices: [
          new Vertex(new Vector3(10, 0, 0), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, 0), COLORS.RED),
          new Vertex(new Vector3(30, 10, 0), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, 0), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, 0), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, 0), COLORS.RED),
          new Vertex(new Vector3(0, 20, 0), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, 0), COLORS.YELLOW),

          new Vertex(new Vector3(10, 0, -10), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, -10), COLORS.RED),
          new Vertex(new Vector3(30, 10, -10), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, -10), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, -10), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, -10), COLORS.RED),
          new Vertex(new Vector3(0, 20, -10), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, -10), COLORS.YELLOW),
        ],
        faces: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [0, 3, 4, 7],

          [1, 0, 8, 9],
          [2, 1, 9, 10],
          [3, 2, 10, 11],
          [4, 3, 11, 12],
          [5, 4, 12, 13],
          [6, 5, 13, 14],
          [7, 6, 14, 15],
          [0, 7, 15, 8],

          [11, 10, 9, 8],
          [15, 14, 13, 12],
          [15, 12, 11, 8],
        ],
      },
      transform: {
        translation: [160, -10, -60],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [],
      texture: TEXTURE.BUMP,
    },
    {
      name: "front-right-wheel",
      node: {
        vertices: [
          new Vertex(new Vector3(10, 0, 0), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, 0), COLORS.RED),
          new Vertex(new Vector3(30, 10, 0), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, 0), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, 0), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, 0), COLORS.RED),
          new Vertex(new Vector3(0, 20, 0), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, 0), COLORS.YELLOW),

          new Vertex(new Vector3(10, 0, -10), COLORS.BLUE),
          new Vertex(new Vector3(20, 0, -10), COLORS.RED),
          new Vertex(new Vector3(30, 10, -10), COLORS.GREEN),
          new Vertex(new Vector3(30, 20, -10), COLORS.YELLOW),
          new Vertex(new Vector3(20, 30, -10), COLORS.BLUE),
          new Vertex(new Vector3(10, 30, -10), COLORS.RED),
          new Vertex(new Vector3(0, 20, -10), COLORS.GREEN),
          new Vertex(new Vector3(0, 10, -10), COLORS.YELLOW),
        ],
        faces: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [0, 3, 4, 7],

          [1, 0, 8, 9],
          [2, 1, 9, 10],
          [3, 2, 10, 11],
          [4, 3, 11, 12],
          [5, 4, 12, 13],
          [6, 5, 13, 14],
          [7, 6, 14, 15],
          [0, 7, 15, 8],

          [11, 10, 9, 8],
          [15, 14, 13, 12],
          [15, 12, 11, 8],
        ],
      },
      transform: {
        translation: [10, -10, -60],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [],
      texture: TEXTURE.BUMP,
    },
  ],
};

export const CAR_ANIM: IAnimation = {
  name: "car animation",
  frames: [
    {
      transform: {
        translation: [315, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [210, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [105, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-105, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-210, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-315, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-420, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-525, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-630, 0, 0],
        rotation: [0, 0, 0],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 50, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -10, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
  ],
};
