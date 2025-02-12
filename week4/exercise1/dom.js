//Initializing objects for myEmptyDiv tag and new h1 tag
const emptyDiv = document.querySelector("#myEmptyDiv");
const header = document.createElement("h1");
header.style.textAlign = "center";

//Array of colors to use for background
let colorIndex = 0;
const colors = ["red", "orange",  "yellow", "green", "blue", "violet", "pink", "teal", "magenta", "cyan"];
header.innerHTML = "introducing<br>'Ralph' the Wonder Llama";

//listener picks a random color from array and sets background color on click
header.addEventListener("click", ()=>{
    colorIndex = Math.floor(Math.random() * 9);
    document.body.style.backgroundColor = colors[colorIndex];
});

emptyDiv.appendChild(header);