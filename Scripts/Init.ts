import {frameUpdate, onDrag, onKeyDow, onWheel} from "./Events";
import {mainCanvas, mainCtx} from "./Consts";

export function runFrameUpdate() {
    frameUpdate();
    window.requestAnimationFrame(runFrameUpdate);
}

let dragging = false;

let lastPos: [number, number] = null;

export function initEvents() {
    runFrameUpdate();
    mainCanvas.onwheel = (e) => {
        e.preventDefault();
        onWheel(e);
    }
    window.onkeydown = (e) => {
        e.preventDefault();
        onKeyDow(e);
    }
    mainCanvas.onpointerdown = (e) => {
        e.preventDefault();
        dragging = true;
        lastPos = [e.clientX, e.clientY];
    }
    mainCanvas.onpointerup = (e) => {
        e.preventDefault();
        dragging = false;
        lastPos = null;
    }
    mainCanvas.onpointermove = (e) => {
        e.preventDefault();
        if (dragging) {
            if (lastPos != null) {
                onDrag(e, lastPos, [e.clientX, e.clientY]);
            }
        }
        lastPos = [e.clientX, e.clientY];
    }
}
export default function initAll() {
    initEvents();
}
