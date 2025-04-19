var noteA, noteB, noteC, noteD, noteE, noteF, noteG;
var drum, drumButt;
let buttonArray = [];
var backImage;
class DrumMachine {
  constructor(s, x, y){
    this.name = "Drum Machine"
    this.originX = x;
    this.originY = y;
    this.sound = s;
    this.isPressed = false;
  }

  drawButton(){
    //console.log("button: " + this.originX + ", " + this.originY);
    if(this.isPressed){
      fill(150);
    }
    else{
    fill(255);
    }
    rect(this.originX, this.originY, 120, 30, 10);
    fill(0);
    textAlign(CENTER);
    text(this.name, this.originX + 60, this.originY + 20);
  }

  buttonHit(x, y){
    //if mouse click is within bounds of button
    if((x >= this.originX) &&
      (x <= (this.originX + 140)) &&
      (y >= this.originY) &&
      (y <= (this.originY + 40))
    ){
    return true;
    }
    else{
      return false;
    }
  }

  drumPlay(x, y){
    if(this.buttonHit(x,y)){
      if(this.isPressed){
        this.isPressed = false;
        this.sound.pause();
      }
      else{
        this.isPressed = true;
        this.sound.loop()
      }
    }
  }
}
class SoundButton {
  constructor(n, s, x, y){
    this.originX = x;
    this.originY = y;
    this.name = n;
    this.sound = s;
    this.isPressed = false;
  }

  playSound(hitX, hitY){
    if(this.buttonHit(hitX, hitY)){
      this.sound.play();
    }
  }

  drawButton(){
    //console.log("button: " + this.originX + ", " + this.originY);
    if(this.isPressed){
      fill(150);
    }
    else{
    fill(255);
    }
    rect(this.originX, this.originY, 30, 30, 10);
    fill(0);
    textAlign(CENTER);
    text(this.name, this.originX + 15, this.originY + 20);
  }

  buttonHit(x, y){
    //if mouse click is within bounds of button
    if((x >= this.originX) &&
      (x <= (this.originX + 30)) &&
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
noteA = loadSound("sounds/A1.mp3");
noteB = loadSound("sounds/B1.mp3");
noteC = loadSound("sounds/C2.mp3");
noteD = loadSound("sounds/D2.mp3");
noteE = loadSound("sounds/E2.mp3");
noteF = loadSound("sounds/F2.mp3");
noteG = loadSound("sounds/G2.mp3");
drum = loadSound("sounds/drumbit.wav");
backImage = loadImage("piano.png");
}

function setup() {
  createCanvas(658, 640);
  background(0);
  image(backImage, 0, 0);
  buttonArray[0] = new SoundButton('z', noteA, 35, 520);
  buttonArray[1] = new SoundButton('x', noteB, 120, 520);
  buttonArray[2] = new SoundButton('c', noteC, 210, 520);
  buttonArray[3] = new SoundButton('v', noteD, 310, 520);
  buttonArray[4] = new SoundButton('b', noteE, 400, 520);
  buttonArray[5] = new SoundButton('n', noteF, 495, 520);
  buttonArray[6] = new SoundButton('m', noteG, 585, 520);
  drumButt = new DrumMachine(drum, 260, 590);
}

function mousePressed(){
  for(let i = 0; i < 7; i++){
    buttonArray[i].playSound(mouseX, mouseY);
  }
  drumButt.drumPlay(mouseX, mouseY);
}

function keyPressed() {
  if (key === 'z') {
    buttonArray[0].playSound(35, 520);
    buttonArray[0].isPressed = true;
  } else if (key === 'x') {
    buttonArray[1].playSound(120, 520);
    buttonArray[1].isPressed = true;
  } else if (key === 'c') {
    buttonArray[2].playSound(210, 520);
    buttonArray[2].isPressed = true;
  } else if (key === 'v') {
    buttonArray[3].playSound(310, 520);
    buttonArray[3].isPressed = true;
  } else if (key === 'b') {
    buttonArray[4].playSound(400, 520);
    buttonArray[4].isPressed = true;
  } else if (key === 'n') {
    buttonArray[5].playSound(495, 520);
    buttonArray[5].isPressed = true;
  } else if (key === 'm') {
    buttonArray[6].playSound(585, 520);
    buttonArray[6].isPressed = true;
}
}

function keyReleased(){
  if (key === 'z') {
    buttonArray[0].isPressed = false;
  } else if (key === 'x') {
    buttonArray[1].isPressed = false;
  } else if (key === 'c') {
    buttonArray[2].isPressed = false;
  } else if (key === 'v') {
    buttonArray[3].isPressed = false;
  } else if (key === 'b') {
    buttonArray[4].isPressed = false;
  } else if (key === 'n') {
    buttonArray[5].isPressed = false;
  } else if (key === 'm') {
    buttonArray[6].isPressed = false;
}
}
function draw() {
  for(let j = 0; j < 7; j++){
    buttonArray[j].drawButton();
  }
  drumButt.drawButton();
}
