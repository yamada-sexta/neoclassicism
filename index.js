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
  };

  // Scripts/vars.ts
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");

  // Scripts/index.ts
  console.log("Loading index.ts");
  function main() {
    let canvasManager = new CanvasManager(canvas);
    canvasManager.draw();
  }
  main();
  console.log("Loaded index.ts");
})();
//# sourceMappingURL=index.js.map
