import {CanvasManager} from "./CanvasManager";
import {canvas} from "./vars";

console.log("Loading index.ts");

function main() {
    let canvasManager = new CanvasManager(canvas);
    canvasManager.draw();
}

main();

console.log("Loaded index.ts");