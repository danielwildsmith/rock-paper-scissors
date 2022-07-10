function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber == 0) {
        return 'Rock';
    } else if(randomNumber == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    // Tie condition
    if(playerSelection == computerSelection) {
        return "It's a tie!";
    }

    //Player win conditions
    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    //Player lose conditions
    if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerSelection = 'rock';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))