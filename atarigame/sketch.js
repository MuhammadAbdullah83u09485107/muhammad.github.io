let rectSize = 65;
circleSize = 20;
let rectX = mouseX - rectSize/2;

function setup() {
  createCanvas(400, 400);
  noStroke;
}

function draw() {
  //setupGame();
  let x = 1;
  circle(mouseX, 340 + x, circleSize)
}


function setupGame() {
 rect(rectX, 350, rectSize, 15);
  if (rectX < width || rectX > width) {
    
  }
  let x = 1;
  circle(mouseX, 340 + x, circleSize)
  fill("red")
  rect(random(height/2), random(width), random(50, 70), random(50, 70));
}

