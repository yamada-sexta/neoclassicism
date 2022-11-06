import {mat4} from "gl-matrix";
import {width} from "../Consts";

export const viewport = mat4.create();
mat4.fromTranslation(viewport, [width / 2, width / 2, 0]);
mat4.scale(viewport, viewport, [1, -1, 1]);

