

import {mat4, vec3} from "gl-matrix";
import {drawLine3D, drawTriangle3D, lineToTx, moveToTx} from "../Drawer";
import {mainCtx} from "../Consts";
import IVisible3D from "./IVisible3D";
import {Camera3D} from "./Camera3D";
import {World3D} from "./World3D";
import {getCenter, getNormal} from "../Math/Math3D";
import {mat4ToString, vec3ToString} from "../Debug";
import {frameLog} from "../Events";

export class TriangularPrism implements IVisible3D {
    // transformMatrix: mat4 = mat4.create();

    points: vec3[] = [];

    scale: number = 1;

    _world: World3D;

    rotation: number = 0;
    rotationAxis: vec3 = vec3.fromValues(0, 1, 0);


    constructor(p1: vec3, p2: vec3, p3: vec3, p4: vec3) {
        this.points = [p1, p2, p3, p4];
    }

    get p1(): vec3 {
        return this.points[0];
    }

    get p2(): vec3 {
        return this.points[1];
    }

    get p3(): vec3 {
        return this.points[2];
    }

    get p4(): vec3 {
        return this.points[3];
    }

    get center(): vec3 {
        return vec3.fromValues(
            (this.p1[0] + this.p2[0] + this.p3[0] + this.p4[0]) / 4,
            (this.p1[1] + this.p2[1] + this.p3[1] + this.p4[1]) / 4,
            (this.p1[2] + this.p2[2] + this.p3[2] + this.p4[2]) / 4
        );
    }

    public static createRegularPrism(top: vec3, size: number): TriangularPrism {
        let p1 = top;
        let sin = size * Math.sqrt(3) / 2;
        let cos = size / 2;

        let p2 = vec3.fromValues(p1[0] + sin, p1[1], p1[2] + sin);
        let p3 = vec3.fromValues(p1[0] - cos, p1[1] + sin, p1[2] + sin);
        let p4 = vec3.fromValues(p1[0] - cos, p1[1] - sin, p1[2] + sin);

        return new TriangularPrism(p1, p2, p3, p4);
    }

    setWorld(world: World3D): this {
        this._world = world;
        return this;
    }

    offset(x: number = 0, y: number = 0, z: number = 0): this {
        for (let point of this.points) {
            vec3.add(point, point, [x, y, z]);
        }
        return this;
    }

    render(camera: Camera3D) {
        mainCtx.strokeStyle = "transparent";
        if (!this.visible) return;
        if (!this._world) {
            throw new Error(`World is not set for ${this.constructor.name}`);
        }

        let p1 = this.points[0];
        let p2 = this.points[1];
        let p3 = this.points[2];
        let p4 = this.points[3];

        let m = mat4.create();
        mat4.fromTranslation(m, this.center);
        mat4.rotate(m, m, this.rotation, this.rotationAxis)
        mat4.scale(m, m, [this.scale, this.scale, this.scale]);
        let t = this._world.transformMatrix;
        mat4.multiply(m, t, m);
        let p1t = vec3.transformMat4(vec3.create(), p1, m);
        let p2t = vec3.transformMat4(vec3.create(), p2, m);
        let p3t = vec3.transformMat4(vec3.create(), p3, m);
        let p4t = vec3.transformMat4(vec3.create(), p4, m);

        let normal1 = getNormal(p1t, p2t, p3t);
        let normal2 = getNormal(p1t, p3t, p4t);
        let normal3 = getNormal(p1t, p4t, p2t);
        let normal4 = getNormal(p2t, p4t, p3t);
        let normals = [normal1, normal2, normal3, normal4];
        let triangles = [[p1, p2, p3], [p1, p3, p4], [p1, p4, p2], [p2, p4, p3]];


        let dots = [];
        for (let i = 0; i < normals.length; i++) {
            let dot = vec3.dot(normals[i], camera.direction);
            dots.push(dot);
        }

        frameLog(`dots: ${dots}`);

        let center1 = getCenter(triangles[0]);
        let center2 = getCenter(triangles[1]);
        let center3 = getCenter(triangles[2]);
        let center4 = getCenter(triangles[3]);
        let centers = [center1, center2, center3, center4];
        let distances = centers.map(center => vec3.distance(center, camera.position));

        function setColor(dotVal: number) {
            let color = 255 - Math.abs(dotVal)   *125;
            if (color < 0) color = 0;
            if (color > 255) color = 255;
            mainCtx.fillStyle = `rgb(${color}, ${color}, ${color})`;
        }

        let sorted = [];
        for (let i = 0; i < 4; i++) {
            sorted.push({
                index: i,
                dot: dots[i],
                distance: distances[i],
            });
        }
        sorted.sort((a: any, b: any) => {
            return -(b.distance - a.distance ) as number;
        });

        for (let i = 0; i < 4; i++) {
            setColor(sorted[i].dot);
            let currTriangle = triangles[sorted[i].index];
            drawTriangle3D(currTriangle[0], currTriangle[1], currTriangle[2], m);
        }
    }

    get visible(): boolean {
        return true;
    }
}
