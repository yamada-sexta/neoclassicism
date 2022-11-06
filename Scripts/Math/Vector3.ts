export default class Vector3 {
    constructor(public x: number = 0, public y: number = 0, public z: number = 0) {
    }
    setX(x: number):this {
        this.x = x;
        return this;
    }
    setY(y: number):this {
        this.y = y;
        return this;
    }
    setZ(z: number):this {
        this.z = z;
        return this;
    }

    subtract(vector: Vector3): Vector3 {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }
    cross(vector: Vector3): Vector3 {
        let x = this.y * vector.z - this.z * vector.y;
        let y = this.z * vector.x - this.x * vector.z;
        let z = this.x * vector.y - this.y * vector.x;
        return new Vector3(x, y, z);
    }

    dot(vector: Vector3) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    normalize() {
        let length = this.length;
        return new Vector3(this.x / length, this.y / length, this.z / length);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }


    static get zero() {
        return new Vector3(0, 0, 0);
    }

    static fromArray(array: number[]) {
        return new Vector3(array[0], array[1], array[2]);
    }

    toArray() {
        return [this.x, this.y, this.z];
    }
}
