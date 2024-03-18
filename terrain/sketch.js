// Terrain Gneration
// Muhammad Abdullah
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let terrain = [];
let numberofRects;
let rectWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberofRects = 100;
  rectWidth = width/numberofRects;
  generateTerrain();
}

function draw() {
  background(220);
  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

generateTerrain() {
  let time = 0;
  let deltaTime = 0.003;
  for (let x = 0; x < width; x += rectWidth) {
    let theHeight = noise(time) * height;
    spawnRectangle(x, theHeight);
    time += deltaTime;
  }
}
  
  function spawnRectangle(leftSide, rectHeight) {
    let thisRect = {
      x: leftSide,
      y: height - rectHeight,
      w: rectWidth,
      h: rectHeight
    }
    terrain.push(thisRect)
  }
