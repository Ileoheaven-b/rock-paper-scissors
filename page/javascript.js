//Score calculation and Game Logic
function getComputerChoice() {
    let computerSelectionMath = Math.floor(Math.random() * 3);
    switch (computerSelectionMath) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (computerSelection == playerSelection) {
        return "tie";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return "player";
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "computer";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "computer";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "player";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "player";
    }
    else return "computer"
}


//Events
let winner;
let playerScore = 0;
let computerScore = 0;

const buttons = Array.from(document.querySelectorAll('.btn'));
const scoreBoard = document.querySelector("#score-board");
scoreBoard.textContent = "0 - 0";
const announcerBoard = document.querySelector("#announcer-board");
announcerBoard.textContent = "Choose an option";

buttons.forEach((value) => {
    value.addEventListener('click', () => {
        winner = playRound(value.id);
        if (computerScore == 5) {
            computerScore = 0;
            playerScore = 0;
            announcerBoard.textContent = "You lost the game!";
        }
        else if (playerScore == 5) {
            computerScore = 0;
            playerScore = 0;
            announcerBoard.textContent = "You won the game!";
        }
        else if (winner == "computer") {
            computerScore++;
            announcerBoard.textContent = "You lost this round!";
        }
        else if (winner == "player") {
            playerScore++;
            announcerBoard.textContent = "You won this round!";
        }
        else if (winner == "tie") {
            announcerBoard.textContent = "Tie!";
        }
        scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    });
});
