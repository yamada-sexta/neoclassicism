export class IJMatrix {
    arr: number[][];
    get rowLength():number{
        return this.arr.length;
    }
    get colLength():number{
        return this.arr[0].length;
    }

    setFromIJMatrix(other: IJMatrix) {
        this.arr = other.arr;
        return this;
    }

    constructor(rows: number, cols: number) {
        this.arr = [];
        for (let i = 0; i < rows; i++) {
            this.arr.push([]);
            for (let j = 0; j < cols; j++) {
                this.arr[i].push(0);
            }
        }
    }



    /**
     * set the value of the matrix at row i and column j
     * @param i
     * @param j
     * @param value
     */
    setIJ(i: number, j: number, value: number) {
        this.arr[i][j] = value;
        return this;
    }

    scaleIJ(i:number,j:number,scale:number){
        this.arr[i][j] *= scale;
        return this;
    }
    addIJ(i: number, j: number, value: number) {
        this.arr[i][j] += value;
        return this;
    }

    /**
     * return the value of the matrix at row i and column j
     * @param i
     * @param j
     */
    getIJ(i: number, j: number):number {
        return this.arr[i][j];

    }

    /**
     * set the matrix from a 1D array
     * @param arr
     */
    set(arr: number[]) {
        if (arr.length != this.arr.length * this.arr[0].length) {
            throw new Error("array length does not match matrix size");
        }
        let i = 0;
        for (let row of this.arr) {
            for (let j = 0; j < row.length; j++) {
                row[j] = arr[i];
                i++;
            }
        }
        return this;
    }

    /**
     * set the matrix from a 2D array
     * @param arr
     */
    setFrom2DArray(arr: number[][]) {
        if (arr.length != this.rowLength || arr[0].length != this.colLength) {
            throw new Error("array length does not match matrix size");
        }
        this.arr = arr;
        return this;
    }
    setFromArrays(...arr:number[][]){
        if (arr.length != this.rowLength || arr[0].length != this.colLength) {
            throw new Error("array length does not match matrix size");
        }
        for (let i = 0; i < arr.length; i++) {
            this.arr[i] = arr[i];
        }
        return this;
    }

    multiply(other: IJMatrix) {
        let result = new IJMatrix(this.arr.length, other.arr[0].length);
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < other.arr[0].length; j++) {
                for (let k = 0; k < this.arr[0].length; k++) {
                    result.arr[i][j] += this.arr[i][k] * other.arr[k][j];
                }
            }
        }
        return result;
    }

    subtract(other: IJMatrix) {
        let result = new IJMatrix(this.arr.length, this.arr[0].length);
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[0].length; j++) {
                result.arr[i][j] = this.arr[i][j] - other.arr[i][j];
            }
        }
        return result;
    }

    add(other: IJMatrix) {
        let result = new IJMatrix(this.arr.length, this.arr[0].length);
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[0].length; j++) {
                result.arr[i][j] = this.arr[i][j] + other.arr[i][j];
            }
        }
        return result;
    }

    cross(other: IJMatrix) {
        let result = new IJMatrix(this.arr.length, this.arr[0].length);
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr[0].length; j++) {
                result.arr[i][j] = this.arr[i][j] * other.arr[i][j];
            }
        }
        return result;
    }

    normalize() {
        let result = new IJMatrix(this.rowLength, this.colLength);
        let sum = 0;
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.colLength; j++) {
                sum += this.arr[i][j] * this.arr[i][j];
            }
        }
        sum = Math.sqrt(sum);
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.colLength; j++) {
                result.arr[i][j] = this.arr[i][j] / sum;
            }
        }
        return result;
    }

    dot(other: IJMatrix) {
        let result = 0;
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.colLength; j++) {
                result += this.arr[i][j] * other.arr[i][j];
            }
        }
        return result;
    }

    toArray():number[]{
        let result:number[] = [];
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.colLength; j++) {
                result.push(this.arr[i][j]);
            }
        }
        return result;
    }


    toString():string{
        let result = "";
        for (let i = 0; i < this.rowLength; i++) {
            for (let j = 0; j < this.colLength; j++) {
                result += this.arr[i][j] + " ";
            }
            result += "\n";
        }
        return result;
    }
}
