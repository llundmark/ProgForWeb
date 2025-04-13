class SquareIter{
  constructor(c, s, x, y, vY, vX){
  this.originX = x;
  this.originY = y;
  this.sqColor = c;
  this.size = s;
  this.velX = vX;
  this.velY = vY;
  }

  update(){
    this.size += 10;
    this.sqColor -= 2;
  }
  drawSquare(){
    stroke(this.sqColor);
    square(this.originX, this.originY, this.size);
  }
  float(){
        //sets bubble floating from side to side
        //and top to bottom
        this.velX += random(-1, 1);
        this.velY += random(-1, 1);
        if(this.velY > 4){this.velY = 4}
        if(this.velY < -4){this.velY = -4}
        if(this.velX > 4){this.velX = 4}
        if(this.velX < -4){this.velX = -4}
        //checks to see if bubble would hit left or right edge
        if(
        ((this.originX + this.velX) > (width - this.size))
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

        if(
          ((this.originY + this.velY) > (height - this.size))
          ){
          this.velY = -1;
          }
          else if(
          ((this.originY + this.velY) < 0)
          ){
          this.velY = 1;
          }
          else{
          this.originY += this.velY;
          }
        
        }
}
const squareArray = [];
const topSquare = new SquareIter(255, 50, 400, 400, 0, 0);
function setup(){
    createCanvas(800, 800);
    background(0);
    angleMode(DEGREES);
    noFill();
    strokeWeight(1);
    rectMode(CENTER);
  }
  
  function draw(){
    //console.log(topSquare.originX + ", " + topSquare.originY);
    //let squareCopy = Object.assign({}, topSquare);
    background(0);
    let duplicateSquare = new SquareIter(topSquare.sqColor, topSquare.size, topSquare.originX, topSquare.originY, 0, 0);
    squareArray.push(duplicateSquare);
    //topSquare.drawSquare();
     for(let x = 0; x < squareArray.length; x++){
       squareArray[x].drawSquare();
       squareArray[x].update();
     }
    if(squareArray[0].size > 1600){
      //console.log("shifting");
      squareArray.shift();
    }
    topSquare.float();

  }

  function mousePressed(){
    noLoop();
  }