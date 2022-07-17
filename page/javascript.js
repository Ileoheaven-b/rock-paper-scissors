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
const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach((value) => {
    value.addEventListener('click', () => {
        console.log(playRound(value.id));
    });
});
