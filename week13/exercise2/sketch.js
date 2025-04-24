var slider;
var incrementVal = 0.0;
var rotateVal = 0.0;
function setup() {
  createCanvas(400, 400);
  background(220);
  angleMode(DEGREES);
  slider = createSlider(0,10,5,1);
}

function draw() {
  translate(width/2, height/2);
  let sinValue = sin(incrementVal);
  rotate(rotateVal);
  fill(125 + (sinValue * 125), 200,200);
  square(0,0,sinValue * 100);
  incrementVal += slider.value();
  rotateVal += 0.6;
}
