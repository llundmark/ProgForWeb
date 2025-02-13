let shapeX = 0;
let shapeY = 250;
let shapeClicks = 0;
let squareLength = 50;
let colorIndex = 0;
const colors = ["red", "orange",  "yellow", "green", "blue", "violet", "pink", "teal", "magenta", "cyan"];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill(colors[colorIndex]);
  rect(shapeX, shapeY, squareLength, squareLength);
  shapeX++;
  //check if shape has reached edge of canvas
  if((shapeX + squareLength) > 500){
    noLoop();
    fill(0);
    text("Your score is: " + shapeClicks, 200, 250);
  }

}

function mousePressed(){
  //increments variable if mouse clicked within bounds of shape
  if((mouseX >= shapeX)
    && (mouseX <= (shapeX + squareLength))
    && (mouseY >= shapeY)
    && (mouseY <= (shapeY + squareLength))
  ){
    shapeClicks++;
    //colorIndex = Math.floor(Math.random() * 9);
    //increments index to change square color, logs hit
    colorIndex++;
    if(colorIndex >= 10){
      colorIndex = 0;
    }
    console.log("Hit " + shapeClicks);
  }
}


