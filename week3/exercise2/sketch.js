function setup() {
  createCanvas(600, 600);
}

function draw() {
  noLoop();
  background(220);

  //Initialize variables
  let cornerColor = 255;
  let colors = ["pink", "orange", "blue", "red", "green", "magenta", "purple", "cyan", "yellow"];
  let colorIndex = 0;
  let cornerSize = 20;

  for(let row = 0; row<=2; row++){
    for(let column = 0; column<=2; column++){
      //drawTile(200 * column,200 * row,colors[colorIndex], cornerSize, cornerColor, 40);
      drawTile(0,0,colors[colorIndex], cornerSize, cornerColor, 40);

      //loop iterates through string array for different colors
      colorIndex++;

      //Tile corners grow in size and change from white to dark grey
      cornerSize += 10;
      cornerColor -= 20;

      //Tile origin jumps to right by one tile length for each iteration
      translate(200,0);
    }
    //Tile origin returns to left edge and jumps down by one tile length
    translate(-600, 200);
  }
}

function drawTile(xOrigin, yOrigin, color, cornerOffset, cornerColor, circleSize){
  //Start with blue Square tile
  fill(color);
  square(xOrigin, yOrigin, 200);

  fill(cornerColor);
  circle(xOrigin + 100, yOrigin + 100, circleSize);
  fill(cornerColor);
  //top-left triangle
  triangle(xOrigin, yOrigin, xOrigin + cornerOffset, yOrigin, xOrigin, yOrigin + cornerOffset);
  //top-right triangle
  triangle(xOrigin + 200, yOrigin, xOrigin + 200 - cornerOffset, yOrigin, xOrigin + 200, yOrigin + cornerOffset);
  //bottom left triangle
  triangle(xOrigin, yOrigin + 200, xOrigin + cornerOffset, yOrigin + 200, xOrigin, yOrigin + 200 - cornerOffset);
  //bottom right triangle
  triangle(xOrigin + 200, yOrigin + 200, xOrigin + 200 - cornerOffset, yOrigin + 200, xOrigin + 200, yOrigin + 200 - cornerOffset);
}
