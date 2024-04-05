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
  }
}

function spawnBullets() {
  let bullet = {
    x: windowWidth/2,
    y: windowHeight,
    speed: 20,
    deltaTime: 0.01,
    size: 10,
    r: 255,
    g: 0,
    b: 0,
  }
  bulletArray.push(bullet);
}

function moveBullets(bullet) {
  for (let bullet of bulletArray) {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW){
        while (bullet.y >= 0) {
          bullet.y = bullet.y + bullet.speed; 
        }      
    }
  }
}
}
