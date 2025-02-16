const cardSide = 100;
const gutterSize = 20;

/*let card = {

};

let deck = [];*/

function setup() {
  createCanvas(500, 650);
}

function draw() {
  background(220);
  translate(gutterSize, 150);
  drawDeck();
}

function drawDeck(){
  //Drawing 16 cards, 4 rows of 4
  for(let row = 0; row < 4; row++){
    push();
    for(let column = 0; column < 4; column++){
      drawCard();
      translate(cardSide + gutterSize, 0);
    }
    pop();
    translate(0, cardSide + gutterSize);
  }
}

function drawCard(){
  //function for drawing individual card
  fill("red");
  square(0, 0, cardSide);
}