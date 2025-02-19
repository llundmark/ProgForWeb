const cardSide = 100;
const gutterSize = 20;
const deckSize = 16;

class Card {
  cardFlip(x,y){
    if(1){

    }
  }

}
let deck = [];

function setup() {
  createCanvas(500, 650);
}

function draw() {
  background(220);
  //fillDeck();
  translate(gutterSize, 150);
  drawDeck();
}

function fillDeck(){
  for(let x = 0; x < deckSize; x++){
    deck.push({index: x});
  }
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

function mousePressed(){
  for(let i = 0; i < 16; i++){
    deck[i].cardFlip(mouseX, mouseY);
  }
}