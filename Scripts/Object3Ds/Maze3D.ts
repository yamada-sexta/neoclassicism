import IVisible3D from "./IVisible3D";
import {Camera3D} from "./Camera3D";
import {World3D} from "./World3D";
import {Plane3D} from "./Plane3D";
import {vec3} from "gl-matrix";
import {MazeCell} from "./MazeCell";

export class Maze3D implements IVisible3D {
    _visible: boolean = true;
    _planes: MazeCell[];

    _width: number;
    _height: number;

    constructor(width: number, height: number) {
        this._planes = [];
        this._width = width;
        this._height = height;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this._planes.push(MazeCell.createFrom(vec3.fromValues(i/2, 0, j/2), vec3.fromValues(1, 0, 1)));
            }
        }

        this.getXY(3, 3).visited = true;
    }

    getXY(x: number, y: number): MazeCell {
        return this._planes[y * this._width + x];
    }



    generateMaze() {
        let stack = [];
        let current = this.getXY(0, 0);
        current.visited = true;
        stack.push(current);

        while (stack.length > 0) {
            let neighbors = this.getNeighbors(current);
            if (neighbors.length > 0) {
                let next = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.removeWall(current, next);
                next.visited = true;
                stack.push(next);
                current = next;
            } else {
                current = stack.pop();
            }
        }
    }




    render(camera: Camera3D): void {
        for (let plane of this._planes) {
            plane.render(camera);
        }
    }

    set rotation(value: number) {
        for (let plane of this._planes) {
            plane.rotation = value;
        }
    }

    setWorld(world: World3D) {
        for (let plane of this._planes) {
            plane.setWorld(world);
        }
    }

    get visible(): boolean {
        return this._visible;
    }

}
