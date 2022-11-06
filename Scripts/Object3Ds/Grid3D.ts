import IVisible3D from "./IVisible3D";
import {Camera3D} from "./Camera3D";
import {World3D} from "./World3D";
import {Plane3D} from "./Plane3D";
import {vec3} from "gl-matrix";
import {GridCell} from "./GridCell";
import {random, Random} from "../Math/Random";
import {Point2D} from "../point";
import {IPixelGrid} from "../IPixelGrid";

let defaultEndX = 9;
let defaultEndY = 9;

let defaultStartX = 0;
let defaultStartY = 0;

export class Grid3D implements IVisible3D, IPixelGrid {
    _visible: boolean = true;


    render(camera: Camera3D): void {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j].render(camera);
            }
        }
    }

    set rotation(value: number) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j].rotation = value;
            }
        }

    }

    setWorld(world: World3D) {
        for (let i = 0; i < this.cells.length; i++) {
            for (let j = 0; j < this.cells[i].length; j++) {
                this.cells[i][j].setWorld(world);
            }
        }
    }

    get visible(): boolean {
        return this._visible;
    }

    row: number;
    col: number;
    cells: GridCell[][] = [];

    endCell: GridCell;
    startCell: GridCell;

    constructor(row: number, col: number) {
        this.row = row;
        this.col = col;

        for (let i = 0; i < row; i++) {
            this.cells.push([]);
            for (let j = 0; j < col; j++) {
                this.cells[i].push(GridCell.createFromXY(i, j));
            }
        }
        // this.endCell = this.cells[defaultEndY][defaultEndX];
        // this.startCell = this.cells[defaultStartY][defaultStartX];
        // this.init();
    }

    markVisited(pos: Point2D) {
        this.cells[pos.y][pos.x].visited = true;
    }

    // init() {
    //     this.generate();
    //
    //     this.unvisit();
    //     this.openDoors();
    // }

    unvisit() {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                this.cells[i][j].visited = false;
            }
        }
    }

    openDoors() {
        this.startCell.top = false;
        this.startCell.visited = true;

        this.endCell.bottom = false;
    }
    /**
     * get all the neighbors of a cell
     * @param cell target cell
     * @returns all the neighbors of a cell
     */
    getCellNeighbors(cell: GridCell) {
        let neighbors: GridCell[] = [];
        if (cell.row > 0) {
            neighbors.push(this.cells[cell.row - 1][cell.col]);
        }
        if (cell.row < this.row - 1) {
            neighbors.push(this.cells[cell.row + 1][cell.col]);
        }
        if (cell.col > 0) {
            neighbors.push(this.cells[cell.row][cell.col - 1]);
        }
        if (cell.col < this.col - 1) {
            neighbors.push(this.cells[cell.row][cell.col + 1]);
        }
        return neighbors;
    }
    /**
     * Remove the walls between two cells
     * @param a cell a
     * @param b cell b
     */
    removeWalls(a: GridCell, b: GridCell) {
        let x = a.col - b.col;
        if (x === 1) {
            a.left = false;
            b.right = false;
        } else if (x === -1) {
            a.right = false;
            b.left = false;
        }
        let y = a.row - b.row;
        if (y === 1) {
            a.top = false;
            b.bottom = false;
        } else if (y === -1) {
            a.bottom = false;
            b.top = false;
        }
    }

    setPixel(x: number, y: number, color: string): void {
        let cell = this.cells[y][x];
        cell.fillColor = color;
    }
}
