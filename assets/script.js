const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

const resultsMatrix = {
    "rock": ["lizard", "scissors"]
    "paper": ["rock", "spock"]
    "scissors": ["paper", "lizard"]
    'lizard': ["spock", "paper"]
    'spock': ["scissors", "rock"]
};

let userChoice;
let computerChoice;
let result;

//Event listener response when button is clicked for User choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

//Function to generate computer choice at random
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = 'rock';
    };
    if (randomNumber === 2) {
        computerChoice = 'scissors';
    };
    if (randomNumber === 3) {
        computerChoice = 'paper';
    };
    if (randomNumber === 4) {
        computerChoice = 'lizard';
    };
    if (randomNumber === 5) {
        computerChoice = 'spock';
    };
    computerChoiceDisplay.innerHTML = computerChoice;
};

//Function with all the possible outcomes
function getResult() {
    if (computerChoice === userChoice) return "It's a draw!";

    if (resultsMatrix[userChoice].includes(computerChoice)) return "You win!";

    return "You lose!";

};
   
    