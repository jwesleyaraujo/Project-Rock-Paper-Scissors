// This is function where the computer chose Paper, Rock or scissors

function getComputerChoice() {
    let computer = Math.floor((Math.random() * 3) + 1);
    // console.log(computer)
    if (computer == 1) {
        return "paper";
    } else if (computer == 2) {
        return "rock"
    } else {
        return "scissors"
    }
};

// console.log(getComputerChoice())

const playerSelection = "rock";

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "The user Win!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "The user Win!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "The user Win!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "The computer Win!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "The computer Win!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "The computer Win!"
    } else {
        return "Play again"
    }
}

console.log(playRound(playerSelection, computerSelection));

// I need to do the function for the user choice!
// I need to do the function for to play five rounds 