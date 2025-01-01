# RockPaperScissors
Rock, paper, scissors game project

This is a Rock, Paper, Scissors game as a project with The Odin Project

Start date: 12.28.24
The initial version will be a game played within the console. Later on, a GUI will be added.

Computer choice is determined by a random number. Choice ranges are divided into thirds.
Human choice is an input. Currently works if the user inputs any case version of rock paper or scissors. Malfunctions for other words.

Rounds compare each possible outcome. Not sure if there is a more efficient way to compare the variables.
The game uses a while loop, updating the roundsWon variable each time a round is won.
In real life rock, paper, scissors, ties do not count toward 'best of' matches. The same is true here.

I had some trouble initially with the while loop. I realized after adding a console.log to my round keeping variable
that the rounds were not updating. My variables were not within the while loop. This correction and adding an update after the round
function ran solved the issue.

The game works now. It is by no means spectacular, but it completes the assignment. I am following the recommendation to not embellish this project
and save my time and energy for portfolio pieces.

Completed on 12.28.24

1.1.25 Begin work on GUI. Saved as a new branch.
Added clickable buttons for the user input. Each button calls the playRound function and displays on the page the result of the round.
Created a more robut system for score tracking and game win status. A wrapper function calls the score update function, then the win status function.
Each round calls the score system to update scores and check for win status.

Obviously, a lot more could go into this game in terms of a prettier user interface and features, but this current iteration fulfills the requirements of the assignment.