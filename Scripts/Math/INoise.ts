export interface INoiseMap {
    getNoiseMap(): number[][];
    generateNoiseMap(max:number, min:number): void;
}