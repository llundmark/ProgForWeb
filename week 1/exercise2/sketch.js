//Init vars, set shape size to user input
var colorIndex = 0;
var shapeSize = window.prompt("How large should the shape be?");
function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  rectMode(CENTER);
}

function draw() {
  background(0, 2, 50);
  //ellipse(80,80,80,80);
  //color of Circle, changes each frame
  if(colorIndex <=255){
    colorIndex++;
  }
  else{
    colorIndex=0;
  }
  //Draw black square if mouse clicked,
  //otherwise draw colored circle
  if (mouseIsPressed) {
    fill(0);
    square(mouseX, mouseY, shapeSize);
  } else {
    fill(colorIndex, 255, 100);
    ellipse(mouseX, mouseY, shapeSize, shapeSize);
  }
}
