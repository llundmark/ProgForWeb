let rotateBy = 0;
function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  let branchColor = color(255,0,0);
  translate(300,300);
  rotate(rotateBy);
  drawBranch(6, branchColor, 100, 5, 45);
  //randomizing the rotation a bit
  rotateBy += (2 + Math.floor(Math.random() * 5));
}

function drawBranch(lineWeight, branchColor, lineLength, branchDepth, branchRotation){
  //semi-random color for circle at end of branch
  let circleColor = color(
    (200 + Math.floor(Math.random() * 56)),
    (Math.floor(Math.random() * 255)),
    (Math.floor(Math.random() * 50))
  );
  stroke(branchColor);
  strokeWeight(lineWeight);
  line(0, 0, lineLength, 0);
  if(branchDepth > 0){
    //translate origin to end of line
    push();
    translate(lineLength, 0);
    //Branch starts off at Red, becomes more orange each iteration
    branchColor.setGreen(green(branchColor) + 5);
    //rotate 45 degrees and draw new branch
    push();
    rotate(branchRotation);
    drawBranch(lineWeight-1, branchColor, lineLength-20, branchDepth - 1, branchRotation/2);
    //return to original angle
    pop();
    //rotate -45 degrees and draw new branch
    push();
    rotate(-(branchRotation));
    drawBranch(lineWeight-1, branchColor, lineLength-20, branchDepth - 1, branchRotation/2);
    //return to original angle
    pop();
    //translate back to origin point
    pop();
  }
  else{
    //At end of the branch, draw a circle
    push();
    noFill();
    stroke(circleColor);
    circle(0,0,10);
    pop();
  }
}

function mousePressed(){
  noLoop();
}
