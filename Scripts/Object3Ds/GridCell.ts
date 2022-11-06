import {Plane3D} from "./Plane3D";
import {Camera3D} from "./Camera3D";
import {mainCtx} from "../Consts";
import {vec2, vec3} from "gl-matrix";
import {drawLine3D} from "../Drawer";
import {Point2D} from "../point";

export class GridCell extends Plane3D {

    _visited: boolean = false;

    get pos(): Point2D {
        return new Point2D(this.x, this.y);
    }

    get row(): number {
        return this.y;
    }
    get col(): number {
        return this.x;
    }

    _hasWall: boolean[] = [true, true, true, true];

    x: number;
    y: number;

    get right(): boolean {
        return !this._hasWall[0];
    }

    set right(value: boolean) {
        this._hasWall[0] = value;
    }

    get top(): boolean {
        return this._hasWall[1];
    }

    set top(value: boolean) {
        this._hasWall[1] = value;
    }

    get left(): boolean {
        return this._hasWall[2];
    }

    set left(value: boolean) {
        this._hasWall[2] = value;
    }

    get bottom(): boolean {
        return this._hasWall[3];
    }

    set bottom(value: boolean) {
        this._hasWall[3] = value;
    }

    set visited(value: boolean) {
        this._visited = value;
        if (value) {
            this.fillColor = "rgba(100, 200, 0,1)";
        } else {
            this.fillColor = "rgba(255, 255, 255, 1)";
        }
    }

    set playerInCell(value: boolean) {
        if (value) {
            this.fillColor = "rgba(200, 100, 0,1)";
        } else {
            this.visited = this.visited;
        }
    }

    public static createFromXY(x: number, y: number) {
        let relaSize = 0.3;
        let pos = vec3.fromValues(x / 2 * relaSize, 0, y / 2*relaSize)
        let size = vec3.fromValues(relaSize, relaSize, relaSize);
        let re = new GridCell(
            vec3.fromValues(pos[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2]),
            vec3.fromValues(pos[0] + size[0], pos[1], pos[2] + size[2]),
            vec3.fromValues(pos[0], pos[1], pos[2] + size[2])
        );
        re.x = x;
        re.y = y;
        return re;
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
        if (this.top) {
            drawLine3D(this._points[3], this._points[0], this._currTransform);
        }
        if (this.left) {
            drawLine3D(this._points[0], this._points[1], this._currTransform);
        }
        if (this.bottom) {
            drawLine3D(this._points[2], this._points[3], this._currTransform);
        }
        if (this.right) {
            drawLine3D(this._points[1], this._points[2], this._currTransform);
        }

        mainCtx.strokeStyle = oldStroke;
        mainCtx.fillStyle = oldFill;
        mainCtx.lineWidth = oldLineWidth;
    }


}
