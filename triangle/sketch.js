// Triangle Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let initialTriangle = [
  {x: 650, y: 20},
  {x: 100, y: 700},
  {x: 1100, y: 700},
];

let theDepth = 0;
let theColors = ["pink", "red", "blue", "purple", "orange", "green"]
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sirpinskiTraingle(initialTriangle, theDepth);
}

function sirpinskiTraingle(points, depth) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0) {
    //draw lower left triangle
  sirpinskiTraingle([midPoint(points[0], points[1]),
  midPoint(points[1], points[2]),
  points[1]],
  depth - 1);

  //draw upper triangle
  sirpinskiTraingle([midPoint(points[0], points[1]),
  midPoint(points[0], points[2]),
  points[0]],
  depth - 1);

  //draw lower right triangle
  fill(theColors[depth])
  sirpinskiTraingle([midPoint(points[0], points[2]),
  midPoint(points[1], points[2]),
  points[2]],
  depth - 1);
  }
  
}

function midPoint(p1, p2) {
  let newX = (p1.x +p2.x) /2;
  let newY = (p1.y + p2.y) /2;
  return{x: newX, y: newY};
}

function mousePressed() {
  if (theDepth < 6) {
    theDepth++;
  }
}