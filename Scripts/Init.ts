import {frameUpdate, onWheel} from "./Events";
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
}
export default function initAll() {
    initEvents();
}
