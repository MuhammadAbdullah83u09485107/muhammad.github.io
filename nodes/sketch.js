// Connected Nodes OOP Demp


function setup() {
  createCanvas(windowWidth, windowHeight);
  let somePoint = new MovingPoint(width/2, height/2);
  points.push(somePoint);
}

function draw() {
  background(220);

  for (let point of points) {
    point.update();
    point.display();
  }
}

class MovingPoint {
  constructor(x, y) {
    this.speed = 5;
    this.radius = 15;
    this.x = 0;
    this.y = 0;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.color = color(random(255));
  }


display() {
  noStroke();
  circle(this.x, this.y, this.radius * 2);
  fill(this.color);
}

update() {
  let dx = noise(this.xTime);
  let dy = noise(this.yTime);

  this.dx = map(dx, 0, 1, -this.speed, this.speed);

  this.x = this.dx;
  this.y = this.dy;

  this.xTime += deltaTime;
  this.yTime += deltaTime;


}
}

function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  points.push(somePoint);
}

map()