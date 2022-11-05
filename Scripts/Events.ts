import {drawPixelArray} from "./Drawer";
import {NoiseMap} from "./Math/NoiseMap";

window.requestAnimationFrame(frameUpdateCaller);
export function frameUpdateCaller(){
    frameUpdate();
    window.requestAnimationFrame(frameUpdateCaller);
}

export function frameUpdate() {
    console.log("Frame update called");

    drawPixelArray(new NoiseMap(100, 100).getNoiseMap());
}

export function keyDown(event: KeyboardEvent) {
    console.log(event.key);
}

