import {mat4} from "gl-matrix";

export class OrthographicProjection {

    constructor(public left: number, public right: number,
                public bottom: number, public top: number,
                public near: number, public far: number) {
    }

    static create(size: number, near: number = -1, far: number = 1): OrthographicProjection {
        return new OrthographicProjection(-size, size, -size, size, near, far);
    }

    get transformMatrix(): mat4 {
        let m = mat4.create();
        mat4.ortho(m, this.left, this.right, this.bottom, this.top, this.near, this.far);
        return m;
    }

    transformTo(t: mat4): mat4 {
        let m = this.transformMatrix;
        mat4.multiply(m, t, m);
        return m;
    }
}
