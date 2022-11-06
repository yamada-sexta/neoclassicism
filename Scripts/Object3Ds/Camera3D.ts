import {mat4, vec2, vec3} from "gl-matrix";

export class Camera3D {
    transformMatrix: mat4;
    eye: vec3;
    target: vec3;
    up: vec3;

    constructor() {
        this.transformMatrix = mat4.create()
        this.eye = vec3.fromValues(0, 0, 0)
        this.target = vec3.fromValues(0, 0, 0)
        this.up = vec3.fromValues(0, 1, 0)
        mat4.lookAt(this.transformMatrix, this.eye, this.target, this.up)
    }

    setEye(eye: vec3) {
        this.eye = eye
        this.updateTransformMatrix()
    }
    setTarget(target: vec3) {
        this.target = target
        this.updateTransformMatrix()
    }
    setUp(up: vec3) {
        this.up = up
        this.updateTransformMatrix()
    }

    updateTransformMatrix() {
        mat4.lookAt(this.transformMatrix, this.eye, this.target, this.up)
    }

    transformTo(t: mat4): mat4 {
        this.transformMatrix = mat4.create()
        mat4.lookAt(this.transformMatrix, this.eye, this.target, this.up)
        mat4.multiply(this.transformMatrix, t, this.transformMatrix);
        return this.transformMatrix;
    }

    inLimit(val: number) {
        return true
    }

    moveEye = (offset: vec2) => {
        this.eye[0] = this.inLimit(offset[0]) ? this.eye[0] + -offset[0] / 10 : this.eye[0];
        this.eye[1] = this.inLimit(offset[1]) ? this.eye[1] + -offset[1] / 10 : this.eye[1];
        mat4.lookAt(this.transformMatrix, this.eye, this.target, this.up);
    }

    get direction(): vec3 {
        let raw = vec3.create()
        vec3.sub(raw, this.target, this.eye)
        return vec3.normalize(raw, raw)
    }

    get position(): vec3 {
        return this.eye
    }

}
