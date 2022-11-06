import {clearCanvas, drawBackground, drawHermitCurve} from "./Drawer";
import {OrthographicProjection} from "./Object3Ds/OrthographicProjection";
import {mat4, vec2} from "gl-matrix";
import {Camera3D} from "./Object3Ds/Camera3D";
import {World3D} from "./Object3Ds/World3D";
import {TriangularPrism} from "./Object3Ds/TriangularPrism";
import {viewport} from "./Object3Ds/Viewport";
import {mat4ToString} from "./Debug";
import {
    curveSize,
    eyeX,
    eyeY,
    eyeZ,
    mainCtx,
    prismPos, scoreText, startBtn,
    targetX,
    targetY,
    targetZ,
    upX,
    upY,
    upZ,
    worldX,
    worldY
} from "./Consts";
import {Random} from "./Math/Random";
import IVisible3D from "./Object3Ds/IVisible3D";
import {Plane3D} from "./Object3Ds/Plane3D";
import {SmoothNumber} from "./SmoothNumber";
import {Grid3D} from "./Object3Ds/Grid3D";
import {PerspectiveProjection} from "./Object3Ds/PerspectiveProjection";
import Game from "./Game";
import {GameGrid} from "./GameGrid";
import {isGeneratorFunction} from "util/types";

let frame = 0;

let colorFrame = 0;

let wheelOffset = new SmoothNumber(0.002, 0.96);

let playingDeadAnimation = false;
let deadAnimation = 0;
let deadAnimationDuration = 60;

export function frameLog(...args: any[]) {
    if (frame % 120 == 1)
        console.log(...args);
}

let rows = 11;
let cols = 11;
let grid = new Grid3D(rows, cols);
let gameGrid = getGame()

function getGame() {
    let game = new GameGrid(rows, cols, grid);
    game.onGameEnd = onGameEnd;
    return game;
}

let isPlaying = false;

function startGame() {
    playingDeadAnimation = false;
    deadAnimation = 0;
    gameGrid = getGame();
}

export function frameUpdate() {

    frame++;
    colorFrame++;



    // console.log("frameUpdate");
    let background = `hsl(${(colorFrame / 10) % (360)}, 50%, 50%)`;
    if (playingDeadAnimation) {
        let saturation = 150 - Math.min(100, deadAnimation / deadAnimationDuration * 100);
        background = `hsl(${(0) % (360)}, ${saturation}%, 50%)`;
        deadAnimation++;
        if (deadAnimation > deadAnimationDuration) {
            playingDeadAnimation = false;
            deadAnimation = 0;
            colorFrame = 0;
        }
    }

    drawBackground(background);

    frameLog(grid.toString())


    // let projection = OrthographicProjection.create(wheelOffset.value);
    let projection = new PerspectiveProjection(wheelOffset.value, 1, 100, 10000000);
    let camera = new Camera3D();
    let world = new World3D();

    camera.setEye([eyeX.valueAsNumber, eyeY.valueAsNumber, eyeZ.valueAsNumber]);
    camera.setTarget([targetX.valueAsNumber, targetY.valueAsNumber, targetZ.valueAsNumber]);
    camera.setUp([upX.valueAsNumber, upY.valueAsNumber, upZ.valueAsNumber]);

    world.move(worldX.valueAsNumber, 0, worldY.valueAsNumber);
    world._scale = wheelOffset.value;

    let projectionTransform = projection.transformTo(viewport);
    let cameraTransform = camera.transformTo(projectionTransform);
    let worldTransform = world.transformTo(cameraTransform);

    let curveTransform = mat4.create();
    mat4.translate(curveTransform, curveTransform, [0, 0, 0]);
    mat4.scale(curveTransform, curveTransform, [1, 1, 1]);
    mat4.multiply(curveTransform, worldTransform, curveTransform);


    let random = Random.instance;
    random.setSeed(0);

    function randomVal() {
        return random.nextFloat() * 2 - 1;
    }

    let pos = prismPos.valueAsNumber / 100 * 2 - 1;

    function getRandPrism() {
        let ctlIndex = random.nextInt(4);
        if (ctlIndex == 0) {
            return TriangularPrism.createRegularPrism([pos, randomVal(), randomVal()], random.nextInt(3) + 1)
        }
        if (ctlIndex == 1) {
            return TriangularPrism.createRegularPrism([randomVal(), pos, randomVal()], random.nextInt(3) + 1)
        }
        if (ctlIndex == 2) {
            return TriangularPrism.createRegularPrism([randomVal(), randomVal(), pos], random.nextInt(3) + 1)
        }
        if (ctlIndex == 3) {
            return TriangularPrism.createRegularPrism([randomVal(), randomVal(), randomVal()], random.nextInt(3) + 1)
        }
    }

    let objects: IVisible3D[] = [
        getRandPrism(),
        getRandPrism(),
        getRandPrism(),
        getRandPrism(),
        grid

    ];
    if (isPlaying) {
        gameGrid.update();
    }

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        object.setWorld(world);
        object.rotation += frame / 100 + i;
        object.render(camera)
    }

    function drawRandomCurve() {
        mainCtx.strokeStyle = `hsla(${random.nextInt(255)}, 20%, 80% , 0.5)`;
        mainCtx.lineWidth = 0.01/ wheelOffset.value;
        let curve = [];
        for (let i = 0; i < 100; i++) {
            let size = curveSize.valueAsNumber;
            curve.push([randomVal() * size, randomVal()*size, randomVal()*size]);
        }
        drawHermitCurve(curve, curveTransform);
    }

    drawRandomCurve();
    drawRandomCurve();
    drawRandomCurve();


    mainCtx.lineWidth = 0.0003 / wheelOffset.value;

    frameLog(`projectionTransform: \n${mat4ToString(projectionTransform)}`);
    frameLog(`cameraTransform: \n${mat4ToString(cameraTransform)}`);
    frameLog(`worldTransform: \n${mat4ToString(worldTransform)}`);

}

export function onWheel(e: WheelEvent) {
    // console.log("onWheel");
    // console.log(e);

    wheelOffset.moveTowards(e.deltaY / 2000000);

}

export function onKeyDow(e: KeyboardEvent) {
    console.log("onKeyDown");
    console.log(e);

    if (e.key == "ArrowUp" || e.key == "w") {
        gameGrid.movePlayer(0, -1);
    }
    if (e.key == "ArrowDown" || e.key == "s") {
        gameGrid.movePlayer(0, 1);
    }
    if (e.key == "ArrowLeft" || e.key == "a") {
        gameGrid.movePlayer(1, 0);
    }
    if (e.key == "ArrowRight" || e.key == "d") {
        gameGrid.movePlayer(-1, 0);
    }
}

export function onGameEnd() {
    console.log("onGameEnd");
    scoreText.innerText = `Final Score: ${gameGrid.player.coins}`;
    playingDeadAnimation = true;
    // frame = 0;
    gameGrid = getGame();
    isPlaying = false;


    startBtn.style.display = "block";
    startBtn.innerText = "Restart";

    for (let i =0;i<rows;i++) {
        for (let j =0;j<cols;j++) {
            grid.setPixel(i, j, "white");
        }
    }
}

export function onDrag(event: PointerEvent, lastPos: vec2, pos: vec2) {
    // console.log("onDrag");
    // console.log(lastPos);
    // console.log(pos);

    // console.log(event.buttons);

    if (event.buttons === 4) {
        eyeZ.valueAsNumber += (pos[0] - lastPos[0]);
        eyeX.valueAsNumber += (pos[1] - lastPos[1]);
    }
    if (event.buttons  === 2) {
        targetZ.valueAsNumber -= (pos[0] - lastPos[0]) / 2;
        targetX.valueAsNumber += (pos[1] - lastPos[1]) / 2;
    }
    if (event.buttons  === 1) {
        worldY.valueAsNumber -= (pos[0] - lastPos[0]) /5;
        worldX.valueAsNumber += (pos[1] - lastPos[1]) /5;
    }


}
export function onStart(){
    console.log("onStart");
    scoreText.style.display = "block";
    gameGrid = getGame();
    isPlaying = true;
}
