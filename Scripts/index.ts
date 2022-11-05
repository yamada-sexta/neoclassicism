import {CanvasManager} from "./CanvasManager";
import {canvas} from "./Consts";
import {NoiseMap} from "./Math/NoiseMap";
import {frameUpdateCaller, keyDown} from "./Events";

console.log("Loading index.ts");

function main() {
    let canvasManager = new CanvasManager(canvas);

    document.addEventListener('keydown', keyDown);
    frameUpdateCaller();


    canvasManager.draw();
let noise = new NoiseMap(100, 100, 255, 0);
    console.log(noise.toString());

    canvasManager.drawPixelArray(noise.getNoiseMap());

}

main();

console.log("Loaded index.ts");