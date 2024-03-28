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
  background("white");
  displayBullets();
  moveBullets();
}

function displayBullets() {
  for (let bullet of bulletArray) {
    fill(bullet.r, bullet.g, bullet.b);
    circle(bullet.x, bullet.y, bullet.size);
    if (keyIsPressed(UP_ARROW)) {
      bullet.y -= bullet.speed;
    }
  }
}

function spawnBullets() {
  let bullet = {
    x: windowWidth/2,
    y: windowHeight/2,
    speed: 5,
    deltaTime: 0.01,
    size: 10,
    r: 255,
    g: 0,
    b: 0,



  }
  bulletArray.push(bullet);
}


