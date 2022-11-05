export const canvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

export const width = canvas.width;
export const height = canvas.height;

export const centerX = width / 2;
export const centerY = height / 2;

export const aspectRatio = width / height;