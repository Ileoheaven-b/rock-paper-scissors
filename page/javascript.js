let computerSelection;
let playerSelection;

function getComputerChoice() {
    let computerSelectionMath = Math.floor(Math.random() * 3);
    switch (computerSelectionMath) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
}

function playRound() {
    playerSelection = prompt("Enter your choice");
    playerSelection = playerSelection.toLowerCase();
    getComputerChoice();
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner;
    for (let i = 1; i <= 3; i++) {
        winner = playRound();
        console.log("for loop: " + i);
        if (winner == "tie") {
            console.log("Tie!");
        }
        else if (winner == "computer") {
            computerScore++;
            console.log("Lose!");
        }
        else if (winner == "player") {
            playerScore++;
            console.log("Win!");
        }
    }
    if (computerScore > playerScore) {
        alert("You lost! The score is: " + playerScore + " - " + computerScore);
    }
    else if (computerScore == playerScore) {
        alert("Tie! The score is: " + playerScore + " - " + computerScore);
    }
    else alert("You Won! The score is: " + playerScore + " - " + computerScore);
}