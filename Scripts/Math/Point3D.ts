import {HomogeneousMatrix3D} from "./HomogeneousMatrix3D";

export class Point3D{
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    toHomogeneousMatrix(): HomogeneousMatrix3D {
        return new HomogeneousMatrix3D(this.x, this.y, this.z);
    }
    toArray(): number[] {
        return [this.x, this.y, this.z];
    }

    static fromHomogeneousMatrix(h: HomogeneousMatrix3D): Point3D {
        return new Point3D(h.getIJ(0,0), h.getIJ(1,0), h.getIJ(2,0));
    }
    clone(): Point3D {
        return new Point3D(this.x, this.y, this.z);
    }
}
