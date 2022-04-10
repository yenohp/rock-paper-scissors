// Generate random computer choice of rock-paper-scissors
function computerPlay() {
    let rand = Math.floor(Math.random() * 3); // 0-2
    let choices = ['rock', 'paper', 'scissors'];
    return choices[rand];
}
// Don't need to do an input check -- will replace with hardcoded values attached to buttons
function playerInput() {
    let playerChoice = prompt('Rock, paper, or scissors?');
    return playerChoice.toLowerCase();
}

// Functions for return messages
function messages(condition, computerChoice, playerChoice) {
    let options = ['win', 'lose', 'draw'];
    if (condition == options[0]) {
        return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    } else if (condition == options[1]) {
        return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    } else {
        return 'Draw!';
    }
}
// Display choices
function picks(computerChoice, playerChoice) {
    console.log('--------------------------------------');
    console.log(`Player chose "${playerChoice}"`)
    console.log(`Computer chose "${computerChoice}"`);
    console.log('--------------------------------------');
}
// Play a single round
function playRound(computerChoice, playerChoice) {

    computerChoice = computerPlay();
    playerChoice = playerInput();

    // Compare chocies
    if (computerChoice == 'rock') {
        picks(computerChoice, playerChoice);
        if (playerChoice == 'rock') {
            return messages('draw', computerChoice, playerChoice);
        } else if (playerChoice == 'paper') {
            return messages('win', computerChoice, playerChoice);
        } else {
            return messages('lose', computerChoice, playerChoice);
        }
    } else if (computerChoice == 'paper') {
        picks(computerChoice, playerChoice);
        if (playerChoice == 'rock') {
            return messages('lose', computerChoice, playerChoice);
        } else if (playerChoice == 'paper') {
            return messages('draw', computerChoice, playerChoice);
        } else {
            return messages('win', computerChoice, playerChoice);
        }
    } else {
        picks(computerChoice, playerChoice);
        if (playerChoice == 'rock') {
            return messages('win', computerChoice, playerChoice);
        } else if (playerChoice == 'paper') {
            return messages('lose', computerChoice, playerChoice);
        } else {
            return messages('draw', computerChoice, playerChoice);
        }
    }

}
// Manipulate number of rounds
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }

}
