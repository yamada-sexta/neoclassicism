import {frameUpdate} from "./Events";

export function runFrameUpdate() {
    frameUpdate();
    window.requestAnimationFrame(runFrameUpdate);
}
export default function initAll() {
    runFrameUpdate();
}
