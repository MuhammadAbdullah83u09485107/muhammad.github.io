// Space Invaders
// Muhammad Abdullah
// March 22, 2024
//
// Extra for Experts:
// - ?

// let bulletArray = [];
// let shipArray = [];
// let x;
// let y;
// let spaceship;
// let xship = 0;
// let yship = 0;
// let shipSpeed = 5;
// let speed;


// function preload() {
//   spaceship = loadImage("spaceship-23.png");
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   spawnSpaceship();
//   spawnBullets();
// }

// function draw() {
//   background("white");
//   displayBullets();
//   //moveBullets();
//   displayShip();
//   moveSpaceship();
//   shootBulletUp();
// }

// function displayBullets() {
//     for (let bullet of bulletArray) {
//     fill(bullet.r, bullet.g, bullet.b);
//     console.log(bullet.x, bullet.y);
//     circle(bullet.x, bullet.y, bullet.size);
//   }
// }

// function spawnBullets() {
//   let bullet = {
//     x: xship + (spaceship.width/3),
//     y: yship + (spaceship.height/2),
//     speed: 1,
//     deltaTime: 0.01,
//     size: 10,
//     r: 255,
//     g: 0,
//     b: 0,
//   }
//   bulletArray.push(bullet);
// }

// function moveBullets() {
//   if (keyIsPressed && keyCode === UP_ARROW) {
//     for (let bullet of bulletArray) {
//       moveBulletUp(bullet);
//     }
//   }
// }


// function moveBulletUp(bullet) {
//   let i = 0;
//   while (i < 10) {
//     bullet.y -= bullet.speed;
//   }
//    const intervalId = setInterval(function() {
//      bullet.y -= bullet.speed;
//      i++;
//      if (i >= height) {
//        clearInterval(intervalId);
//     }
//    }, 100);
//  }
 
//  function displayShip() {
//   for (ship of shipArray) {
//     image(spaceship, ship.x, ship.y, spaceship.width, spaceship.height);
//   }
// }

// function moveSpaceship() {
//   if (keyIsDown(68)) { //d
//     for (ship of shipArray) {
//     ship.x+= shipSpeed;
//     xship += shipSpeed;
//     }
//   }
// else if (keyIsDown(65)) { //a
//   for (ship of shipArray) {
//     ship.x -= shipSpeed;
//     xship -= shipSpeed;
//   }
//   }
// }

// function spawnSpaceship() {
//   let ship = {
//   x: windowWidth/2,
//   y: windowHeight - spaceship.height,
//   }
//   xship = ship.x;
//   yship = ship.y;
//   shipArray.push(ship);
// }

// function shootBulletUp() {
//   if (keyIsPressed && keyCode === UP_ARROW) {
//     for (bullet of bulletArray) {
//       shootBullet(bullet);
//     }
//   }
// }

// function shootBullet(bullet) {
//   for (bullet of bulletArray) {
//     bullet.y -= bullet.speed;
//   }
// }

let bulletArray = [];
let shipArray = [];
let spaceship;
let xship = 0;
let yship = 0;
let shipSpeed = 5;
let isMoving = false; // Boolean variable to track spaceship movement

function preload() {
  spaceship = loadImage("spaceship-23.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnSpaceship();
}

function draw() {
  background(220);
  displayBullets();
  displayShip();
  moveSpaceship();
  moveBullets();
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
    size: 10,
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
  yship = windowHeight - spaceship.height;
}

function keyPressed() {
  if (keyCode === UP_ARROW && !isMoving) {
    shootBulletUp();
  }
}

function shootBulletUp() {
  spawnBullets(xship, yship);
  spawnBullets(xship + 30, yship); // Spawn second bullet with an x offset of 10 pixels
}
