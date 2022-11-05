(() => {
  // Scripts/CanvasManager.ts
  var CanvasManager = class {
    constructor(canvas2) {
      this.canvas = canvas2;
      this.ctx = canvas2.getContext("2d");
      this.initCanvas();
    }
    initCanvas() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
    draw() {
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(0, 0, 100, 100);
    }
    drawPixelArray(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          this.ctx.fillStyle = "rgb(" + array[i][j] + "," + array[i][j] + "," + array[i][j] + ")";
          this.ctx.fillRect(i, j, 1, 1);
        }
      }
    }
  };

  // Scripts/Consts.ts
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var centerX = width / 2;
  var centerY = height / 2;
  var aspectRatio = width / height;

  // Scripts/Math/Random.ts
  var _Random = class {
    static get instance() {
      return _Random.i;
    }
    setSeed(seed) {
      this._seed = seed;
    }
    constructor(seed) {
      this._seed = seed;
    }
    next() {
      let x = Math.sin(this._seed++) * 1e4;
      return x - Math.floor(x);
    }
    nextInt(max) {
      return Math.floor(this.next() * max);
    }
    nextIntRange(min, max) {
      return min + this.nextInt(max - min);
    }
    nextFloat() {
      return this.next();
    }
  };
  var Random = _Random;
  Random.i = new _Random(new Date().getTime());

  // Scripts/Math/NoiseMap.ts
  var NoiseMap = class {
    constructor(width2, height2, max = 256, min = 0, isFloat = false) {
      this.array = [];
      for (let i = 0; i < width2; i++) {
        this.array.push([]);
        for (let j = 0; j < height2; j++) {
          this.array[i].push(Random.instance.next());
        }
      }
      this.isFloat = isFloat;
      this.generateNoiseMap(max, min);
    }
    toString() {
      let str = "";
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array[i].length; j++) {
          str += this.array[i][j] + " ";
        }
        str += "\n";
      }
      return str;
    }
    generateNoiseMap(max, min) {
      for (let i = 0; i < this.array.length; i++) {
        for (let j = 0; j < this.array[i].length; j++) {
          this.array[i][j] = this.array[i][j] * (max - min) + min;
          if (!this.isFloat) {
            this.array[i][j] = Math.floor(this.array[i][j]);
          }
        }
      }
    }
    getNoiseMap() {
      return this.array;
    }
  };

  // Scripts/Drawer.ts
  function drawPixelArray(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        ctx.fillStyle = "rgb(" + array[i][j] + "," + array[i][j] + "," + array[i][j] + ")";
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }

  // Scripts/Events.ts
  window.requestAnimationFrame(frameUpdateCaller);
  function frameUpdateCaller() {
    frameUpdate();
    window.requestAnimationFrame(frameUpdateCaller);
  }
  function frameUpdate() {
    console.log("Frame update called");
    drawPixelArray(new NoiseMap(100, 100).getNoiseMap());
  }
  function keyDown(event) {
    console.log(event.key);
  }

  // Scripts/index.ts
  console.log("Loading index.ts");
  function main() {
    let canvasManager = new CanvasManager(canvas);
    document.addEventListener("keydown", keyDown);
    frameUpdateCaller();
    canvasManager.draw();
    let noise = new NoiseMap(100, 100, 255, 0);
    console.log(noise.toString());
    canvasManager.drawPixelArray(noise.getNoiseMap());
  }
  main();
  console.log("Loaded index.ts");
})();
//# sourceMappingURL=index.js.map
