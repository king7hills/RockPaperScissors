//This is a player vs computer RPS game
//The game is currently played within the console

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

//Function for the player's choice
function getHumanChoice(input) {
    let choice = prompt("Please type rock, paper, or scissors.")
    if (choice.toLowerCase() == rock) {
        return rock;
    } else if (choice.toLowerCase() == paper) {
        return paper;
    } else if (choice.toLowerCase() == scissors) {
        return scissors;
    } else return "Please refresh and try again"
}

//Score variables
let humanScore = 0;
let computerScore = 0;

//Round function. Compares choices, awards winner a point, and alerts user to who won.
function playRound(humanChoice, computerChoice) {
    if (humanChoice == rock && computerChoice == scissors) {
        humanScore = humanScore + 1;
        console.log('Great! You win this round.')
    } else if (humanChoice == paper && computerChoice == rock) {
        humanScore = humanScore + 1;
        console.log('Great! You win this round.')
    } else if (humanChoice == scissors && computerChoice == paper) {
        humanScore = humanScore + 1;
        console.log('Great! You win this round.')
    } else if (humanChoice == rock && computerChoice == paper) {
        computerScore = computerScore + 1;
        console.log('Yikes! You lose this round.')
    } else if (humanChoice == paper && computerChoice == scissors) {
        computerScore = computerScore + 1;
        console.log('Yikes! You lose this round.')
    } else if (humanChoice == scissors && computerChoice == rock) {
        computerScore = computerScore + 1;
        console.log('Yikes! You lose this round.')
    } else {console.log("Tie! Go again.")}
}

/*Game function
function playGame () {
    let roundsWon = humanScore + computerScore;
    while (roundsWon < 5) {
        //Store choices as variables
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        //Play a round
        playRound(humanSelection, computerSelection);
        //updates roundsWon within the while loop. Ties are not counted (just like real life)
        roundsWon = humanScore + computerScore;
        //used for debug console.log(roundsWon)
    }
    if (humanScore > computerScore) {
        console.log("You win! :)");
    } else console.log("You lose. :(");
}*/

//playGame()