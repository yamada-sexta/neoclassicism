import {mat4} from "gl-matrix";

export class PerspectiveProjection {
    constructor(public fov: number, public aspect: number, public near: number, public far: number) {
    }

    get transformMatrix(): mat4 {
        let m = mat4.create();
        mat4.perspective(m, this.fov, this.aspect, this.near, this.far);
        return m;
    }

    transformTo(t: mat4): mat4 {
        let m = this.transformMatrix;
        mat4.multiply(m, t, m);
        return m;
    }
}
