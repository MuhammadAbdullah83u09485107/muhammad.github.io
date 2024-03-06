let rectSize = 65;
circleSize = 20;
let rectX = mouseX - rectSize/2;
let sqrs;

function setup() {
  createCanvas(400, 400);
  noStroke;
}

function draw() {

  setupGame();
}


function setupGame() {
  //create pad
  if (rectX > 0 || rectX < width) {
    rect(rectX, 350, rectSize, 15);
  }
  //make ball
  let x = 1;
  circle(mouseX, 340 + x, circleSize)
  fill("red")
  //create rectangles
  rect(random(height/2), random(width), random(50, 70), random(50, 70));
}

function preload() {
  sqrs = loadImage()
}

