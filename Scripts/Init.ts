import {frameUpdate, onKeyDow, onWheel} from "./Events";
import {mainCanvas} from "./Consts";

export function runFrameUpdate() {
    frameUpdate();
    window.requestAnimationFrame(runFrameUpdate);
}


export function initEvents() {
    runFrameUpdate();
    mainCanvas.onwheel = (e) => {
        onWheel(e);
    }
    window.onkeydown = (e) => {
        onKeyDow(e);
    }
}
export default function initAll() {
    initEvents();
}
