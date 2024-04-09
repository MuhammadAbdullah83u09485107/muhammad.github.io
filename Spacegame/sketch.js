// Space Invaders
// Muhammad Abdullah
// March 22, 2024
//
// Extra for Experts:
// - ?

let bulletArray = [];
let shipArray = [];
let alienArray = [];
let spaceship;
let bImage;
let xship = 0;
let yship = 0;
let shipSpeed = 5;
let isMoving = false; // Boolean variable to track spaceship movement
let aliens;
let alienWidth = 30; // Width of the resized alien image
let alienHeight = 20; // Height of the resized alien image
let score;

function preload() {
  spaceship = loadImage("spaceship-23.png");
  bImage = loadImage("Spacebackground.png");
  aliens = loadImage("alien.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnSpaceship();
  spaceship.resize(60, 0); // Resize the spaceship image
  spawnAliens();
  aliens.resize(alienWidth, alienHeight); // Resize the alien image
  spawnAliens();
  score = 0;
}

function draw() {
  background(bImage);
  displayBullets();
  displayShip();
  moveSpaceship();
  moveBullets();
  displayAliens();
  displayScore();
  collisionDetection()
  
}

function collisionDetection(){
  if(bulletArray.length >= 1){
    for (let [index, alienItem] of alienArray.entries()){
      for (let [i, bullet] of bulletArray.entries()) {
        if ((alienItem.y2 >= bullet.y && bullet.y >= alienItem.y1) && (alienItem.x2 >= bullet.x && bullet.x >= alienItem.x1)){
          bulletArray.splice(i, 1); 
          alienArray.splice(index, 1); 
          score++;
        }
      }
  }
  }
}

function displayScore() {
  //keeps track of score in top left corner
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
}

function displayAliens() {
    for (let i = 0; i < alienArray.length; i++) {
      let alien = alienArray[i];
      image(aliens, alien.x, alien.y);
    }
  }
  

function displayBullets() {
  for (let i = bulletArray.length - 1; i >= 0; i--) {
    let bullet = bulletArray[i];
    fill(bullet.r, bullet.g, bullet.b);
    circle(bullet.x, bullet.y, bullet.size);
  }
}

function spawnBullets(x, y) {
  let bullet = {
    x: x + spaceship.width / 2,
    y: y,
    speed: 5,
    size: 5,
    r: 255,
    g: 0,
    b: 0,
  };
  bulletArray.push(bullet);
}

function moveBullets() {
  for (let i = bulletArray.length - 1; i >= 0; i--) {
    let bullet = bulletArray[i];
    bullet.y -= bullet.speed;
    if (bullet.y < 0) {
      bulletArray.splice(i, 1); // Remove bullet if it goes off-screen
    }
  }
}

function displayShip() {
  image(spaceship, xship, yship);
}


function moveSpaceship() {
  if (keyIsDown(68)) {
    // 'd'
    isMoving = true;
    xship += shipSpeed;
  } else if (keyIsDown(65)) {
    // 'a'
    isMoving = true;
    xship -= shipSpeed;
  } else {
    isMoving = false;
  }
  xship = constrain(xship, 0, width - spaceship.width); // Constrain spaceship within canvas
}

function spawnSpaceship() {
  xship = windowWidth / 3 - spaceship.width / 2;
  yship = windowHeight - 60;
}

function keyPressed() {
  if (keyCode === UP_ARROW && !isMoving) {
    shootBulletUp();
  }
}

function shootBulletUp() {
  spawnBullets(xship - 20, yship);
  spawnBullets(xship + 20, yship); // Spawn second bullet with an x offset of 10 pixels
}

function spawnAliens() {
  // Spawn aliens in 3 columns and rows of 5
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 1; j++) {
      let xcomp = (i + 1) * (width / 8) - alienWidth / 2;
      let ycomp = (j + 1) * (height / 8) - alienHeight / 2;
      let alien = {
        x: xcomp, // Spread aliens evenly in 3 columns
        y: ycomp, // Spread aliens evenly in 5 rows
        x1: xcomp-25,
        x2: xcomp+25,
        y1: ycomp-25,
        y2: ycomp+25,
      };
      alienArray.push(alien);
    }
  }
}


