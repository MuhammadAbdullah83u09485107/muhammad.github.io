let x;
let y;
let speedX = 0;
let speedY = 0;
let squareSize;
let foodX;
let foodY;
let gameOverFlag = false;
let restartButton = false; 
let score
let speed;

function setup() {
  //start game and initialize variables
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  squareSize = 20;
  score = 0;
  speed = 2;
  makeFood(); // Call makeFood function once
}

function draw() {
  //calls all the different functions
  background("black");
  moveSnake();
  drawSnake();
  drawFood(); // Draw food in each frame
  displayScore();
  if (gameOverFlag) {
    displayGameOver();
  }

    // Check if snake has touched the food
    if (!gameOverFlag && dist(x, y, foodX, foodY) < squareSize) {
      makeFood(); // Regenerate food
      squareSize++;
      score += 10;
      speed += 1;
    }

}

function drawSnake() {
  //draws the green square
  fill(0, 255, 0);
  square(x - squareSize / 2, y - squareSize / 2, squareSize);
}

function keyPressed() {
  //moves square based on the key pressed
  if (!gameOverFlag) {
    if (key === "w") { // w key
      speedY = -speed;
      speedX = 0;
    } else if (key === "s") { // s key
      speedY = speed;
      speedX = 0;
    } else if (key === "d") { // d key
      speedX = speed;
      speedY = 0;
    } else if (key === "a") { // a key
      speedX = -speed;
      speedY = 0;
    }
  }
}

function moveSnake() {
  //moves the green square by a set amount of pixels
  x += speedX;
  y += speedY;
  gameOver();
}

function makeFood() {
  //puts pood in random location
  foodX = random(width);
  foodY = random(height);
}

function drawFood() {
  //draw a red square
  fill(255, 0, 0);
  square(foodX, foodY, 15);
}

function gameOver() {
  //decides wether the game is over or not
  if ((x > width || y > height) || (x < 0 || y < 0)) { 
    gameOverFlag = true;
   
  }
}

function displayGameOver() {
  //creates "game over" text
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

function displayScore() {
  //keeps track of score in top left corner
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
}

function restartGame() {
  //returns the game to setup once the restart button is clicked
  gameOverFlag = false;
  speedX = 0;
  speedY = 0;
  // Remove restart button
  restartButton.remove();
  restartButton = null;
  setup()
}

