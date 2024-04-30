//Muhammad Abdullah
//April 24, 2024
//Tic Tac Toe Game
// extra for experts: ???


// Makes board
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let winner = null;
let currentPlayer = 'X';

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(64);
    makeButton();
}
function draw() {
  background(255);
  drawBoard();
  checkWinner();
}

function drawBoard() {
    //draws board in center of the screen
  let w = width / 8;
  let h = height / 8;
  let offsetX = width/3; 
  let offsetY = height / 3;
  displayWinner();

  // Draw the grid lines
  strokeWeight(4); 
  for (let i = 1; i < 3; i++) {
    line(offsetX + w * i, offsetY, offsetX + w * i, offsetY + 3 * h); // vertical lines
    line(offsetX, offsetY + h * i, offsetX + 3 * w, offsetY + h * i); // horizontal lines
  }
  
  // Draw the X's and O's
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = offsetX + w * i + w / 2;
      let y = offsetY + h * j + h / 2;
      let spot = board[i][j];
      if (spot != '') {
        text(spot, x, y);
      }
    }
  }
}

function mousePressed() {
    //checks if mouse is pressed and the game hasnt been won and the board is not full
    if(winner == null && !isBoardFull()){
    let w = width / 8;
    let h = height / 8;
    let offsetX = width/3; 
    let offsetY = height / 3;
    let i = floor((mouseX - offsetX) / w);
    let j = floor((mouseY - offsetY) / h);

    // Only allow to place if the spot is empty
    if (board[i][j] == '') {
        board[i][j] = currentPlayer;
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }        
    }

}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    // Check rows and columns to find a winner
    if (equal(board[i][0], board[i][1], board[i][2])) {
      winner = `${board[i][0]} wins!`;
    }
    if (equal(board[0][i], board[1][i], board[2][i])) {;
      winner = `${board[0][i]} wins!`;
    }
  }
  // Check diagonals
  if (equal(board[0][0], board[1][1], board[2][2])) {
    winner = `${board[0][0]} wins!`;
  }
  if (equal(board[0][2], board[1][1], board[2][0])) {
    winner = `${board[0][2]} wins!`;
  }
  if(isBoardFull() && winner == null){
    winner = "Tie!";
  }
}

function equal(a, b, c) {
    //used to check if there are 3 Xs or Os in a row and if there is not an empty space
  return a == b && b == c && a != '';
}

function isBoardFull() {
    //checks if board is full
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') return false;
    }
  }
  return true;
}

function displayWinner(){
    //shows which person won the game 
  if(winner == null) {
    text(`${currentPlayer}'s turn`, width/2, height/4)
    }
  else{
    text(winner, width/2, height/4);
    resetButton.show();
  }    
}

function resetGame() {
    //resets everything to how it was in the start
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  winner = null;
  resetButton.hide(); 
  redraw(); 
}

function makeButton(){
    // Create a reset button and hide it initially
    resetButton = createButton('Reset Game');
    resetButton.position((width / 2) - 30, height - 70); 
    resetButton.mousePressed(resetGame);
    resetButton.size(120, 40); 
    resetButton.style('font-size', '18px'); 
    resetButton.style('background-color', '#4CAF50'); 
    resetButton.style('color', 'white'); 
    resetButton.style('border', 'none'); 
    resetButton.style('border-radius', '5px'); 
    resetButton.hide(); 
}