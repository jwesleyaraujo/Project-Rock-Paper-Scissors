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

// const playerSelection = prompt("Chose, Rock, Paper or Scissors? ").toLowerCase();
// const computerSelection = getComputerChoice();

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
        return "Tie"
    }
}

let userCounter = 0;
let computerCounter = 0;
let tie = 0;

// I need to do the function for the user choice!
// I need to do the function for to play five rounds 

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Chose, Rock, Paper or Scissors? ").toLowerCase();
        //console.log("User choice: " + playerSelection)
        const computerSelection = getComputerChoice();
        //console.log("Computer choice: " + computerSelection)
        const round = playRound(playerSelection, computerSelection);
        //console.log(round)
        if (round == "The user Win!") {
            userCounter = userCounter + 1;

        } else if (round == "The computer Win!") {
            computerCounter++;

        } else {
            tie++;

        }

        //console.log("i: " + i)
    }
    console.log("User counter: " + userCounter)
    console.log("Computer counter: " + computerCounter)
    console.log("Tie counter: " + tie)
}

console.log(game())