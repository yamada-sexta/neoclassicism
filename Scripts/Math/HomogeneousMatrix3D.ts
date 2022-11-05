import {IJMatrix} from "./IJMatrix";

export class HomogeneousMatrix3D extends IJMatrix {
    constructor(x: number, y: number, z: number) {
        super(4, 1);
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = 1;
    }

    normalizeW(): HomogeneousMatrix3D {
        this.x /= this.w;
        this.y /= this.w;
        this.z /= this.w;
        this.w = 1;
        return this;
    }

    get x(): number {
        return this.getIJ(0, 0);
    }

    set x(x: number) {
        this.setIJ(0, 0, x);
    }

    get y(): number {
        return this.getIJ(1, 0);
    }

    set y(y: number) {
        this.setIJ(1, 0, y);
    }

    get z(): number {
        return this.getIJ(2, 0);
    }

    set z(z: number) {
        this.setIJ(2, 0, z);
    }

    get w(): number {
        return this.getIJ(3, 0);
    }

    set w(w: number) {
        this.setIJ(3, 0, w);
    }
}