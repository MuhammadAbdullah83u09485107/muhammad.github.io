let rectSize = 65;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  draw_base();
}

//drawing base
function draw_base() {
  rect(mouseX - rectSize/2, 350, rectSize, 15);
  if (mouseX - rectSize/2 < width || mouseX - rectSize/2 > width) {
    mouseX = width;
  }
}