const comp = document.getElementById('computer');
const player = document.getElementById('user');
const res = document.getElementById('result');
// query Selector to select all buttons in HTML file in choices
let userchoice; // variables creation
let computerchoice;
let result;
const possibleChoices = document.querySelectorAll('button'); // can be done by className as well
// Add event Listener to add or change properties o element when certain things happen in webpage
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userchoice = e.target.id;
    // storing the target id of the value entered by the user (Rock, Paper, Scissor)
    player.innerHTML = userchoice;
    // Storing the I'd of choice to comp constant (returns HTML content of a tag)
    getComputerChoice();
    getResult();
}));
// function for getting computer choice
function getComputerChoice() { // function definition
    const num = Math.floor(Math.random() * 3) + 1; // can use possible choices length function as well
    if (num === 1) { computerchoice = "rock"; }
    if (num === 2) { computerchoice = "scissor "; }
    if (num === 3) { computerchoice = "paper"; }
    comp.innerHTML = computerchoice;
}

function getResult() {
    if (computerchoice === userchoice) {
        result = "Its a Draw !!";
    }
    if (computerchoice === "rock" && userchoice === "scissor") {
        result = "You Lost !!";
    }
    if (computerchoice === "scissor" && userchoice === "paper") {
        result = "You Lost !!";
    }
    if (computerchoice === "paper" && userchoice === "rock") {
        result = "You Lost !!";
    }
    if (computerchoice === "rock" && userchoice === "paper") {
        result = "You Won !!";
    }
    if (computerchoice === "scissor" && userchoice === "rock") {
        result = "You Won !!";
    }
    if (computerchoice === "paper" && userchoice === "scissor") {
        result = "You Won !!";
    }
    res.innerHTML = result;
}