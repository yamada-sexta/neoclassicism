import {IJMatrix} from "./IJMatrix";
import {HomogeneousMatrix3D} from "./HomogeneousMatrix3D";
import Vector3 from "./Vector3";

/**
 * A 4x4 matrix used for 3D transformations.
 */
export class TransformMatrix3D extends IJMatrix {
    constructor() {
        super(4, 4);
    }

    static get identity() {
        let result = new TransformMatrix3D();
        result.setIJ(0, 0, 1);
        result.setIJ(1, 1, 1);
        result.setIJ(2, 2, 1);
        result.setIJ(3, 3, 1);
        return result;
    }

    static get zero() {
        return new TransformMatrix3D();
    }

    lookAt(eye: Vector3, target: Vector3, up: Vector3) {
        let zAxis = eye.subtract(target).normalize();
        let xAxis = up.cross(zAxis).normalize();
        let yAxis = zAxis.cross(xAxis).normalize();
        let newMatrix = new TransformMatrix3D();
        newMatrix.setFromArrays(xAxis.toArray(), yAxis.toArray(), zAxis.toArray());
        newMatrix.setIJ(0, 3, -xAxis.dot(eye));
        newMatrix.setIJ(1, 3, -yAxis.dot(eye));
        newMatrix.setIJ(2, 3, -zAxis.dot(eye));
        newMatrix.setIJ(3, 3, 1);
        return newMatrix;
    }

    rotate(rotation: number, axis: HomogeneousMatrix3D) {
        let result = new TransformMatrix3D();
        let cos = Math.cos(rotation);
        let sin = Math.sin(rotation);
        let t = 1 - cos;
        let x = axis.x;
        let y = axis.y;
        let z = axis.z;
        result.setIJ(0, 0, t * x * x + cos);
        result.setIJ(0, 1, t * x * y - z * sin);
        result.setIJ(0, 2, t * x * z + y * sin);
        result.setIJ(1, 0, t * x * y + z * sin);
        result.setIJ(1, 1, t * y * y + cos);
        result.setIJ(1, 2, t * y * z - x * sin);
        result.setIJ(2, 0, t * x * z - y * sin);
        result.setIJ(2, 1, t * y * z + x * sin);
        result.setIJ(2, 2, t * z * z + cos);
        result.setIJ(3, 3, 1);
        return result;
    }

    orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number) {
        let result = new TransformMatrix3D();
        result.setIJ(0, 0, 2 / (right - left));
        result.setIJ(1, 1, 2 / (top - bottom));
        result.setIJ(2, 2, -2 / (far - near));
        result.setIJ(0, 3, -(right + left) / (right - left));
        result.setIJ(1, 3, -(top + bottom) / (top - bottom));
        result.setIJ(2, 3, -(far + near) / (far - near));
        result.setIJ(3, 3, 1);
        return result;
    }

    multiply(other: IJMatrix): TransformMatrix3D {
        let result = super.multiply(other);
        return new TransformMatrix3D().setFromIJMatrix(result);
    }

    perspective(fov: number, aspect: number, near: number, far: number) {
        let result = new TransformMatrix3D();
        let f = 1 / Math.tan(fov / 2);
        result.setIJ(0, 0, f / aspect);
        result.setIJ(1, 1, f);
        result.setIJ(2, 2, (far + near) / (near - far));
        result.setIJ(2, 3, 2 * far * near / (near - far));
        result.setIJ(3, 2, -1);
        result.setIJ(3, 3, 0);
        return result;
    }

    scale(v:Vector3) {
        let result = new TransformMatrix3D();
        result.scaleIJ(0,1,v.x)


        return result;
    }
}
