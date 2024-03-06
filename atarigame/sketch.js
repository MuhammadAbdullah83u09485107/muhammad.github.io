let rectSize = 65;
circleSize = 20;
let rectX;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function preload() {
  sqrs = loadImage("atarirect.png");
}

function draw() {
  background(225);
  setupGame();
}


function setupGame() {
  //create pad
  let rectX = mouseX - rectSize/2;
  if (rectX > 0 || rectX < width) {
    rect(rectX, 350, rectSize, 15);
  }
  //make ball
  let x = 1;
  circle(mouseX, 340 + x, circleSize)
  //create rectangles
  // rect(random(width), random(height), random(50, 70), random(50, 70));
  //  fill("red")
}

