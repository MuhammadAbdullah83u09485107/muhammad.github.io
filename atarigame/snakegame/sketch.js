let x;
let y;
let speedX = 0;
let speedY = 0;
let squareSize = 20; // Increased square size for better visibility

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  moveSquare();
  drawSquare();
}

function drawSquare() {
  fill(0, 255, 0);
  square(x - squareSize / 2, y - squareSize / 2, squareSize);
}

function keyPressed() {
  if (key === "w") { // Up arrow key
    speedY = -2;
    speedX = 0;
  } else if (key === "s") { // Down arrow key
    speedY = 2;
    speedX = 0;
  } else if (keyCode === RIGHT_ARROW) { // Right arrow key
    speedX = 2;
    speedY = 0;
  } else if (keyCode === LEFT_ARROW) { // Left arrow key
    speedX = -2;
    speedY = 0;
  }
}

function moveSquare() {
  x += speedX;
  y += speedY;
}
