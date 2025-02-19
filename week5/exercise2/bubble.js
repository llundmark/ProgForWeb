class Bubble{
  constructor(x, y, d){
    this.originX = x;
    this.originY = y;
    this.diameter = d;
    this.velocityX = 0;
    this.velocityY = random(1,3);
  }

  drawBubble(){
    //console.log("drawing")
    noFill();
    strokeWeight(2);
    stroke(255);
    circle(this.originX, this.originY, this.diameter);
  }

  float(){
    //sets bubble floating from side to side
    this.velocityX += random(-1, 1);
    //checks to see if bubble would hit left or right edge
    if(
      ((this.originX + this.velocityX) > width)
    ){
      this.velocityX = -1;
    }
    else if(
      ((this.originX + this.velocityX) < 0)
    ){
      this.velocityX = 1;
    }
    else{
      this.originX += this.velocityX;
    }

    //checks to see if bubble has reached top
    if(this.originY > 0){
      this.originY -= this.velocityY;
    }
    else{
      this.reset();
    }
    
  }

  reset(){
    //resets bubble to bottom of canvas,
    //sets random x value and diameter
    this.originY = height - this.diameter;
    this.originX = random(this.diameter, width - this.diameter);
    this.velocityX = 0;
  }
}

let bubbleSet = [];
function setup() {
  createCanvas(400, 400);
  let bubbleDiam = 0;
  //fills array with new objects - class Bubble
  for(let i = 0; i < 10; i++){
    bubbleDiam = random(5, 15);

    bubbleSet.push(new Bubble(
      //random x value for bubble
      random(bubbleDiam, width - bubbleDiam),
      //start y at bottom
      (height - bubbleDiam),
      //semi-random diameter
      bubbleDiam
    ));
  }
}

function draw() {
  background(100);
  //iterates through array, drawing and updating position of each
  for(let j = 0; j < bubbleSet.length; j++){
    bubbleSet[j].drawBubble();
    bubbleSet[j].float();
  }
}
