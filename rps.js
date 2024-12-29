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

//console.log(getComputerChoice())