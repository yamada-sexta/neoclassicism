import {Plane3D} from "./Plane3D";
import {Camera3D} from "./Camera3D";
import {mainCtx} from "../Consts";
import {vec3} from "gl-matrix";
import {drawLine3D} from "../Drawer";

export class MazeCell extends Plane3D {

    _visited: boolean = false;

    _opens: boolean[] = [true, true, false, true];

    set visited(value: boolean) {
        this._visited = value;
        if (value) {
            this.fillColor = "rgba(100, 200, 0,1)";
        } else {
            this.fillColor = "rgba(255, 255, 255, 1)";
        }
    }

    public static createFrom(pos: vec3, size: vec3) {
        return new MazeCell(
            vec3.fromValues(pos[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2] + size[2]),
            vec3.fromValues(pos[0], pos[1], pos[2] + size[2])
        );
    }

    get visited(): boolean {
        return this._visited;
    }

    render(camera: Camera3D) {
        super.render(camera);
        let oldStroke = mainCtx.strokeStyle;
        let oldFill = mainCtx.fillStyle;
        let oldLineWidth = mainCtx.lineWidth;
        mainCtx.strokeStyle = "black";
        mainCtx.lineWidth = 2;
        if (!this._opens[0]) {
            drawLine3D(this._points[0], this._points[1], this._currTransform);
        }
        if (!this._opens[1]) {
            drawLine3D(this._points[1], this._points[2], this._currTransform);
        }
        if (!this._opens[2]) {
            drawLine3D(this._points[2], this._points[3], this._currTransform);
        }
        if (!this._opens[3]) {
            drawLine3D(this._points[3], this._points[0], this._currTransform);
        }

        mainCtx.strokeStyle = oldStroke;
        mainCtx.fillStyle = oldFill;
        mainCtx.lineWidth = oldLineWidth;
    }
}
