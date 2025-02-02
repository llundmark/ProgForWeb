//define question objects and populate array
let entryOne = {
  question: "What is light as air but even a giant couldn't hold it for long?",
  answer: "breath"
}

let entryTwo = {
  question: "Where does today come before yesterday?",
  answer: "dictionary"
}

let entryThree = {
  question: "What disappears when you say its name?",
  answer: "silence"
}

let entryFour = {
  question: "It is the beginning of eternity, the end of time and space. It is the start of every end, the end of every place.",
  answer: "e"
}

let entryFive = {
  question: "This belongs to you, but everyone else uses it.",
  answer: "name"
}
let questionArray = [entryOne, entryTwo, entryThree, entryFour, entryFive];
//Take random number to find question for prompt
let index = Math.floor(Math.random() * 4);
console.log(index);

//take user input from window prompt, display question
let response = window.prompt(questionArray[index].question);

//output response and correct answer
window.alert("You answered " + response + ".\n"
  + "The correct answer was " + questionArray[index].answer
);


