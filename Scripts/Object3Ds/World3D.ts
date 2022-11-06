import {mat4, vec3} from "gl-matrix";

export class World3D {
    _scale: number;

    _transformMatrix: mat4 = mat4.create();

    constructor(scale: number = 10000) {
        this._scale = scale;
        let m = mat4.create();
        mat4.scale(m, m, [scale, scale, scale]);
        this._transformMatrix = m;
    }
    get transformMatrix(): mat4 {
        return this._transformMatrix;
    }
    transformTo(t: mat4): mat4 {
        let m = this.transformMatrix;
        mat4.multiply(m, t, m);
        this._transformMatrix = m;
        return m;
    }
    transformPoint(p: vec3): vec3 {
        let m = this.transformMatrix;
        let v = vec3.create();
        vec3.transformMat4(v, p, m);
        return v;
    }
}
