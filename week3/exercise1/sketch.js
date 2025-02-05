function setup() {
  createCanvas(200, 200);
}

function draw() {
  noLoop();
  background(220);
  drawTile();
}

function drawTile(){
  //Start with blue Square tile
  fill(0, 120, 200);
  strokeWeight(2);
  square(0, 0, 200);

  //Add White Corners
  fill(255);
  strokeWeight(0);
  //top-left triangle
  triangle(0, 0, 40, 0, 0, 40);
  //top-right triangle
  triangle(200, 0, 160, 0, 200, 40);
  //bottom left triangle
  triangle(0, 200, 40, 200, 0, 160);
  //bottom right triangle
  triangle(200, 200, 160, 200, 200, 160);
}
