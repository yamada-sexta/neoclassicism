export class Point2D {
    arr: number[]
    constructor(x: number, y: number) {
        this.arr = [x, y];
    }
    get x() {
        return this.arr[0];
    }
    set x(value: number) {
        this.arr[0] = value;
    }
    get y() {
        return this.arr[1];
    }
    set y(value: number) {
        this.arr[1] = value;
    }
}