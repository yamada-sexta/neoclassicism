import {IPixelGrid} from "./IPixelGrid";
import {scoreText} from "./Consts";

export class GameGrid {
    _pixels: string[][] = [];
    pixelGrid: IPixelGrid;

    zones: DangerZone[] = [];
    coins: Coin[] = [];
    player: Player;

    updateCount = 0;

    turnNumber = 100;

    constructor(public rows: number, public cols: number, pixelGrid: IPixelGrid) {
        for (let y = 0; y < rows; y++) {
            this._pixels[y] = [];
            for (let x = 0; x < cols; x++) {
                this._pixels[y][x] = "white";
            }
        }
        this.player = new Player(Math.floor(cols / 2), Math.floor(rows / 2));
        this.pixelGrid = pixelGrid;
    }

    onGameEnd() {

    }

    movePlayer(x: number, y: number) {
        if (this.player.x + x >= 0 && this.player.x + x < this.cols && this.player.y + y >= 0 && this.player.y + y < this.rows) {
            this.player.x += x;
            this.player.y += y;
        }
    }

    clearPixels() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this._pixels[y][x] = "white";
            }
        }
    }

    updatePixels() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.pixelGrid.setPixel(x, y, this._pixels[y][x]);
            }
        }
    }

    drawChildren() {
        this.clearPixels();

        for (let i = 0; i < this.zones.length; i++) {
            this.drawZone(this.zones[i]);
        }
        for (let i = 0; i < this.coins.length; i++) {
            this.drawPixel(this.coins[i].x, this.coins[i].y, this.coins[i].color);
        }
        this.drawPixel(this.player.x, this.player.y, this.player.color);
        this.updatePixels();
    }

    drawZone(zone: DangerZone) {
        for (let i = zone.x; i < zone.x + zone.w; i++) {
            for (let j = zone.y; j < zone.y + zone.h; j++) {
                this._pixels[j][i] = zone.color;
            }
        }
    }

    drawPixel(x: number, y: number, color: string) {
        this._pixels[y][x] = color;
    }

    updateChildren() {
        this.player.update();
        for (let i = 0; i < this.zones.length; i++) {
            this.zones[i].update();
        }
        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].update();
        }
    }

    updateLogic() {
        for (let i = 0; i < this.zones.length; i++) {
            let currZone = this.zones[i];
            if (currZone.inRange(this.player)) {
                // this.player.takeDamage(currZone.damage);
                this.onGameEnd();
            }
            if (currZone.ended) {
                this.zones.splice(i, 1);
                i--;
            }
        }
        for (let i = 0; i < this.coins.length; i++) {
            let currCoin = this.coins[i];
            if (currCoin.inRange(this.player)) {
                this.player.addCoin();
                currCoin.collect();

            }
            if (!currCoin.activated) {
                this.coins.splice(i, 1);
                i--;
            }
        }
    }

    update() {
        this.updateChildren();
        this.updateLogic();
        this.drawChildren();

        if (this.updateCount % this.turnNumber == 0) {
            this.zones.push(DangerZone.createRandom(this.cols, this.rows));

        }
        if (this.updateCount % 300 == 0) {
            this.coins.push(Coin.createRandom(this.cols, this.rows));
        }
        this.updateCount++;
    }

    getCell(x: number, y: number): string {
        return this._pixels[y][x];
    }
}

class Coin {
    vanishTime = 100;
    updateCount = 0;

    public static createRandom(cols: number, rows: number): Coin {
        let x = Math.floor(Math.random() * cols);
        let y = Math.floor(Math.random() * rows);
        return new Coin(x, y);
    }

    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
    }

    activated = true;

    collect() {
        this.activated = false;
    }

    _blinkState = false;

    update() {
        if (!this.activated) {
            return;
        }
        if (this.updateCount > this.vanishTime ) {
            this.activated = false;
        }

        if (this.updateCount % 30 == 0) {
            this._blinkState = !this._blinkState;
        }

        this.updateCount++;
    }

    get color() {
        // console.log(`this._blinkState: ${this._blinkState}`);

        if (this._blinkState) {
            return `#FFD700`;
        }
        return "orange";
    }

    inRange(player: Player) {
        return this.activated && this.x == player.x && this.y == player.y;
    }
}

class Zone {
    updateCount = 0;

    constructor(public x: number, public y: number, public w: number, public h: number) {
    }

    get color(): string {
        if (this.activated) {
            return "red";
        }
        return `rgba(255, 100, 100, ${this.updateCount / 100})`;
    }

    update() {
        this.updateCount++;
    }

    get activated(): boolean {
        return true;
    }

    get ended(): boolean {
        return true;
    }

    inRange(player: Player): boolean {
        if (this.activated) {
            return player.x >= this.x && player.x < this.x + this.w && player.y >= this.y && player.y < this.y + this.h;
        }
        return false;
    }
}

class DangerZone extends Zone {
    damage: number = 1;

    static createRandom(cols: number, rows: number): DangerZone {
        let x = Math.floor(Math.random() * cols);
        let y = Math.floor(Math.random() * rows);
        let w = Math.floor(Math.random() * 10);
        if (w > cols - x) {
            w = cols - x;
        }
        let h = Math.floor(Math.random() * 10);
        if (h > rows - y) {
            h = rows - y;
        }
        return new DangerZone(x, y, w, h);
    }

    get activated(): boolean {
        return this.updateCount > 100;
    }

    get ended(): boolean {
        return this.updateCount > 200;
    }
}

class Player {
    x: number;
    y: number;

    defaultX: number;
    defaultY: number;

    coins = 0;

    addCoin() {
        this.coins++;
        scoreText.innerText = `Score: ${this.coins}`;
    }

    get color() {
        return "green";
    }

    constructor(defaultX: number, defaultY: number) {
        this.x = defaultX;
        this.y = defaultY;
        this.defaultX = defaultX;
        this.defaultY = defaultY;
    }

    update() {

    }

    kill() {
        this.x = this.defaultX;
        this.y = this.defaultY;
    }

    takeDamage(damage: number) {
        this.kill();
    }
}
