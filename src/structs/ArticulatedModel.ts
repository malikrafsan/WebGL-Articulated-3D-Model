import {
  ContextGL,
  IArticulatedModel,
  INodeModel,
  Transform,
  TEXTURE_VALUES,
  Matrix4,
  Camera,
  MatTransform,
  LocationGL,
  Vector3,
  TextureGL,
  ITransform,
} from "..";

export class ArticulatedModel {
  private _contextGL: ContextGL;
  private _name: string;
  private _node: INodeModel;
  private _transform: Transform;
  private _children: ArticulatedModel[];
  private _texture: TEXTURE_VALUES;

  constructor(contextGL: ContextGL, model: IArticulatedModel) {
    this._contextGL = contextGL;
    this._name = model.name;
    this._node = model.node;
    // this._transform = new Transform(model.transform);
    this.setTransform(model.transform);
    this._children = model.children.map(
      (child) => new ArticulatedModel(contextGL, child)
    );
    this._texture = model.texture;

    const gl = this._contextGL.gl;
    const positionBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const textureCoordBuffer = gl.createBuffer();
    const normalBuffer = gl.createBuffer();
    const tangentBuffer = gl.createBuffer();
    const bitangentBuffer = gl.createBuffer();

    if (
      !positionBuffer ||
      !colorBuffer ||
      !textureCoordBuffer ||
      !normalBuffer ||
      !tangentBuffer ||
      !bitangentBuffer
    ) {
      throw new Error("Failed to create buffer");
    }

    this._positionBuffer = positionBuffer;
    this._colorBuffer = colorBuffer;
    this._textureCoordBuffer = textureCoordBuffer;
    this._normalBuffer = normalBuffer;
    this._tangentBuffer = tangentBuffer;
    this._bitangentBuffer = bitangentBuffer;

    this._locationGL = new LocationGL(this._contextGL);
    this.adjustProps();
  }

  public toInterface(): IArticulatedModel {
    return {
      name: this._name,
      node: this._node,
      transform: this._transform.toInterface(),
      children: this._children.map((child) => child.toInterface()),
      texture: this._texture,
    };
  }

  public setTransform(transform: ITransform) {
    this._transform = new Transform(transform);
    this._transform.ToRad();
  }

  public get name(): string {
    return this._name;
  }

  public get node(): INodeModel {
    return this._node;
  }

  public get transform(): Transform {
    return this._transform;
  }

  public get children(): ArticulatedModel[] {
    return this._children;
  }

  public get texture(): TEXTURE_VALUES {
    return this._texture;
  }

  public draw(props: {
    pMat: Matrix4;
    vMat: Matrix4;
    mMat: Matrix4;
    camera: Camera;
    isShadingOn: boolean;
  }) {
    const { pMat, vMat, mMat, camera, isShadingOn } = props;

    const transform = this.transform.clone();
    const cloneM_Mat = mMat.clone();
    const newModelMat = new MatTransform(cloneM_Mat);
    newModelMat.transform(transform);

    // DRAW
    this._contextGL.gl.useProgram(this._contextGL.program);
    this.bindBuffers();
    this.setBuffers();

    this.setUniforms({
      projectionMat: pMat,
      viewMat: vMat,
      modelMat: newModelMat.mat,
      camera: camera,
      isShadingOn: isShadingOn,
    });

    this._contextGL.gl.drawArrays(
      this._contextGL.gl.TRIANGLES,
      0,
      this._numVertices
    );

    this.children.forEach((child) => {
      child.draw({
        pMat,
        vMat,
        mMat: newModelMat.mat,
        camera,
        isShadingOn,
      });
    });
  }

  // ----------------------------------------------------------------
  // COMPLEX GL METHODS
  // ----------------------------------------------------------------

  private _positionBuffer: WebGLBuffer;
  private _colorBuffer: WebGLBuffer;
  private _normalBuffer: WebGLBuffer;
  private _tangentBuffer: WebGLBuffer;
  private _bitangentBuffer: WebGLBuffer;
  private _textureCoordBuffer: WebGLBuffer;

  private _locationGL: LocationGL;

  private _numVertices: number = 0;
  private _position: number[] = [];
  private _color: number[] = [];
  private _normal: number[] = [];
  private _tangent: number[] = [];
  private _bitangent: number[] = [];

  private _textures: (WebGLTexture | null)[] = [];
  private _textureCoord: number[] = [];

  private bindBuffers() {
    const gl = this._contextGL.gl;

    gl.bindBuffer(gl.ARRAY_BUFFER, this._positionBuffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this._position),
      gl.STATIC_DRAW
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, this._colorBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(this._color), gl.STATIC_DRAW);
    // console.log(this._color);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this._normal),
      gl.STATIC_DRAW
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, this._tangentBuffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this._tangent),
      gl.STATIC_DRAW
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, this._bitangentBuffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this._bitangent),
      gl.STATIC_DRAW
    );

    gl.bindBuffer(gl.ARRAY_BUFFER, this._textureCoordBuffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(this._textureCoord),
      gl.STATIC_DRAW
    );
  }

  private setBuffers() {
    const gl = this._contextGL.gl;

    //console.log(this._locationGL);

    gl.enableVertexAttribArray(this._locationGL.position);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._positionBuffer);

    const posConfig = {
      size: 3,
      normalize: false,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.position,
      posConfig.size,
      gl.FLOAT,
      posConfig.normalize,
      posConfig.stride,
      posConfig.offset
    );

    gl.enableVertexAttribArray(this._locationGL.color);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._colorBuffer);

    const colorConfig = {
      size: 4,
      normalize: true,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.color,
      colorConfig.size,
      gl.UNSIGNED_BYTE,
      colorConfig.normalize,
      colorConfig.stride,
      colorConfig.offset
    );

    gl.enableVertexAttribArray(this._locationGL.normal);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._normalBuffer);

    const normalConfig = {
      size: 3,
      normalize: false,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.normal,
      normalConfig.size,
      gl.FLOAT,
      normalConfig.normalize,
      normalConfig.stride,
      normalConfig.offset
    );

    gl.enableVertexAttribArray(this._locationGL.tangent);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._tangentBuffer);

    const tangentConfig = {
      size: 3,
      normalize: false,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.tangent,
      tangentConfig.size,
      gl.FLOAT,
      tangentConfig.normalize,
      tangentConfig.stride,
      tangentConfig.offset
    );

    gl.enableVertexAttribArray(this._locationGL.bitangent);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._bitangentBuffer);

    const bitangentConfig = {
      size: 3,
      normalize: false,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.bitangent,
      bitangentConfig.size,
      gl.FLOAT,
      bitangentConfig.normalize,
      bitangentConfig.stride,
      bitangentConfig.offset
    );

    gl.enableVertexAttribArray(this._locationGL.textureCoord);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._textureCoordBuffer);

    const textureCoordConfig = {
      size: 2,
      normalize: false,
      stride: 0,
      offset: 0,
    };
    gl.vertexAttribPointer(
      this._locationGL.textureCoord,
      textureCoordConfig.size,
      gl.FLOAT,
      textureCoordConfig.normalize,
      textureCoordConfig.stride,
      textureCoordConfig.offset
    );
  }

  private setUniforms(props: {
    projectionMat: Matrix4;
    viewMat: Matrix4;
    modelMat: Matrix4;
    camera: Camera;
    isShadingOn: boolean;
  }) {
    const gl = this._contextGL.gl;

    gl.uniformMatrix4fv(
      this._locationGL.projectionMatrix,
      false,
      props.projectionMat.toArray()
    );

    gl.uniformMatrix4fv(
      this._locationGL.viewMatrix,
      false,
      props.viewMat.toArray()
    );

    gl.uniformMatrix4fv(
      this._locationGL.modelMatrix,
      false,
      props.modelMat.toArray()
    );

    gl.uniform3fv(
      this._locationGL.reverseLightDirection,
      new Vector3(0.2, 0.4, 1).normalize().toArray()
    );

    const viewModelMat = Matrix4.multiply(props.viewMat, props.modelMat);
    const normalMat = viewModelMat.clone().inverse().transpose();

    gl.uniformMatrix4fv(
      this._locationGL.normalMatrix,
      false,
      normalMat.toArray()
    );

    gl.uniform3fv(
      this._locationGL.worldCameraPosition,
      props.camera.position.toArray()
    );

    gl.uniform1i(this._locationGL.shadingOn, props.isShadingOn ? 1 : 0);

    // console.log("this.textureMode", this.textureMode);
    // console.log(TextureGL.textureNumber(this.textureMode))

    gl.uniform1i(
      this._locationGL.textureMode,
      TextureGL.textureNumber(this._texture)
    );

    // console.log("this._textures", this._textures)

    gl.uniform1i(this._locationGL.textureImage, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._textures[0]);

    // TODO: fix this
    gl.uniform1i(this._locationGL.textureEnvironment, 1);
    // console.log("this._textures[1]", this._textures[1]);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, this._textures[1]);

    gl.uniform1i(this._locationGL.textureBump, 2);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, this._textures[2]);
  }

  private adjustProps() {
    const vertexPositions: number[] = [];
    const vertexColors: number[] = [];
    const vertexTextureCoordinates: number[] = [];

    // for (let i = 0; i < this._modelData.components.length; i++) {
    //   const component = this._modelData.components[i];

    //   const vertices = component.vertices;

    //   const positions: number[] = [];
    //   const colors: number[] = [];
    //   const textureCoordinates: number[] = [];

    //   for (let j = 0; j < component.faces.length; j++) {
    //     const face = component.faces[j];

    //     positions.push(...vertices[face[1]].position.toArray());
    //     positions.push(...vertices[face[2]].position.toArray());
    //     positions.push(...vertices[face[3]].position.toArray());
    //     positions.push(...vertices[face[0]].position.toArray());
    //     positions.push(...vertices[face[1]].position.toArray());
    //     positions.push(...vertices[face[3]].position.toArray());

    //     colors.push(...vertices[face[1]].color.toArray());
    //     colors.push(...vertices[face[2]].color.toArray());
    //     colors.push(...vertices[face[3]].color.toArray());
    //     colors.push(...vertices[face[0]].color.toArray());
    //     colors.push(...vertices[face[1]].color.toArray());
    //     colors.push(...vertices[face[3]].color.toArray());

    //     textureCoordinates.push(...[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1]);
    //   }

    //   vertexPositions.push(...positions);
    //   vertexColors.push(...colors);
    //   vertexTextureCoordinates.push(...textureCoordinates);
    // }

    const component = this._node;

    const vertices = component.vertices;

    const positions: number[] = [];
    const colors: number[] = [];
    const textureCoordinates: number[] = [];

    for (let j = 0; j < component.faces.length; j++) {
      const face = component.faces[j];

      positions.push(...vertices[face[1]].position.toArray());
      positions.push(...vertices[face[2]].position.toArray());
      positions.push(...vertices[face[3]].position.toArray());
      positions.push(...vertices[face[0]].position.toArray());
      positions.push(...vertices[face[1]].position.toArray());
      positions.push(...vertices[face[3]].position.toArray());

      colors.push(...vertices[face[1]].color.toArray());
      colors.push(...vertices[face[2]].color.toArray());
      colors.push(...vertices[face[3]].color.toArray());
      colors.push(...vertices[face[0]].color.toArray());
      colors.push(...vertices[face[1]].color.toArray());
      colors.push(...vertices[face[3]].color.toArray());

      textureCoordinates.push(...[0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1]);
    }

    vertexPositions.push(...positions);
    vertexColors.push(...colors);
    vertexTextureCoordinates.push(...textureCoordinates);

    const numVertices = vertexPositions.length / 3;

    const vector = this.getAllVectors(vertexPositions);

    this.setProperties(
      numVertices,
      vertexPositions,
      vertexColors,
      vector.normals,
      vector.tangents,
      vector.bitangents,
      vertexTextureCoordinates
    );
  }

  private setProperties(
    numVertices: number,
    geometry: number[],
    color: number[],
    normal: number[],
    tangent: number[],
    bitangent: number[],
    textureCoord: number[]
  ) {
    this._numVertices = numVertices;
    this._position = geometry;
    this._color = color;
    this._normal = normal;
    this._tangent = tangent;
    this._bitangent = bitangent;
    this._textureCoord = textureCoord;

    // TODO: Texture
    const imageTexture = TextureGL.image(this._contextGL.gl);
    const environmentTexture = TextureGL.reflection(this._contextGL.gl);
    const bumpTexture = TextureGL.bump(this._contextGL.gl);

    this._textures = [imageTexture, environmentTexture, bumpTexture];
  }

  private getAllVectors(vertexPositions: number[]) {
    const n = vertexPositions.length;
    const vertexNormals: Vector3[] = [];
    const vertexTangents: Vector3[] = [];
    const vertexBitangents: Vector3[] = [];

    for (let i = 0; i < n; i += 18) {
      const p1 = new Vector3(
        vertexPositions[i],
        vertexPositions[i + 1],
        vertexPositions[i + 2]
      );
      const p2 = new Vector3(
        vertexPositions[i + 3],
        vertexPositions[i + 4],
        vertexPositions[i + 5]
      );
      const p3 = new Vector3(
        vertexPositions[i + 6],
        vertexPositions[i + 7],
        vertexPositions[i + 8]
      );

      const vec1 = Vector3.subtract(p2, p1);
      const vec2 = Vector3.subtract(p3, p1);
      const normalDirection = Vector3.cross(vec1, vec2);

      const vecNormal = normalDirection.normalize();
      const vecTangent = vec1.normalize();
      const vecBitangent = vec2.normalize();

      for (let j = 0; j < 6; j++) {
        vertexNormals.push(vecNormal);
        vertexTangents.push(vecTangent);
        vertexBitangents.push(vecBitangent);
      }
    }
    return {
      normals: vertexNormals.map((x) => x.toArray()).flat(),
      tangents: vertexTangents.map((x) => x.toArray()).flat(),
      bitangents: vertexBitangents.map((x) => x.toArray()).flat(),
    };
  }
}
