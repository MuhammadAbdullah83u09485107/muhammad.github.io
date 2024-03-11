let x;
let y;
let speedX = 0;
let speedY = 0;
let squareSize = 20; 
let foodX;
let foodY;
let gameOverFlag = false;
let restartButton = false; 

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  makeFood(); // Call makeFood function once
}

function draw() {
  background("black");
  moveSnake();
  drawSnake();
  drawFood(); // Draw food in each frame
  if (gameOverFlag) {
    displayGameOver();
  }
  // Check if snake's position coincides with food's position
  if (x === foodX && y === foodY) {
    makeFood(); // Regenerate food
  }
}

function drawSnake() {
  fill(0, 255, 0);
  square(x - squareSize / 2, y - squareSize / 2, squareSize);
}

function keyPressed() {
  if (!gameOverFlag) {
    if (key === "w") { // Up arrow key
      speedY = -2;
      speedX = 0;
    } else if (key === "s") { // Down arrow key
      speedY = 2;
      speedX = 0;
    } else if (key === "d") { // Right arrow key
      speedX = 2;
      speedY = 0;
    } else if (key === "a") { // Left arrow key
      speedX = -2;
      speedY = 0;
    }
  }
}

function moveSnake() {
  x += speedX;
  y += speedY;
  gameOver();
}

function makeFood() {
  foodX = random(width);
  foodY = random(height);
}

function drawFood() {
  fill(255, 0, 0);
  square(foodX, foodY, 15);
}

function gameOver() {
  if ((x > width || y > height) || (x < 0 || y < 0)) { 
    gameOverFlag = true;
  }
}

function displayGameOver() {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2);
  
  // Create restart button
  if (!restartButton) { // Create the button only once
    restartButton = createButton('Restart');
    restartButton.position(width/2 - 20, height/2 + 50);
    restartButton.mousePressed(restartGame);
  }
}

function restartGame() {
  gameOverFlag = false;

  setup()
  x = 0
  y = 0
  // Remove restart button
  restartButton.remove();
  restartButton = null;
}

