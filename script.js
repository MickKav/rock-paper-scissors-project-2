const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let lives = 3;
let userScore = 0;
let computerScore = 0;

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
    computerChoiceDisplay.innerHTML = computerChoice;
};

// function to update the lives display
function updateLives() {
    let livesDisplay = '';
    for (let i = 0; i < lives; i++) {
    livesDisplay += '<span class="heart">♥</span>';
    }
    document.querySelector('#lives').innerHTML = livesDisplay;
    }


function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
    return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
    return "You win!";
    } else {
    return "You lose!";
    }
    }
    resultDisplay.innerHTML = result;
    