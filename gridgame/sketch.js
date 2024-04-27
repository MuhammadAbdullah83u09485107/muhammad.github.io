//Muhammad Abdullah
//April 24, 2024
//Tic Tac Toe Game
// extra for experts: ???

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

function setup() {
  startGame();

}


function draw() {

}

function startGame() {
  cells.forEach(cell=> cell.addEventListener("click", squareClicked))
  restartButton.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}s turn`;
}

function squareClicked() {

}

function updateSquare(cell, index) {

}

function changePlayer() {

}

function checkWinner() {

}

function restartGame() {

}