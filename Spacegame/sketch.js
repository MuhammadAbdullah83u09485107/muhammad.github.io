// Space Invaders
// Muhammad Abdullah
// March 22, 2024
//
// Extra for Experts:
// - ?

let bulletArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBullets();
}

function draw() {
  background("black");
  displayBullets();
}

function displayBullets() {
  for (let variable of bulletArray) {
    fill(bullet.r, bullet.g, bullet.b);
    circle(bullet.x, bullet.y, bullet.size);
  }
}

function spawnBullets() {
  let bullet = {
    x: width / 4,
    y: height / 4,
    speed: 5,
    deltaTime: 0.01,
    size: 5,
    r: 255,
    g: 0,
    b: 0,

  
  }
}
