var gameOne = {
  title: "Kirby's Adventure",
  numberOfPlayers: 1,
  system: "NES",
  genre: "Action Platformer",
  releaseDate: "1993"
}

var gameTwo = {
  title: "Wild Arms",
  numberOfPlayers: 1,
  system: "Playstation",
  genre: "Role-Playing",
  releaseDate: "1997"
}

var gameThree = {
  title: "Bioshock",
  numberOfPlayers: 1,
  system: "XBox",
  genre: "First-Person Shooter",
  releaseDate: "2007"
}

const gamesArray = [gameOne, gameTwo, gameThree];

let userInput = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
userInput = Number(userInput);
if(userInput < 1 || userInput > 3){
  window.alert("That's not a number between 1 and 3.");
}
else{
  userInput--;
  window.alert("You selected " + gamesArray[userInput].title + ", which is a " + 
    gamesArray[userInput].numberOfPlayers + "-player game for the " +
    gamesArray[userInput].system + ". It is a game in the " +
    gamesArray[userInput].genre + " genre and was released in " +
    gamesArray[userInput].releaseDate);
}