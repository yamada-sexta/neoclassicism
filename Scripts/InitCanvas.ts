import {frameUpdateCaller, keyDown} from "./Events";

export function initEvents() {

    document.addEventListener('keydown', keyDown);
    frameUpdateCaller();


}
