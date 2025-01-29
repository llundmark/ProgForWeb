
const movieArray = ['No Country for Old Men', 'Terminator 2', 'Blade Runner', 'Spirited Away', 'John Wick'];
window.alert("Here are some of my favorite movies!\n" + movieArray.toString());
var userInput = window.prompt("What's a movie you like?");
movieArray.push(userInput);
window.alert("Here are some of my favorite movies, plus yours!\n" + movieArray.toString());
