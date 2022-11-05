import {Point3D} from "./Math/Point3D";
import {Object3D} from "./Object3D";

export class Triangle3D extends Object3D {
    p1: Point3D;
    p2: Point3D;
    p3: Point3D;
    constructor(p1: Point3D, p2: Point3D, p3: Point3D) {
        super(p1);
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    color: string;
}