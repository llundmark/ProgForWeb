let squareX = 0;
let squareY = 0;
let length = 40;
let squareColor = 200;
let intervalLength = 500;
function setup() {
  createCanvas(400, 400);
  background(220);
}

function drawSquare(originX, originY, color){
  strokeWeight(0);
  fill(color || 255);
  square(originX, originY, length);
  //check if square x value has reached edge,
  //if so reset x value and increment y value
  if(squareX < width){
    squareX += length;
  }
  else{
    squareX = 0;
    squareY += length;
  }
  //check if square y value has reached edge,
  //if so reset x and y value
  if(squareY >= height){
    window.clearInterval(drawTimer);
    window.alert("done");
  }
}

let drawTimer = window.setInterval(()=>(
  drawSquare(squareX, squareY, squareColor)), intervalLength
);

function keyTyped(){
  let keyCode = Number(key);
  if(isNaN(keyCode)){
    return;
  }
  keyCode = map(keyCode, 0, 9, 1, 255);
  squareColor = keyCode;
}