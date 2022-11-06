export const mainCanvas = document.getElementById("mainCanvas") as HTMLCanvasElement;
export const mainCtx = mainCanvas.getContext("2d") as CanvasRenderingContext2D;

export let height = 500;
export let width = 500;

mainCanvas.height = height;
mainCanvas.width = width;

export let aspectRatio = height / width;

export let scoreText = createText("score", "Score: 0");

export let slider1 = createSliders("1");
// export let slider2 = createSliders("2", 0, -100, 10000);
export let targetX = createSliders("targetX", 0);
export let targetY = createSliders("targetY", 0);
export let targetZ = createSliders("targetZ");
export let eyeX = createSliders("eyeX", 180);
export let eyeY = createSliders("eyeY", 128);
export let eyeZ = createSliders("eyeZ", -124);
export let upX = createSliders("upX", 0);
export let upY = createSliders("upY", 1);
export let upZ = createSliders("upZ", 0);
export let worldX = createSliders("worldX")
export let worldY = createSliders("worldY", -25);

function createSliders(id: string, defaultVal: number = 0, min: number = -200, max: number = 200) {
    let slider = document.createElement("input");
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


function createText(id: string, text: string) {
    let textDiv = document.createElement("div");
    textDiv.id = id;
    textDiv.innerText = text;
    document.body.appendChild(textDiv);
    return textDiv;
}
