export class SmoothNumber {
    _value: number;
    _velocity: number = 0;
    decay = 0.5;

    scale = 10;
    vScale = 10;
    get velocity(): number {
        return this._velocity / this.vScale;
    }
    set velocity(value: number) {
        this._velocity = value * this.vScale;
    }


    constructor(value: number, decay: number = 0.5, public needScale: boolean = true) {
        this.value = value;
        this.decay = decay;
    }

    moveTowards(target: number) {
        this.velocity += (target);
    }

    update() {
        this._value += this.velocity;
        this.velocity *= this.decay;
        if (Math.abs(this._velocity) < 0.000001) {
            this.velocity = 0;
        }
    }

    get value(): number {
        this.update();
        return this._value / this.scale;
    }

    set value(value: number) {
        this._value = value * this.scale;
    }
}
