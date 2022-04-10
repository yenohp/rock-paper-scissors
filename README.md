# rock-paper-scissors
The Odin Project: Rock Paper Scissors
Create a simple rock paper scissors game in the console of a webpage.


Functions:
computerPlay()
playerInput()
playRound()
game(playerSelection,
computerSelection);

Pseudo:
// Create a function that generates one of three choices (rock-paper-scissors)
Get a random number and assign a choice to said value.
Return value.
// Create a function that gets user input for choice
Catch parameter in game call. (since we're going through console)
Return consistent value regardless of input (don't have error catches for misspells or nonchoices)
// Create a function that compares two choices and decides winner
Get both return values
Compare each scenario
Return appropriate result.

==================================
UI branch:
// Add three buttons that correspond to choices
Add eventlisteners onto button presses that call playRound()
Add div displaying results of round
Display running score and announce winner once one player reaches 5 points
Commit