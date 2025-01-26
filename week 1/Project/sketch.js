var userInput = window.prompt("What's your name?");
function setup() {
  //Set Up canvas and background
  createCanvas(600, 600);
  background(220,220,255);
  strokeWeight(0);
  fill(255,255,255);
  rect(0,300,800,600);
  drawIgloo();
}

function draw() {
  drawCreature();
  drawWordBubble();
}

function drawCreature(){
  //Draws Snow Creature
  fill(255);
  stroke(220,220,220);
  strokeWeight(6);
  circle(200, 320, 80);
  circle(210, 260, 60);
  //scarf
  stroke(255, 40, 40);
  fill(255,0,0);
  quad(210, 230, 245,260, 215, 265, 190, 230);
  //head
  fill(255);
  stroke(220,220,220);
  circle(200, 230, 40);
  fill(0);
  strokeWeight(0);
  //buttons
  circle(200, 320, 10);
  circle(210, 270, 10);
  //eyes
  circle(190, 220, 10);
  circle(217, 226, 10);
  stroke(0);
  strokeWeight(1);
  arc(198,235, 7, 14, 0, PI);
}

function drawIgloo(){
  //Draws Igloo behind Snow Creature
  stroke(240);
  strokeWeight(3);
  arc(500, 310, 80, 80, PI, PI+PI);
  //strokeWeight(0);
  //rect(470, 290, 30, 40);
  strokeWeight(3);
  line(470, 287, 480, 287);
  arc(460, 310, 48, 48, PI, PI+PI);
  fill(150);
  arc(460,310,32,32,PI,PI+PI);
}

function drawWordBubble(){
strokeWeight(0);
fill(255);
triangle(240, 200, 280, 140, 220, 210);
ellipse(300, 160, 180, 100);
textSize(14);
fill(0);
text("Hi, " + userInput + "!", 270, 165);
}