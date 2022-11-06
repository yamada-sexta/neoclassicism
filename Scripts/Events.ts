import {clearCanvas, drawBackground} from "./Drawer";
import {OrthographicProjection} from "./Object3Ds/OrthographicProjection";
import {mat4} from "gl-matrix";
import {Camera3D} from "./Object3Ds/Camera3D";
import {World3D} from "./Object3Ds/World3D";
import {TriangularPrism} from "./Object3Ds/TriangularPrism";
import {viewport} from "./Object3Ds/Viewport";
import {mat4ToString} from "./Debug";
import {slider, slider2} from "./Consts";
import {Random} from "./Math/Random";
import IVisible3D from "./Object3Ds/IVisible3D";
import {Plane3D} from "./Object3Ds/Plane3D";
import {Maze3D} from "./Object3Ds/Maze3D";

let frame = 0;

let wheelOffset = 100;

function log(...args: any[]) {
    if (frame % 120 == 0)
        console.log(...args);
}

export function frameUpdate() {

    frame++;

    // console.log("frameUpdate");
    let background = `hsl(${(frame / 5) % (360)}, 20%, 50%)`;
    drawBackground(background);


    let projection = OrthographicProjection.create(wheelOffset);
    let camera = new Camera3D();
    let world = new World3D();

    let slider2Val = slider2.valueAsNumber;
    log("slider2Val", slider2Val);

    camera.setEye([30, slider2Val, 50]);

    let projectionTransform = projection.transformTo(viewport);
    let cameraTransform = camera.transformTo(projectionTransform);
    let worldTransform = world.transformTo(cameraTransform);

    let random = Random.instance;
    random.setSeed(0);

    function randomVal() {
        return random.nextFloat() * 2 - 1;
    }

    let pos = slider.valueAsNumber / 100 * 2 - 1;

    let objects: IVisible3D[] = [
        TriangularPrism.createRegularPrism([pos, randomVal(), randomVal()], random.nextInt(3) + 1),
        TriangularPrism.createRegularPrism([pos, pos, randomVal()], random.nextInt(3) + 1),
        TriangularPrism.createRegularPrism([pos, randomVal(), pos], random.nextInt(3) + 1),
        TriangularPrism.createRegularPrism([randomVal(), randomVal(), pos], random.nextInt(3) + 1),
        TriangularPrism.createRegularPrism([pos, randomVal(), randomVal()], random.nextInt(3) + 1),
        Plane3D.createFrom([0, 0, 0], [1, 0, 1]),
        Plane3D.createFrom([0.5, 0, 0], [1, 0, 1]),
        Plane3D.createFrom([-0.5,0, 0], [1, 0, 1]),
        Plane3D.createFrom([0, 0, 0.5], [1, 0, 1]),
        new Maze3D(10,10)
    ];

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];
        object.setWorld(world);
        object.rotation += frame / 100 + i;
        object.render(camera)
    }

    log(`projectionTransform: \n${mat4ToString(projectionTransform)}`);
    log(`cameraTransform: \n${mat4ToString(cameraTransform)}`);
    log(`worldTransform: \n${mat4ToString(worldTransform)}`);

}

export function onWheel(e: WheelEvent) {
    console.log("onWheel");
    console.log(e);

    wheelOffset += e.deltaY / 10;

}
