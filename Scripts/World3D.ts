import {Object3D} from "./Object3D";
import {Camera3D} from "./Camera3D";
import {TransformMatrix3D} from "./Math/TransformMatrix3D";

export class World3D{
    objects: Object3D[];
    coordinateMatrix: TransformMatrix3D;
    camera: Camera3D;
    constructor() {
        this.objects = [];
    }
    addObject(object: Object3D) {
        this.objects.push(object);
        object.setWorld(this);
    }
    removeObject(object: Object3D) {
        object.setWorld(null);
        this.objects = this.objects.filter(o => o != object);
    }
    render() {
        for (let object of this.objects) {
            object.renderTo(this.camera);
        }
    }
}