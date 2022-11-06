export const mainCanvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
export const mainCtx = mainCanvas.getContext("2d") as CanvasRenderingContext2D;

export let height = 500;
export let width = 500;

mainCanvas.height = height;
mainCanvas.width = width;

export let aspectRatio = height / width;

export let slider = document.getElementById("slider") as HTMLInputElement;
export let slider2 = document.getElementById("slider2") as HTMLInputElement;
