import {World3D} from "./World3D";
import {Point3D} from "./Math/Point3D";

export class Camera3D{
    position: Point3D;
    constructor(position: Point3D) {
        this.position = position;
    }
    render(world: World3D) {
        world.objects.forEach(o => o.renderTo(this));
    }
}