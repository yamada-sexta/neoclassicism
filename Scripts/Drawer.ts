import {ctx} from "./Consts";

export function drawPixelArray(array: number[][]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            ctx.fillStyle = "rgb(" + array[i][j] + "," + array[i][j] + "," + array[i][j] + ")";
            ctx.fillRect(i, j, 1, 1);
        }
    }
}