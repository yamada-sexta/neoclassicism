export interface IMathObject{
    add(other: IMathObject): IMathObject;
    subtract(other: IMathObject): IMathObject;
    multiply(other: IMathObject): IMathObject;
    divide(other: IMathObject): IMathObject;
}
