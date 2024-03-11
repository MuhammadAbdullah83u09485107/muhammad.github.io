let rectSize = 65;
circleSize = 20;
let rectX;
let x;
let y;
let dx;

function setup() {
  createCanvas(400, 400);

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
  //make ball and move it
  for (x = 1; x <= height; x++ ) {
    circle(mouseX, 340 - x, circleSize);
  }
  
  
  
  //create rectangles
  // rect(random(width), random(height), random(50, 70), random(50, 70));
  //  fill("red")
}

