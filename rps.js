//This is a player vs computer RPS game

//Define our string variables aka choices
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Function for the computer's choice
function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 0.34) {
        return rock;}
    else if (randNum >= 0.34 && randNum < 0.67) 
        {return paper;}
    else return scissors;
}

//button linking
const rockBut = document.querySelector('#rock');
const paperBut = document.querySelector('#paper');
const scissorsBut = document.querySelector('#scissors');

//Score variables
let humanScore = 0;
let computerScore = 0;

//message display variable
const display = document.querySelector('#message');

//Round function. Compares choices, awards winner a point, and alerts user to who won.
function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == scissors) {
        humanScore = humanScore + 1;
        display.textContent = 'Great! You win this round.';
    } else if (humanChoice == paper && computerChoice == rock) {
        humanScore = humanScore + 1;
        display.textContent = 'Great! You win this round.';
    } else if (humanChoice == scissors && computerChoice == paper) {
        humanScore = humanScore + 1;
        display.textContent = 'Great! You win this round.';
    } else if (humanChoice == rock && computerChoice == paper) {
        computerScore = computerScore + 1;
        display.textContent = 'Yikes! You lose this round.';
    } else if (humanChoice == paper && computerChoice == scissors) {
        computerScore = computerScore + 1;
        display.textContent = 'Yikes! You lose this round.';
    } else if (humanChoice == scissors && computerChoice == rock) {
        computerScore = computerScore + 1;
        display.textContent = 'Yikes! You lose this round.';
    } else {display.textContent = "Tie! Go again.";}
}

//Appends score divs and updates with proper score
const hScore = document.querySelector('#humanScore');
const cScore = document.querySelector('#computerScore');
function updateScore () {
    hScore.textContent = "Human Score: " + humanScore;
    cScore.textContent = "Computer Score: " + computerScore;
}
updateScore()

//checks for a winner
function gameCheck() {
    if (humanScore == 5 && computerScore < humanScore) {
        display.textContent = "You WIN!";
        alert("You WIN!");
    } else if (computerScore == 5 && humanScore < computerScore) {
        display.textContent = "You LOSE!";
        alert("You LOSE!");
    }
}

//function wrapper to easily call both score components
function scoreSystem() {
    updateScore();
    gameCheck();
}

rockBut.addEventListener("click", () => {playRound(rock, getComputerChoice()); scoreSystem()});
paperBut.addEventListener("click", () => {playRound(paper, getComputerChoice()); scoreSystem()});
scissorsBut.addEventListener("click", () => {playRound(scissors, getComputerChoice()); scoreSystem()});