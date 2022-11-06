import {mat4, vec3} from "gl-matrix";
import IVisible3D from "./IVisible3D";
import {drawLine3D} from "../Drawer";
import {World3D} from "./World3D";

export class Triangle3D implements IVisible3D {
    _visible: boolean = true;

    _world:World3D

    _transformMatrix: mat4 = mat4.create();

    points: vec3[] = [];

    get p1(): vec3 {
        return this.points[0];
    }

    get p2(): vec3 {
        return this.points[1];
    }

    get p3(): vec3 {
        return this.points[2];
    }

    set p1(value: vec3) {
        this.points[0] = value;
    }

    set p2(value: vec3) {
        this.points[1] = value;
    }

    set p3(value: vec3) {
        this.points[2] = value;
    }

    get center(): vec3 {
        return vec3.fromValues(
            (this.p1[0] + this.p2[0] + this.p3[0]) / 3,
            (this.p1[1] + this.p2[1] + this.p3[1]) / 3,
            (this.p1[2] + this.p2[2] + this.p3[2]) / 3
        );
    }

    constructor(p1: vec3, p2: vec3, p3: vec3) {
        this.points = [p1, p2, p3];
    }

    setWorld(world: World3D) {
        this._world = world;
    }

    transformTo(t: mat4): mat4 {
        let m = mat4.create();
        mat4.fromTranslation(m, this.center);
        mat4.multiply(m, t, m)
        this._transformMatrix = m;
        return m;
    }

    render(): void {
        if (!this.visible) return;

        for (let i = 0; i < 3; i++) {
            let p1 = this.points[i];
            let p2 = this.points[(i + 1) % 3];
            drawLine3D(p1, p2, this._transformMatrix);
        }

    }

    get visible(): boolean {
        return this._visible;
    }

    set visible(value: boolean) {
        this._visible = value;
    }

}
