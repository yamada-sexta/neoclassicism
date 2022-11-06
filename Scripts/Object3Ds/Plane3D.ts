import IVisible3D from "./IVisible3D";
import {Camera3D} from "./Camera3D";
import {mat4, vec3} from "gl-matrix";
import {World3D} from "./World3D";
import {getCenter} from "../Math/Math3D";
import {drawPlane3D} from "../Drawer";
import {mainCtx} from "../Consts";

export class Plane3D implements IVisible3D {
    _visible: boolean = true;
    _points: vec3[];
    _world: World3D;
    _rotation: number = 0;
    _axis: vec3 = vec3.fromValues(0, 0, 0);
    _scale: number = 1;

    _currTransform: mat4 = mat4.create();

    fillColor = "rgba(255, 255, 255, 1)";
    strokeColor = "black";

    get points(): vec3[] {
        return this._points;
    }

    constructor(p1: vec3, p2: vec3, p3: vec3, p4: vec3) {
        this._points = [p1, p2, p3, p4];
    }
    public static createFrom(pos:vec3, size:vec3){
        return new Plane3D(
            vec3.fromValues(pos[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2] + size[2]),
            vec3.fromValues(pos[0], pos[1], pos[2] + size[2])
        );
    }

    setWorld(world: World3D) {
        this._world = world;
    }

    get world(): World3D {
        return this._world;
    }

    get center(): vec3 {
        return getCenter(this.points);
    }

    get rotation(): number {
        return this._rotation;
    }
    set rotation(value: number) {
        this._rotation = value;
    }
    get rotationAxis(): vec3 {
        return this._axis;
    }

    get scale() {
        return this._scale;
    }

    render(camera: Camera3D): void {
        if (!this.visible) return;
        if (!this._world) {
            throw new Error(`World is not set for ${this.constructor.name}`);
        }
        mainCtx.fillStyle = this.fillColor;
        // mainCtx.strokeStyle = this.strokeColor;

        let m = mat4.create();
        mat4.fromTranslation(m, this.center);
        mat4.rotate(m, m, this.rotation, this.rotationAxis)
        mat4.scale(m, m, [this.scale, this.scale, this.scale]);
        let t = this._world.transformMatrix;
        mat4.multiply(m, t, m);

        this._currTransform = m;

        let ps = this.points;
        drawPlane3D(ps[0], ps[1], ps[2], ps[3], m);

    }

    get visible(): boolean {
        return this._visible;
    }
}
