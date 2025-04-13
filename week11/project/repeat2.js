class Bubble{
    constructor(){
      this.originX = Math.floor(Math.random() * 720);
      this.originY = 800;
      this.size = Math.floor(Math.random() * 50);
      this.velX = 0;
      this.velY = random(1,3);
      this.shapeColor = color(100,100,100);
      this.shrinkGrow = false;
    }

    float(){
        //checks to see if bubble has reached top
        if(this.originY > 0){
            this.originY -= this.velY;
            
            //sets bubble floating from side to side
            this.velX += random(-1, 1);

            //checks to see if bubble would hit left or right edge
            if(
            ((this.originX + this.velX) > width)
            ){
            this.velX = -1;
            }
            else if(
            ((this.originX + this.velX) < 0)
            ){
            this.velX = 1;
            }
            else{
            this.originX += this.velX;
            }
        
            //alternates shrinking and growing size of circle
            if(this.shrinkGrow){
                if(this.size <= 50){
                    this.size += Math.floor(Math.random() * 3);
                }
                else{
                    this.shrinkGrow = false;
                }
            }
            else{
                if(this.size >= 5){
                    this.size -= Math.floor(Math.random() * 3);
                }
                else{
                    this.shrinkGrow = true;
                }
            }
        }
        
  }

  drawBubble(){
    let shapeGreen = green(this.shapeColor);
    let shapeBlue = blue(this.shapeColor);
    let shapeRed = red(this.shapeColor);
    shapeRed += random(-2, 2);
    shapeBlue += random(-2, 2);
    shapeGreen += random(-2, 2);
    this.shapeColor = color(shapeRed, shapeGreen, shapeBlue);
    stroke(this.shapeColor);
    circle(this.originX, this.originY, this.size);
}
}
const bubbleCoords = [];
var allFinished = false;
function setup(){
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  noFill();
  strokeWeight(1);
  stroke(255);
  for(let x = 0; x < 8; x++){
    let newObject = new Bubble();
    bubbleCoords.push(newObject);
  }

}

function draw(){
    let finishedCount = 0;
    if(allFinished){
        console.log("all finished");
        noLoop();
    }
    else{
        for(let x=0;x < bubbleCoords.length; x++){
            bubbleCoords[x].float();
            bubbleCoords[x].drawBubble();
            if(bubbleCoords[x].originY <= 0){
                finishedCount ++;
            }
        }
        if(finishedCount === bubbleCoords.length){
            allFinished = true;
        }
    }
}