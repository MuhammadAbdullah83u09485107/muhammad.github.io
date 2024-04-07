// Space Invaders
// Muhammad Abdullah
// March 22, 2024
//
// Extra for Experts:
// - ?

let bulletArray = [];
let x;
let y;
let spaceship;
let xship;
let yship;


function preload() {
  spaceship = loadImage("spaceship-23.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBullets();
}

function draw() {
  background("white");
  displayBullets();
  moveBullets();
  displayShip();
  moveSpaceship();
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
    y: windowHeight/2,
    speed: 1,
    deltaTime: 0.01,
    size: 10,
    r: 255,
    g: 0,
    b: 0,
  }
  bulletArray.push(bullet);
}

function moveBullets() {
  if (keyIsPressed && keyCode === UP_ARROW) {
    for (let bullet of bulletArray) {
      moveBulletUp(bullet);
    }
  }
}

function moveBulletUp(bullet) {
  let i = 0;
  while (i < 10) {
    bullet.y -= bullet.speed;
  }
   const intervalId = setInterval(function() {
     bullet.y -= bullet.speed;
     i++;
     if (i >= height) {
       clearInterval(intervalId);
    }
   }, 1000);
 }

 function moveSpaceship() {
  if (keyIsDown(87)) { //w
    yship -= 1;
  if (keyIsDown(83)) { //s
    yship += 1;
  }
  if (keyIsDown(68)) { //d
    xship += 1;
  }
  if (keyIsDown(65)) { //a
    xship -= 1;
  }
}
 }
 
 function displayShip() {
  xship = width / 2;
  yship = height / 2;
  console.log(yship)
  image(spaceship, xship, yship, spaceship.width, spaceship.height);
}
