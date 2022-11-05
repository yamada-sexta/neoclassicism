export class CanvasManager {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.initCanvas();
    }

    initCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, 100, 100);
    }

    drawPixelArray(array: number[][]) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                this.ctx.fillStyle = "rgb(" + array[i][j] + "," + array[i][j] + "," + array[i][j] + ")";
                this.ctx.fillRect(i, j, 1, 1);
            }
        }
    }
}