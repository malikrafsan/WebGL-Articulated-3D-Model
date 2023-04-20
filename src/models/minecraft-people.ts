import {
  COLORS,
  Vertex,
  Vector3,
  IArticulatedModel,
  TEXTURE,
  IModelAndAnimation,
} from "..";

export const MINECRAFT_PEOPLE = {
  name: "Root",
  node: {
    vertices: [
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
      new Vertex(new Vector3(0, 0, 0), COLORS.BISQUE),
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
    translation: [0, 300, 0],
    rotation: [0, 90, 0],
    scale: [1, 1, 1],
  },
  children: [
    {
      name: "Head",
      node: {
        vertices: [
          new Vertex(new Vector3(125, 100, 100), COLORS.BISQUE),
          new Vertex(new Vector3(-125, 100, 100), COLORS.BISQUE),
          new Vertex(new Vector3(-125, -100, 100), COLORS.BISQUE),
          new Vertex(new Vector3(125, -100, 100), COLORS.BISQUE),
          new Vertex(new Vector3(125, 100, -100), COLORS.BISQUE),
          new Vertex(new Vector3(-125, 100, -100), COLORS.BISQUE),
          new Vertex(new Vector3(-125, -100, -100), COLORS.BISQUE),
          new Vertex(new Vector3(125, -100, -100), COLORS.BISQUE),
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
        scale: [1, 1, 1],
      },
      children: [
        {
          name: "Hair",
          node: {
            vertices: [
              new Vertex(new Vector3(130, 0, 105), COLORS.BLACK),
              new Vertex(new Vector3(-130, 0, 105), COLORS.BROWN),
              new Vertex(new Vector3(-130, -50, 105), COLORS.BLACK),
              new Vertex(new Vector3(130, -50, 105), COLORS.BROWN),
              new Vertex(new Vector3(130, 0, -105), COLORS.BROWN),
              new Vertex(new Vector3(-130, 0, -105), COLORS.BLACK),
              new Vertex(new Vector3(-130, -50, -105), COLORS.BROWN),
              new Vertex(new Vector3(130, -50, -105), COLORS.BLACK),
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
            translation: [0, 120, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1], // TODO: USE CONFIG
          },
          children: [],
          texture: TEXTURE.NONE,
        },
        {
          name: "Right-Eye",
          node: {
            vertices: [
              new Vertex(new Vector3(10, 10, 10), COLORS.BLACK),
              new Vertex(new Vector3(-10, 10, 10), COLORS.BLACK),
              new Vertex(new Vector3(-10, -10, 10), COLORS.BLACK),
              new Vertex(new Vector3(10, -10, 10), COLORS.BLACK),
              new Vertex(new Vector3(10, 10, -10), COLORS.BLACK),
              new Vertex(new Vector3(-10, 10, -10), COLORS.BLACK),
              new Vertex(new Vector3(-10, -10, -10), COLORS.BLACK),
              new Vertex(new Vector3(10, -10, -10), COLORS.BLACK),
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
            translation: [-120, 20, 30],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [],
          texture: TEXTURE.NONE,
        },
        {
          name: "Left-Eye",
          node: {
            vertices: [
              new Vertex(new Vector3(10, 10, 10), COLORS.BLACK),
              new Vertex(new Vector3(-10, 10, 10), COLORS.BLACK),
              new Vertex(new Vector3(-10, -10, 10), COLORS.BLACK),
              new Vertex(new Vector3(10, -10, 10), COLORS.BLACK),
              new Vertex(new Vector3(10, 10, -10), COLORS.BLACK),
              new Vertex(new Vector3(-10, 10, -10), COLORS.BLACK),
              new Vertex(new Vector3(-10, -10, -10), COLORS.BLACK),
              new Vertex(new Vector3(10, -10, -10), COLORS.BLACK),
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
            translation: [-120, 20, -30],
            rotation: [0, 0, 0],
            scale: [1, 1, 1], // TODO: USE CONFIG
          },
          children: [],
          texture: TEXTURE.NONE,
        },
        {
          name: "Mouth",
          node: {
            vertices: [
              new Vertex(new Vector3(5, 5, 30), COLORS.BLACK),
              new Vertex(new Vector3(-5, 5, 30), COLORS.BLACK),
              new Vertex(new Vector3(-5, -5, 30), COLORS.BLACK),
              new Vertex(new Vector3(5, -5, 30), COLORS.BLACK),
              new Vertex(new Vector3(5, 5, -30), COLORS.BLACK),
              new Vertex(new Vector3(-5, 5, -30), COLORS.BLACK),
              new Vertex(new Vector3(-5, -5, -30), COLORS.BLACK),
              new Vertex(new Vector3(5, -5, -30), COLORS.BLACK),
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
            translation: [-130, -40, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1], // TODO: USE CONFIG
          },
          children: [],
          texture: TEXTURE.NONE,
        },
      ],
      texture: TEXTURE.NONE,
    },
    {
      name: "Body",
      node: {
        vertices: [
          new Vertex(new Vector3(75, 100, 100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(-75, 100, 100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(-75, -200, 100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(75, -200, 100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(75, 100, -100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(-75, 100, -100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(-75, -200, -100), COLORS.AQUAMARINE),
          new Vertex(new Vector3(75, -200, -100), COLORS.AQUAMARINE),
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
        translation: [0, -200, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          name: "Right-Sleeve",
          node: {
            vertices: [
              new Vertex(new Vector3(75, 100, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 100, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 0, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 0, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 100, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 100, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 0, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 0, -100), COLORS.AQUAMARINE),
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
            translation: [0, 0, 200],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              name: "Right-Hand",
              node: {
                vertices: [
                  new Vertex(new Vector3(75, 100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, 100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, -100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(75, -100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(75, 100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, 100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, -100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(75, -100, -100), COLORS.BISQUE),
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
                translation: [0, -100, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
              texture: TEXTURE.NONE,
            },
          ],
          texture: TEXTURE.NONE,
        },
        {
          name: "Left-Sleeve",
          node: {
            vertices: [
              new Vertex(new Vector3(75, 100, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 100, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 0, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 0, -20), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 100, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 100, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(-75, 0, -100), COLORS.AQUAMARINE),
              new Vertex(new Vector3(75, 0, -100), COLORS.AQUAMARINE),
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
            translation: [0, 0, -80],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              name: "Left-Hand",
              node: {
                vertices: [
                  new Vertex(new Vector3(75, 100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, 100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, -100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(75, -100, -30), COLORS.BISQUE),
                  new Vertex(new Vector3(75, 100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, 100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(-75, -100, -100), COLORS.BISQUE),
                  new Vertex(new Vector3(75, -100, -100), COLORS.BISQUE),
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
                translation: [0, -100, 10],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
              texture: TEXTURE.NONE,
            },
          ],
          texture: TEXTURE.NONE,
        },
      ],
      texture: TEXTURE.NONE,
    },
    {
      name: "Feet",
      node: {
        vertices: [
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
          new Vertex(new Vector3(0, 0, 0), COLORS.BLUE_VIOLET),
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
        translation: [0, -500, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          name: "Left-Feet",
          node: {
            vertices: [
              new Vertex(new Vector3(75, 100, -5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, 100, -5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, -200, -5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, -200, -5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, 100, -100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, 100, -100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, -200, -100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, -200, -100), COLORS.BLUE_VIOLET),
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
            scale: [1, 1, 1],
          },
          children: [],
          texture: TEXTURE.NONE,
        },
        {
          name: "Right-Feet",
          node: {
            vertices: [
              new Vertex(new Vector3(75, 100, 100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, 100, 100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, -200, 100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, -200, 100), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, 100, 5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, 100, 5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(-75, -200, 5), COLORS.BLUE_VIOLET),
              new Vertex(new Vector3(75, -200, 5), COLORS.BLUE_VIOLET),
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
            scale: [1, 1, 1],
          },
          children: [],
          texture: TEXTURE.NONE,
        },
      ],
      texture: TEXTURE.NONE,
    },
  ],
  texture: TEXTURE.NONE,
};

export const MINECRAFT_PEOPLE_ANIM = {
  name: "animator",
  frames: [
    // 1
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 2
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 10, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, -60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 30],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, -30],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 3
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 4
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, -10, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, -60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, -30],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 30],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 5
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 6
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [10, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, -60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 30],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, -30],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 7
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 8
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [-10, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, -60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 60],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, -30],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 30],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 9
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 10
    {
      // root
      transform: {
        translation: [0, 400, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 180],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 180],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 11
    {
      // root
      transform: {
        translation: [0, 300, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
    // 12
    {
      // root
      transform: {
        translation: [0, 400, 0],
        rotation: [0, 90, 0],
        scale: [1, 1, 1],
      },
      children: [
        {
          // head
          transform: {
            translation: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // hair
              transform: {
                translation: [0, 120, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // right-eye
              transform: {
                translation: [-120, 20, 30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // left-eye
              transform: {
                translation: [-120, 20, -30],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
            {
              // mouth
              transform: {
                translation: [-130, -40, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
            },
          ],
        },
        {
          // body
          transform: {
            translation: [0, -200, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Right-Sleeve
              transform: {
                translation: [0, 0, 200],
                rotation: [0, 0, 180],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Right-Hand
                  transform: {
                    translation: [0, -100, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
            {
              // Left-Sleeve
              transform: {
                translation: [0, 0, -80],
                rotation: [0, 0, 180],
                scale: [1, 1, 1],
              },
              children: [
                {
                  // Left-Hand
                  transform: {
                    translation: [0, -100, 10],
                    rotation: [0, 0, 0],
                    scale: [1, 1, 1],
                  },
                  children: [],
                },
              ],
            },
          ],
        },
        {
          // Feet
          transform: {
            translation: [0, -500, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
          },
          children: [
            {
              // Left-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
            {
              // Right-Feet
              transform: {
                translation: [0, 0, 0],
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
              },
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
