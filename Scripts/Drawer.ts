import {mat4, vec3} from "gl-matrix";
import {mainCanvas, mainCtx} from "./Consts";

export function clearCanvas() {
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}

export function renderAxes(color: string, transformMatrix: mat4) {

    mainCtx.strokeStyle = color;
    mainCtx.lineWidth = 1;
    mainCtx.beginPath();
    // Axes
    moveToTx([1.2, 0, 0], transformMatrix, mainCtx);
    lineToTx([-1.2, 0, 0], transformMatrix, mainCtx);
    moveToTx([0, 0, 0], transformMatrix, mainCtx);
    lineToTx([0, 1.2, 0], transformMatrix, mainCtx);
    lineToTx([0, -1.2, 0], transformMatrix, mainCtx);
    moveToTx([0, 0, 0], transformMatrix, mainCtx);
    lineToTx([0, 0, 1.2], transformMatrix, mainCtx);
    lineToTx([0, 0, -1.2], transformMatrix, mainCtx);
    // Arrowheads
    moveToTx([1.1, .05, 0], transformMatrix, mainCtx);
    lineToTx([1.2, 0, 0], transformMatrix, mainCtx);
    lineToTx([1.1, -.05, 0], transformMatrix, mainCtx);
    moveToTx([.05, 1.1, 0], transformMatrix, mainCtx);
    lineToTx([0, 1.2, 0], transformMatrix, mainCtx);
    lineToTx([-.05, 1.1, 0], transformMatrix, mainCtx);
    moveToTx([.05, 0, 1.1], transformMatrix, mainCtx);
    lineToTx([0, 0, 1.2], transformMatrix, mainCtx);
    lineToTx([-.05, 0, 1.1], transformMatrix, mainCtx);
    // X-label
    moveToTx([1.3, -.05, 0], transformMatrix, mainCtx);
    lineToTx([1.4, .05, 0], transformMatrix, mainCtx);
    moveToTx([1.3, .05, 0], transformMatrix, mainCtx);
    lineToTx([1.4, -.05, 0], transformMatrix, mainCtx);
    // Y-label
    moveToTx([-.05, 1.4, 0], transformMatrix, mainCtx);
    lineToTx([0, 1.35, 0], transformMatrix, mainCtx);
    lineToTx([.05, 1.4, 0], transformMatrix, mainCtx);
    moveToTx([0, 1.35, 0], transformMatrix, mainCtx);
    lineToTx([0, 1.28, 0], transformMatrix, mainCtx);
    // Z-label
    moveToTx([-.05, 0, 1.3], transformMatrix, mainCtx);
    lineToTx([.05, 0, 1.3], transformMatrix, mainCtx);
    lineToTx([-.05, 0, 1.4], transformMatrix, mainCtx);
    lineToTx([.05, 0, 1.4], transformMatrix, mainCtx);

    mainCtx.stroke();
}

export function lineToTx(loc: vec3, Tx: mat4, context: CanvasRenderingContext2D) {
    // console.log("lineToTx");
    let res = vec3.create();
    vec3.transformMat4(res, loc, Tx);
    context.lineTo(res[0], res[1]);
}
export function moveToTx(loc: vec3, Tx: mat4, context: CanvasRenderingContext2D) {
    let res = vec3.create();
    vec3.transformMat4(res, loc, Tx);
    context.moveTo(res[0], res[1]);
}

export function drawLine3D(start: vec3, end: vec3, transformMatrix: mat4) {
    mainCtx.beginPath();
    moveToTx(start, transformMatrix, mainCtx);
    lineToTx(end, transformMatrix, mainCtx);
    mainCtx.stroke();
}

export function drawTriangle3D(p1: vec3, p2: vec3, p3: vec3, transformMatrix: mat4) {
    mainCtx.beginPath();
    moveToTx(p1, transformMatrix, mainCtx);
    lineToTx(p2, transformMatrix, mainCtx);
    lineToTx(p3, transformMatrix, mainCtx);
    lineToTx(p1, transformMatrix, mainCtx);
    mainCtx.fill();
    mainCtx.stroke();
}

export function drawBackground(color: string = "white") {
    mainCtx.fillStyle = color;
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
}
