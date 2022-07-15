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

