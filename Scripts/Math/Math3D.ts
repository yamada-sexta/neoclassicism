import { vec3 } from "gl-matrix";

/**
 * Find the normal vector of a triangle.
 * @param p1
 * @param p2
 * @param p3
 */
export function getNormal(p1: vec3, p2: vec3, p3: vec3): vec3 {
    let v1 = vec3.create();
    let v2 = vec3.create();
    let normal = vec3.create();
    vec3.subtract(v1, p2, p1);
    vec3.subtract(v2, p3, p1);
    vec3.cross(normal, v1, v2);
    vec3.normalize(normal, normal);
    return normal;
}
