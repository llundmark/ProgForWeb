var audKersplat, audKapow, audJump, audWahay, audWeee, audYazoo;
let buttonArray = [];
var backImage;
class SoundButton {
  constructor(n, s, x, y){
    this.originX = x;
    this.originY = y;
    this.name = n;
    this.sound = s;
  }

  playSound(hitX, hitY){
    if(this.buttonHit(hitX, hitY)){
      this.sound.play();
    }
  }

  drawButton(){
    //console.log("button: " + this.originX + ", " + this.originY);
    fill(200);
    rect(this.originX, this.originY, 60, 30);
    fill(0);
    textAlign(CENTER);
    text(this.name, this.originX + 30, this.originY + 18);
  }

  buttonHit(x, y){
    //if mouse click is within bounds of card
    if((x >= this.originX) &&
      (x <= (this.originX + 60)) &&
      (y >= this.originY) &&
      (y <= (this.originY + 30))
    ){
    return true;
    }
    else{
      return false;
    }
  }
}


function preload(){
audKersplat = loadSound("sounds/Ker_Splat!.wav");
audKapow = loadSound("sounds/Kapow!.wav");
audJump = loadSound("sounds/Jump.wav");
audWahay = loadSound("sounds/Wah-Hay!.wav");
audWeee = loadSound("sounds/Weeeee!.wav");
audYazoo = loadSound("sounds/Yazoo!.wav");
backImage = loadImage("croc.jpg");
}

function setup() {
  createCanvas(512, 512);
  background(0);
  image(backImage, 0, 0);
  buttonArray.push(new SoundButton('Ker-Splat!', audKersplat, 20, 442));
  buttonArray[1] = new SoundButton('Kapow!', audKapow, 100, 442);
  buttonArray[2] = new SoundButton('Boink', audJump, 180, 442);
  buttonArray[3] = new SoundButton('Wah-Hay!', audWahay, 260, 442);
  buttonArray[4] = new SoundButton('Weeee!', audWeee, 340, 442);
  buttonArray[5] = new SoundButton('Yazoo!', audYazoo, 420, 442);
  for(let j = 0; j < 6; j++){
    buttonArray[j].drawButton();
  }
}

function mousePressed(){
  for(let i = 0; i < 6; i++){
    buttonArray[i].playSound(mouseX, mouseY);
  }
}

function draw() {
  noLoop();
}
