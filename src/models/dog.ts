import {
    COLORS,
    Vertex,
    Vector3,
    TEXTURE,
    IArticulatedModel,
    IAnimation,
} from "..";

export const DOG: IArticulatedModel = {
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
      translation: [0, 0, 0],
      rotation: [10, -80, 0],
      scale: [1, 1, 1],
    },
    children: [
      {
        name: "Head",
        node: {
          vertices: [
            new Vertex(new Vector3(40, 40, 40), COLORS.BISQUE),
            new Vertex(new Vector3(-40, 40, 40), COLORS.BISQUE),
            new Vertex(new Vector3(-40, -40, 40), COLORS.BISQUE),
            new Vertex(new Vector3(40, -40, 40), COLORS.BISQUE),
            new Vertex(new Vector3(40, 40, -40), COLORS.BISQUE),
            new Vertex(new Vector3(-40, 40, -40), COLORS.BISQUE),
            new Vertex(new Vector3(-40, -40, -40), COLORS.BISQUE),
            new Vertex(new Vector3(40, -40, -40), COLORS.BISQUE),
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
          translation: [0, 90, 120],
          rotation: [0, 0, 0],
          scale: [1, 1, 1],
        },
        children: [
            {
              name: "Mouth",
              node: {
                vertices: [
                  new Vertex(new Vector3(10, 10, 20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(-10, 10, 20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(-10, -10, 20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(10, -10, 20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(10, 10, -20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(-10, 10, -20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(-10, -10, -20), COLORS.AQUAMARINE),
                  new Vertex(new Vector3(10, -10, -20), COLORS.AQUAMARINE),
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
                translation: [0, -10, 60],
                rotation: [0, 0, 0],
                scale: [1, 1, 1], // TODO: USE CONFIG
              },
              children: [],
              texture: TEXTURE.NONE,
            },
            {
                name: "Ears(left)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(12, 20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, 20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, -20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(12, -20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(12, 20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, 20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, -20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(12, -20, -5), COLORS.BLACK),
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
                  translation: [50, 0, 0],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1], // TODO: USE CONFIG
                },
                children: [],
                texture: TEXTURE.NONE,
              },
              {
                name: "Ear(right)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(12, 20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, 20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, -20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(12, -20, 5), COLORS.BLACK),
                    new Vertex(new Vector3(12, 20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, 20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(-12, -20, -5), COLORS.BLACK),
                    new Vertex(new Vector3(12, -20, -5), COLORS.BLACK),
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
                  translation: [-50, 0, 0],
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
        name: "Body",
        node: {
          vertices: [
            new Vertex(new Vector3(50, 50, 100), COLORS.BROWN),
            new Vertex(new Vector3(-50, 50, 100), COLORS.BROWN),
            new Vertex(new Vector3(-50, -50, 100), COLORS.BROWN),
            new Vertex(new Vector3(50, -50, 100), COLORS.BROWN),
            new Vertex(new Vector3(50, 50, -100), COLORS.BROWN),
            new Vertex(new Vector3(-50, 50, -100), COLORS.BROWN),
            new Vertex(new Vector3(-50, -50, -100), COLORS.BROWN),
            new Vertex(new Vector3(50, -50, -100), COLORS.BROWN),
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
                name: "Front_Leg(left)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, -20), COLORS.DARK_GREEN),
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
                  translation: [70, -70, 70],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1], // TODO: USE CONFIG
                },
                children: [],
                texture: TEXTURE.NONE,
            },
            {
                name: "Front_Leg(right)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, -20), COLORS.DARK_GREEN),
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
                  translation: [-70, -70, 70],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1],
                },
                children: [],
                texture: TEXTURE.NONE,
            },
            {
                name: "Back_Leg(left)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, -20), COLORS.DARK_GREEN),
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
                  translation: [70, -70, -70],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1],
                },
                children: [],
                texture: TEXTURE.NONE,
            },
            {
                name: "Back_Leg(right)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, 20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, 80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(-20, -80, -20), COLORS.DARK_GREEN),
                    new Vertex(new Vector3(20, -80, -20), COLORS.DARK_GREEN),
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
                  translation: [-70, -70, -70],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1],
                },
                children: [],
                texture: TEXTURE.NONE,
            },
            {
                name: "Tail(1)",
                node: {
                  vertices: [
                    new Vertex(new Vector3(10, 10, 40), COLORS.GRAY),
                    new Vertex(new Vector3(-10, 10, 40), COLORS.GRAY),
                    new Vertex(new Vector3(-10, -10, 40), COLORS.GRAY),
                    new Vertex(new Vector3(10, -10, 40), COLORS.GRAY),
                    new Vertex(new Vector3(10, 10, -40), COLORS.GRAY),
                    new Vertex(new Vector3(-10, 10, -40), COLORS.GRAY),
                    new Vertex(new Vector3(-10, -10, -40), COLORS.GRAY),
                    new Vertex(new Vector3(10, -10, -40), COLORS.GRAY),
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
                  translation: [0, 30, -140],
                  rotation: [0, 0, 0],
                  scale: [1, 1, 1],
                },
                children: [
                    {
                        name: "Tail(2)",
                        node: {
                          vertices: [
                            new Vertex(new Vector3(10, 10, 30), COLORS.BLUE),
                            new Vertex(new Vector3(-10, 10, 30), COLORS.BLUE),
                            new Vertex(new Vector3(-10, -10, 30), COLORS.BLUE),
                            new Vertex(new Vector3(10, -10, 30), COLORS.BLUE),
                            new Vertex(new Vector3(10, 10, -30), COLORS.BLUE),
                            new Vertex(new Vector3(-10, 10, -30), COLORS.BLUE),
                            new Vertex(new Vector3(-10, -10, -30), COLORS.BLUE),
                            new Vertex(new Vector3(10, -10, -30), COLORS.BLUE),
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
                          translation: [0, 15, -60],
                          rotation: [30, 0, 0],
                          scale: [1, 1, 1],
                        },
                        children: [],
                        texture: TEXTURE.NONE,
                    },
                ],
                texture: TEXTURE.NONE,
            },
        ],
        texture: TEXTURE.NONE, // Body
      },
    ],
    texture: TEXTURE.NONE, // Root
};

export const DOG_ANIM: IAnimation = {
    name: "car animation",
    frames: [
        {
            "transform": {
              "translation": [420, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [29.999999999999996, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [420, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [29.999999999999996, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [380, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [25.783100780887047, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-10, 30, -140],
                      "rotation": [-8.594366926962348, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [340, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [-31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [-20.05352282957881, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 50, -130],
                      "rotation": [28.64788975654116, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, -5, -60],
                          "rotation": [-11.459155902616464, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [300, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [25.783100780887047, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-20, 50, -140],
                      "rotation": [20.05352282957881, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [260, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [-31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [-20.05352282957881, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 50, -130],
                      "rotation": [28.64788975654116, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [220, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [25.783100780887047, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [-34.37746770784939, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -80, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -60.16056848873644, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 90, 120],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [0, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 110, 100],
                  "rotation": [-5.729577951308232, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-25.783100780887047, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [31.512678732195283, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 110, 100],
                  "rotation": [-5.729577951308232, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 140, 120],
                  "rotation": [-5.729577951308232, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 190, 150],
                  "rotation": [25.783100780887047, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 200, 250],
                  "rotation": [88.8084582452776, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 160, 400],
                  "rotation": [134.64508185574346, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, 10, 490],
                  "rotation": [189.07607239317167, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "transform": {
              "translation": [180, 0, 0],
              "rotation": [10, -40.10704565915762, 0],
              "scale": [1, 1, 1]
            },
            "children": [
              {
                "transform": {
                  "translation": [0, -60, 520],
                  "rotation": [177.6169164905552, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [0, -10, 60],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-50, 0, 0],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  }
                ]
              },
              {
                "transform": {
                  "translation": [0, 0, 0],
                  "rotation": [-45.83662361046586, 0, 0],
                  "scale": [1, 1, 1]
                },
                "children": [
                  {
                    "transform": {
                      "translation": [70, -70, 110],
                      "rotation": [-37.24225668350351, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, 70],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [70, -70, -70],
                      "rotation": [51.56620156177409, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [-70, -70, -70],
                      "rotation": [48.70141258611997, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": []
                  },
                  {
                    "transform": {
                      "translation": [0, 30, -140],
                      "rotation": [0, 0, 0],
                      "scale": [1, 1, 1]
                    },
                    "children": [
                      {
                        "transform": {
                          "translation": [0, 15, -60],
                          "rotation": [40.10704565915762, 0, 0],
                          "scale": [1, 1, 1]
                        },
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
    ]
}