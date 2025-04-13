let rotateBy = 0;
const shapeCoords = [];
let thisX, thisY, nextX, nextY = 0;
let index = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  for(let x = 0; x < 13; x++){
    let newObject = {
      originX : Math.floor(Math.random() * 720),
      originY : Math.floor(Math.random() * 720)
    }
    shapeCoords.push(newObject);
  }
    thisX = shapeCoords[0].originX;
    thisY = shapeCoords[0].originY;
    nextX = shapeCoords[1].originX;
    nextY = shapeCoords[1].originY;
    //console.log("length: " + shapeCoords.length);
}

function draw() {
  let starSize = 100;
  let dotsize = 20;
  //Checks if we are at the last element
  if(index < (shapeCoords.length - 2)){
    //Checks if current point is the current array coordinate
    if((thisX === shapeCoords[index].originX) && (thisY === shapeCoords[index].originY)){
      //console.log(index + ": " + thisX + ", " + thisY);
      drawObjects(thisX, thisY, starSize);
    }
    //Checks if current point is between two array coordinates
    if((Math.abs(thisX - nextX) < 20) && (Math.abs(thisY - nextY) < 20)){
      //If current point is close enough to the next array coordinate, jumps to next array coordinate
      index++;
      thisX = shapeCoords[index].originX;
      thisY = shapeCoords[index].originY;
      nextX = shapeCoords[index+1].originX;
      nextY = shapeCoords[index+1].originY;
    }
    else{
      connectStep(dotsize);
    }
    
  }
  else{
    drawObjects(thisX, thisY, starSize);
    noLoop();
  }
  
}

function connectStep(size){
  if(thisX < nextX){
    thisX += Math.floor(Math.random() * 20);
  }
  else{
    thisX -= Math.floor(Math.random() * 20);
  }

  if(thisY < nextY){
    thisY += Math.floor(Math.random() * 20);
  }
  else{
    thisY -= Math.floor(Math.random() * 20);
  }
  drawObjects(thisX, thisY, size);
}

function drawObjects(originX, originY, branchLength){
  let grey = 155;
  while(grey <= 255){
  drawStar(grey, originX, originY, branchLength);
  grey += 5;
  if(branchLength > 9){
  branchLength -= (2 + Math.floor(Math.random() * 6));
  }
  }
}

function drawStar(color, originX, originY, length){
  let rotation = 0;
  let basepoint = Math.ceil(length/20);
  fill(color);
  strokeWeight(0);
  push();
  translate(originX, originY);
  triangle(0, basepoint, 0, -basepoint, length, 0);
  while(rotation < 360){
    rotation += (Math.floor(Math.random() * 10))
    push();
    rotate(rotation);
    triangle(0, basepoint, 0, -basepoint, length, 0);
    pop();
  }
  pop();
}

function mousePressed(){
  noLoop();
}
