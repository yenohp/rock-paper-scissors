// Three buttons
const rockBttn = document.querySelector('.rock');
const paperBttn = document.querySelector('.paper');
const scissorsBttn = document.querySelector('.scissors');
// Div
const scoreboard = document.querySelector('#scoreboard');
const playerScore = document.querySelector('.playerScore');
let playerPoints = 0;
const computerScore = document.querySelector('.computerScore');
let computerPoints = 0;

playerScore.innerText = `PLAYER SCORE: ${playerPoints}`;
computerScore.innerText = `COMPUTER SCORE: ${computerPoints}`;
// Generate random computer choice of rock-paper-scissors
function computerPlay() {
    let rand = Math.floor(Math.random() * 3); // 0-2
    let choices = ['rock', 'paper', 'scissors'];
    return choices[rand];
}
// Don't need to do an input check -- will replace with hardcoded values attached to buttons
function playerInput(target) {
    let playerChoice = target;
    return playerChoice.toLowerCase();
}

// Functions for return messages
function messages(condition, computerChoice, playerChoice) {

    let options = ['win', 'lose', 'draw'];
    if (condition == options[0]) {
        playerPoints++;
        playerScore.innerText = `PLAYER SCORE: ${playerPoints}`;
        game();
        // console.log(`You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
    } else if (condition == options[1]) {
        computerPoints++;
        computerScore.innerText = `COMPUTER SCORE: ${computerPoints}`;
        game();
        // console.log(`You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`);
    } else {
        // console.log('Draw!');
    }
}

// DOM Method creator

// Display choices
function picks(computerChoice, playerChoice) {
    console.log('--------------------------------------');
    console.log(`Player chose "${playerChoice}"`)
    console.log(`Computer chose "${computerChoice}"`);
    console.log('--------------------------------------');
}
// Play a single round
function playRound(computerChoice, playerPick) {

    computerChoice = computerPlay();
    playerChoice = playerInput(playerPick);

    // Compare chocies
    if (computerChoice == 'rock') {
        picks(computerChoice, playerChoice);
        if (playerChoice == 'rock') {
            messages('draw', computerChoice, playerChoice);
        } else if (playerChoice == 'paper') {
            messages('win', computerChoice, playerChoice);
        } else {
            messages('lose', computerChoice, playerChoice);
        }
    } else if (computerChoice == 'paper') {
        picks(computerChoice, playerChoice);
        if (playerChoice == 'rock') {
            messages('lose', computerChoice, playerChoice);
        } else if (playerChoice == 'paper') {
            messages('draw', computerChoice, playerChoice);
        } else {
            messages('win', computerChoice, playerChoice);
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
function winner(playerPoints, computerPoints) {
    const announce = document.createElement('h2');
    if (playerPoints == 5) {
        announce.innerText = 'PLAYER WINS!';
        scoreboard.appendChild(announce);
    } else {
        announce.innerText = 'COMPUTER WINS!';
        scoreboard.appendChild(announce);
    }
}
// Manipulate number of rounds
function game() {
    if (playerPoints == 5 || computerPoints == 5) {
        rockBttn.disabled = true;
        paperBttn.disabled = true;
        scissorsBttn.disabled = true;

        winner(playerPoints, computerPoints);
    }
}

// Event listeners on button clicks
rockBttn.addEventListener('click', (e) => {
    let playerPick = e.path[0].innerText;
    playRound('', playerPick);
});
paperBttn.addEventListener('click', (e) => {
    let playerPick = e.path[0].innerText;
    playRound('', playerPick);
});
scissorsBttn.addEventListener('click', (e) => {
    let playerPick = e.path[0].innerText;
    playRound('', playerPick);
});