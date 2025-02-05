function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  drawTile(0,0);
}

function drawTile(xOrigin, yOrigin){
  //Start with blue Square tile
  fill(0, 120, 200);
  square(xOrigin, yOrigin, 200);

  fill(255);
  //top-left triangle
  triangle(xOrigin, yOrigin, xOrigin + 40, yOrigin, xOrigin, yOrigin + 40);
  //top-right triangle
  triangle(xOrigin + 200, yOrigin, xOrigin + 160, yOrigin, xOrigin + 200, yOrigin + 40);
  //bottom left triangle
  triangle(xOrigin, yOrigin + 200, xOrigin + 40, yOrigin + 200, xOrigin, yOrigin + 160);
  //bottom right triangle
  triangle(xOrigin + 200, yOrigin + 200, xOrigin + 160, yOrigin + 200, xOrigin + 200, yOrigin + 160);
}
