import {onStart} from "./Events";

export const mainCanvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
export const mainCtx = mainCanvas.getContext("2d") as CanvasRenderingContext2D;

export let height = 500;
export let width = 500;

mainCanvas.height = height;
mainCanvas.width = width;

export let aspectRatio = height / width;

export let scoreText = createText("score", "Score: 0");
scoreText.style.display = "none";
export let startBtn = createButton("startBtn", "Start", () => {
    startBtn.style.display = "none";
    onStart();
});

export let descriptionText = createText(
    "description",`
    How to play:
    - Use the arrow keys/WASD to move the player(green pixel)
    - Collect as much coins (yellow pixel) as possible
    - Avoid danger zone! (red area)
Also try:
- Use left/right/middle key of the mouse ot drag the canvas or use sliders to change the camera.
`);

export let prismPos = createSliders("prismPos");
export let curveSize = createSliders("curveSize", 0.3, -2, 2, 0.001);
// export let slider2 = createSliders("2", 0, -100, 10000);
export let targetX = createSliders("targetX", 0);
export let targetY = createSliders("targetY", 0);
export let targetZ = createSliders("targetZ", 0);
export let eyeX = createSliders("eyeX", 68);
export let eyeY = createSliders("eyeY", 100);
export let eyeZ = createSliders("eyeZ", 0);
export let upX = createSliders("upX", 0);
export let upY = createSliders("upY", 1);
export let upZ = createSliders("upZ", 0);
export let worldX = createSliders("worldX", -19)
export let worldY = createSliders("worldY", -17);

function createSliders(id: string, defaultVal: number = 0, min: number = -200, max: number = 200, step: number = 0.01) {
    let slider = document.createElement("input");

    slider.step = step.toString();
    slider.type = "range";
    slider.min = min.toString();
    slider.max = max.toString();
    slider.value = defaultVal.toString();
    slider.id = id;
    slider.onchange = () => {
        console.log(`slider ${id} changed to ${slider.value}`);
    }
    let sliderLabel = document.createElement("label");
    sliderLabel.htmlFor = id;
    sliderLabel.innerText = id;
    let sliderDiv = document.createElement("div");
    sliderDiv.appendChild(sliderLabel);
    sliderDiv.appendChild(slider);
    document.body.appendChild(sliderDiv);
    return slider;
}

function createButton(id: string, text: string, callback: () => void) {
    let button = document.createElement("button");
    button.id = id;
    button.innerText = text;
    button.onclick = callback;
    document.body.appendChild(button);
    return button;
}


function createText(id: string, ...lines: string[]) {
    let textDiv = document.createElement("div");
    textDiv.id = id;
    for (let line of lines) {
        let text = document.createElement("p");
        text.innerText = line;
        textDiv.appendChild(text);
    }

    document.body.appendChild(textDiv);
    return textDiv;
}
