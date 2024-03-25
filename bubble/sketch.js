// bubble movement demo for object notation and arrays
// Muhammad Abdullah
// March 25, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 5; i ++) {
    spawnBubble();
  }

  //spawn new bubble every half second
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background("black");
  //moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubbles();
}

function spawnBubble() {
  let someBubble = {
    size: random(10, 30),
    x: random(width),
    y: random(height),
    speed: 3,
    r: random(225),
    g: random(225),
    b: random(225),
    alpha: random(225),
    timeX: random(1000000),
    timeY: random(1000000),
    deltaTime: 0.1,
  }
  theBubbles.push(someBubble);
}

function displayBubbles() {
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b)
    circle(bubble.x, bubble.y, bubble.size)
  }
}

function moveBubblesRandomly() {
  for (let bubble of theBubbles) {
    let choice = random(100);
    if (choice < 25) {
      //move up
      bubble.y -= bubble.speed;
    }
    else if (choice < 50) {
      //move down
      bubble.y += bubble.speed;
    }
    else if (choice < 75) {
      //move right
      bubble.x += bubble.speed;
    }
    else {
      //move left
      bubble.x -= bubble.speed;
    }
  }
}

function moveBubblesWithNoise() {
  for (let bubble of theBubbles) {
    
    //figure where to be
    let x = noise(bubble.timeX) * width;

    let y = noise(bubble.timeY) * height;

    //set bubble objects location
    bubble.x = x;
    bubble.y = y;

    bubble.timeX += bubble.deltaTime;
    bubble.timeY += bubble.deltaTime;
  }
}
