let rotateBy = 0;
const shapeCoords = [];
function setup() {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  //console.log("setting up array");
  for(let x = 0; x < 7; x ++){
    let newObject = {
      originX : Math.floor(Math.random() * 720),
      originY : Math.floor(Math.random() * 720)
    }
    shapeCoords.push(newObject);
  }
  //console.log(shapeCoords.length);
}

function draw() {
  let starSize = 80;
  //translate(300,300);
  //console.log("draw");
  for(let y = 0; y < shapeCoords.length; y++){
    //console.log(shapeCoords[y].originX + ", " + shapeCoords[y].originY);
    drawObjects(shapeCoords[y].originX, shapeCoords[y].originY, starSize);
  }
  noLoop();
  
}

function drawObjects(originX, originY, branchLength){
  //console.log("drawObjects");
  //console.log(originX + ", " + originY);
  let grey = 155;
  while(grey <= 255){
  drawStar(grey, originX, originY, branchLength);
  grey += 5;
  if(branchLength > 9){
  branchLength -= (2 + Math.floor(Math.random() * 6));
  }
  }
  // if(grey >= 255){
  //   //translate origin to end of line
  //   push();
  //   translate(lineLength, 0);
    
  //   //translate back to origin point
  //   pop();
  // }
  // else{
    
   
  // }
}

function drawStar(color, originX, originY, length){
  //console.log("drawing Star");
  let rotation = 0;
  fill(color);
  strokeWeight(0);
  push();
  translate(originX, originY);
  triangle(0, 5, 0, -5, length, 0);
  while(rotation < 360){
    rotation += (Math.floor(Math.random() * 10))
    push();
    rotate(rotation);
    triangle(0, 5, 0, -5, length, 0);
    pop();
  }
  pop();
}

function mousePressed(){
  noLoop();
}
