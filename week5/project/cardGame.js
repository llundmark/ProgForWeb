const cardSide = 100;
const gutterSize = 20;
const deckSize = 16;
let pairCheck = false;
let firstIndex = 0;
let cardBack;
let imageUrls = ["images/SpongeBob_small.png", "images/gary_small.png", 
  "images/Mr._Krabs_small.png", "images/Mrs._Puff_small.png", 
  "images/Patrick_small.png", "images/Plankton_small.png", 
  "images/Sandy_small.png", "images/Squidward_small.png"];
let score = 0;
class Card {
  constructor(i, x, y, urlIndex){
    this.index = i;
    this.originX = x;
    this.originY = y
    this.flipped = false;
    this.imageIndex = urlIndex;
    this.cardFront = loadImage(imageUrls[urlIndex]);
  }

  cardHit(x, y){
    //if mouse click is within bounds of card
    if((x >= this.originX) &&
      (x <= (this.originX + cardSide)) &&
      (y >= this.originY) &&
      (y <= (this.originY + cardSide))
    ){
    return true;
    }
    else{
      return false;
    }
  }
  cardFlip(x,y){
    //checks if card is clicked by mouse
    if(this.cardHit(x,y)){
      //checks if card already flipped (previous matches)
      if(!this.flipped){
        //checks if card is first of pair clicked
        if(pairCheck){
          //card clicked is second of pair clicked
          this.flipped = true;
          pairCheck = false;
          if(cardMatch(this.index)){
            score++;
          }
          else{
              //cards flip back over after delay
              window.setTimeout(() => {
                this.flipped = false;
                shuffledDeck[firstIndex].flipped = false;
              }, 1000);
          }
        }
        else{
          //if first, flips card,
          //sets pair-check flag to true and firstIndex to index of card
          this.flipped = true;
          pairCheck = true;
          firstIndex = this.index;
        }
    }
    }
  }
  drawCard(){
    if(this.flipped){
      image(this.cardFront, this.originX, this.originY);
    }
    else{
      image(cardBack, this.originX, this.originY);
    }
  }

}
let deck = [];
let shuffledDeck = [];

function setup() {
  createCanvas(500, 650);
  cardBack = loadImage("images/patchy.jpg");
  fillDeck();
  shuffledDeck = deckShuffle(deck);
  //shuffledDeck = deck;
}

function draw() {
  background(150);
  textSize(44);
  textAlign(CENTER);
  fill(255);
  text("Nautical Nonsense", 250, 60);

  //translate(0, 30);
  textSize(20);
  textAlign(LEFT);
  text("Score: " + score, 20, 100);
  //translate(0, 120);
  drawDeck();
  if(score === 8){
    fill("yellow");
    textSize(28);
    textAlign(RIGHT);
    text("You Win!", 480, 100);
    noLoop();
  }
}

function deckShuffle(array){
  //console.log("shuffling");
  let j;
  let temp;
    for (let i = array.length - 1; i > 0; i--) { 
      j = Math.floor(Math.random() * (i + 1));
      //console.log(i + ", " + j);
      temp = new Card(array[i].index, array[i].originX, array[i].originY, array[i].imageIndex);
      array[i].originX = array[j].originX;
      array[i].originY = array[j].originY;
      array[j].originX = temp.originX;
      array[j].originY = temp.originY;
      array[i].index = i;
    } 
    return array;  
}

function fillDeck(){
  let cardX = 20;
  let cardY = 120;
  //let cardFront;
  let cardIndex = 0;
  for(let x = 0; x < deckSize; x++){
    if(cardX > 400){
      cardX = 20;
      cardY += (cardSide + gutterSize);
    }
    //push two matching card objects into array
    //console.log(cardIndex);
    deck.push(
      new Card(x, cardX, cardY, cardIndex)
    );
    cardX += (cardSide + gutterSize);
    x++;
    if(cardX > 400){
      cardX = 20;
      cardY += (cardSide + gutterSize);
    }
    //console.log(cardIndex);
    deck.push(
      new Card(x, cardX, cardY, cardIndex)
    );
    cardX += (cardSide + gutterSize);
    cardIndex ++;
  }
}

function drawDeck(){
  //Drawing 16 cards, 4 rows of 4
  for(let f = 0; f < deckSize; f++){
    shuffledDeck[f].drawCard();
  }
}

function mousePressed(){
  for(let i = 0; i < 16; i++){
    shuffledDeck[i].cardFlip(mouseX, mouseY);
  }
}

function cardMatch(k){
  //console.log(shuffledDeck[firstIndex].imageIndex + ", " + shuffledDeck[k].imageIndex);
  //console.log("First index: " + firstIndex);
  if(shuffledDeck[firstIndex].imageIndex === shuffledDeck[k].imageIndex){
    return true;
  }
  else{
    return false;
  }
}