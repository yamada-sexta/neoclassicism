import {Camera3D} from "./Camera3D";
import {World3D} from "./World3D";

export default interface IVisible3D {
    get visible(): boolean;
    set visible(value: boolean);
    render(camera:Camera3D): void;
    setWorld(world: World3D);
    set rotation(value: number);
}
