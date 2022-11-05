import {Point3D} from "./Math/Point3D";
import {Camera3D} from "./Camera3D";
import {World3D} from "./World3D";

export class Object3D{
    center: Point3D;
    world: World3D;
    constructor(center: Point3D) {
        this.center = center;
    }

    setWorld(world: World3D) {
        this.world = world;
    }

    renderTo(camera: Camera3D) {
    }
}