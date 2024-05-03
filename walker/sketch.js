// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.stepSize = 5;
    this.color = color;
    this.radius = 5;
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //move up
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      //move down
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      //move right
      this.x += this.stepSize;
    }  
    else {
      //move left
      this.x -= this.stepSize;
    }
  }
}

let maram;
let griffin;
let seth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maram = new Walker(width/2, height/2, "red");
  griffin = new Walker(200, 400, "green");
  seth = new Walker (400, 600, "blue");
  noStroke();
}

function draw() {
  maram.move();
  griffin.move();
  seth.move();
  maram.display();
  griffin.display();
  seth.display();
}