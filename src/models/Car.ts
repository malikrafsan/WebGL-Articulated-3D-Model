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
        translation: [310, 0, 0],
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
        translation: [240, 0, 0],
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
        translation: [150, 0, 0],
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
        translation: [60, 0, 0],
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
        translation: [-10, 0, 0],
        rotation: [0, 0, 25.783100780887047],
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
        translation: [-40, 0, 0],
        rotation: [0, 0, 34.37746770784939],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [130, 100, -30],
            rotation: [0, 0, 0],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -50, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -50, 10],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -30, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -30, -60],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [-40, 0, 0],
        rotation: [-17.188733853924695, 20.05352282957881, 60.16056848873644],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 150, -30],
            rotation: [
              25.783100780887047, 80.21409131831524, -22.91831180523293,
            ],
            scale: [1, 3, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [10, -50, 0],
        rotation: [-17.188733853924695, 20.05352282957881, 60.16056848873644],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 150, -30],
            rotation: [
              25.783100780887047, 105.9971920992023, -22.91831180523293,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [70, -120, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 150, -30],
            rotation: [
              25.783100780887047, 105.9971920992023, -22.91831180523293,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [130, -160, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 150, -30],
            rotation: [
              5.729577951308232, 131.78029288008932, 28.64788975654116,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [200, -260, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 110, -30],
            rotation: [
              5.729577951308232, 131.78029288008932, 28.64788975654116,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [280, -350, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [80, 110, -30],
            rotation: [
              5.729577951308232, 131.78029288008932, 28.64788975654116,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [280, -350, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [40, 220, -30],
            rotation: [
              5.729577951308232, 131.78029288008932, 28.64788975654116,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [410, -350, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [30, 350, -30],
            rotation: [
              -20.05352282957881, 131.78029288008932, -17.188733853924695,
            ],
            scale: [1.6000000000000005, 3.6000000000000005, 1.6000000000000005],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
    {
      transform: {
        translation: [410, -350, 0],
        rotation: [-34.37746770784939, 34.37746770784939, 63.02535746439057],
        scale: [1.5, 1.5, 1.5],
      },
      children: [
        {
          transform: {
            translation: [30, 350, -30],
            rotation: [
              -20.05352282957881, 131.78029288008932, -17.188733853924695,
            ],
            scale: [12, 12, 12],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -100, 10],
            rotation: [0, 28.64788975654116, 0],
            scale: [1.1, 1.1, 1.1],
          },
          children: [],
        },
        {
          transform: {
            translation: [160, -120, 10],
            rotation: [-42.97183463481174, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [200, -60, -60],
            rotation: [0, -57.29577951308232, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
        {
          transform: {
            translation: [10, -60, -100],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
        },
      ],
    },
  ],
};
