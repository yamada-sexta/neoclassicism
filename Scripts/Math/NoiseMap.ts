import {Random} from "./Random";
import {INoiseMap} from "./INoise";

export class NoiseMap implements INoiseMap{
    array: number[][] = [];
    isFloat: boolean ;


    constructor(width: number, height: number, max:number = 256, min:number = 0, isFloat: boolean = false) {
        for (let i = 0; i < width; i++) {
            this.array.push([]);
            for (let j = 0; j < height; j++) {
                this.array[i].push(Random.instance.next());
            }
        }
        this.isFloat = isFloat;
        this.generateNoiseMap(max, min);

    }


    toString(){
        let str = "";
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                str += this.array[i][j] + " ";
            }
            str += "\n";
        }
        return str;
    }

    generateNoiseMap(max:number, min:number): void {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                this.array[i][j] = this.array[i][j] * (max - min) + min;

                if (!this.isFloat) {
                    this.array[i][j] = Math.floor(this.array[i][j]);
                }
            }
        }
    }

    getNoiseMap(): number[][] {
        return this.array;
    }
}