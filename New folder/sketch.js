//Generative Art Demo

let tileSize = 100;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
   let someTile = spawnTile(width/2, height/2);
   theTiles.push(someTile);
}

function draw() {
  background(220);

  for (let someTile of theTiles) {
    line(someTime.x1, someTile.y1, someTile.x2, someTile.y2);
  }
}

function spwanTile(x, y) {
  let choice = random(100);
  let tile;

  if (choice > 50) {
    //negative slope
    tile = {
      x1: x - tileSize/2,
      y1: y - tileSize/2,
      x2: x + tileSize/2,
      y2: y + tileSize/2,
    };
  }
  else {
    //positive slope
    tile = {
      x1: x + tileSize/2,
      y1: y + tileSize/2,
      x2: x - tileSize/2,
      y2: y - tileSize/2,
  }
}
return tile;
}