import {mat4, vec3} from "gl-matrix";

export function mat4ToString(m: mat4, precision: number =2): string {
    let longest = 0;
    for (let i = 0; i < 16; i++) {
        longest = Math.max(longest, m[i].toFixed(precision).length);
    }
    let s = "";
    for (let i = 0; i < 16; i++) {
        s += m[i].toFixed(precision).padStart(longest, " ");
        if (i % 4 == 3) {
            s += "\n";
        } else {
            s += " ";
        }
    }
    return s;
}
export function vec3ToString(toLog: vec3, precision: number =2): string {
    let s = "[";
    for (let i = 0; i < 3; i++) {
        s += toLog[i].toFixed(precision) ;
        if (i < 2) {
            s += ", ";
        }
    }
    s += "]";
    return s;
}
