function computerPlay() {
    let random = Math.random();

    if (random <= 0.33) {
        random = "rock";
    }
    else if (random <= 0.67) {
        random = "paper";
    }
    else {
        random = "scissors";
    }

    return random;
}
console.log(computerPlay())

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return"You win! Rock beats scissors!";
    }
    else if (playerSelection == "rock" && computerSelection == "rock"){
        return "It's a Draw"
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock."
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats paper."
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a Draw";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! scissors beat paper";
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! rock beats scissors";
    } 
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a Draw";
    } 
    else {
        return "Something Went Wrong";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const result = prompt("Choose rock, paper, or scissors").toLowerCase();
        let computerSelection = computerPlay();

        console.log(playRound(result, computerSelection));

        if (result == "rock" && computerSelection == "paper") {
            computerScore++;
        }
        else if (result == "rock" && computerSelection == "scissors") {
            playerScore++;
        }
        else if (result == "rock" && computerSelection == "rock") {
            playerScore += 0;
            computerScore += 0;
        } else if (result == "paper" && computerSelection == "rock") {
            playerScore++;
        }
        else if (result == "paper" && computerSelection == "scissors") {
            computerScore++;
        }
        else if (result == "paper" && computerSelection == "paper") {
            playerScore += 0;
            computerScore += 0;
        }
        else if (result == "scissors" && computerSelection == "paper") {
            playerScore++;
        }
        else if (result == "scissors" && computerSelection == "rock") {
            computerScore++;
        }
        else if (result == "scissors" && computerSelection == "scissors") {
            playerScore += 0;
            computerScore += 0;
        }
        else {
            playerScore += 0;
            computerScore += 0;
        }

        console.log (playerScore)
    }

    if (playerScore > computerScore) {
        alert("You win!")
    }
    else if (computerScore > playerScore){
        alert("You lose!")
    }
    else {
        alert("Draw")
    }
}

game();
