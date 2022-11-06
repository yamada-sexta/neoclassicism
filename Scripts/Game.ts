import { mat4 } from "gl-matrix";
import initAll from "./Init";

export default class Game{
    constructor(){
        console.log("Hello World");
    }

    start(){
        console.log("Game started");

        let mat = mat4.create();
        console.log(mat);

        initAll();
    }
}
