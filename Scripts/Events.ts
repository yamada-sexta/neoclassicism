import {clearCanvas, drawBackground} from "./Drawer";
import {OrthographicProjection} from "./Object3Ds/OrthographicProjection";
import {mat4} from "gl-matrix";
import {Camera3D} from "./Object3Ds/Camera3D";
import {World3D} from "./Object3Ds/World3D";
import {TriangularPrism} from "./Object3Ds/TriangularPrism";
import {viewport} from "./Object3Ds/Viewport";
import {mat4ToString} from "./Debug";
import {slider} from "./Consts";

let frame = 0;

export function frameUpdate() {
    frame++;

    // console.log("frameUpdate");
    drawBackground("gray");


    let projection = OrthographicProjection.create(100)
    let camera = new Camera3D();
    let world = new World3D();

    let LOG = (frame % 120 == 1);

    let pos = slider.valueAsNumber / 100;
    let prism = TriangularPrism.createRegularPrism([pos, 0, 0], 1);
    prism.rotation += frame / 100;
    prism.setWorld(world);
    let projectionTransform = projection.transformTo(viewport);
    let cameraTransform = camera.transformTo(projectionTransform);
    let worldTransform = world.transformTo(cameraTransform);

    if (LOG) console.log(`projectionTransform: \n${mat4ToString(projectionTransform)}`);
    if (LOG) console.log(`cameraTransform: \n${mat4ToString(cameraTransform)}`);
    if (LOG) console.log(`worldTransform: \n${mat4ToString(worldTransform)}`);

    prism.render(camera)
}
