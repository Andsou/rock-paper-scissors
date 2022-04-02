function computerPlay() {
    let random = Math.random();

    if (random <= 0.33) 
    {
        random = "rock";
    }
    else if (random <= 0.67) 
    {
        random = "paper";
    }
    else 
    {
        random = "scissors";
    }

    return random;
}

function playRound(playerSelection, computerSelection) 
{
    let h2 = document.getElementById("start");
    const body = document.querySelector("body");
    let result = "";

    if (playerSelection == "rock" && computerSelection == "paper")
    {
        result =  "You chose Rock! Computer Chose Paper!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") 
    {
        result = "You chose Rock! Computer Chose Scissors!";
    }
    else if (playerSelection == "rock" && computerSelection == "rock")
    {
        result = "You chose Rock! Computer Chose Rock!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") 
    {
        result = "You chose Paper! Computer Chose Rock!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") 
    {
        result = "You chose Paper! Computer Chose Scissors!"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") 
    {
        result = "You chose Paper! Computer Chose Paper!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") 
    {
        result = "You chose Scissors! Computer Chose Paper!";
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock") 
    {
        result = "You chose Scissors! Computer Chose Rock!";
    } 
    else if (playerSelection == "scissors" && computerSelection == "scissors")
     {
        result = "You chose Scissors! Computer Chose Scissors!";
    } 
    else 
    {
        result = "Something Went Wrong";
    }

    h2.textContent = result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let player = document.getElementById('player-score');
    let computer = document.getElementById('computer-score');

    const buttons = document.querySelectorAll('button');
    let result = "";

    buttons.forEach((button) => {
       
        button.addEventListener('click', () => {

            let computerSelection = computerPlay();

            playRound(button.value, computerSelection);

            result = button.value;

            if (result == "rock" && computerSelection == "paper") {
                computerScore++;          
            } 

            if (result == "rock" && computerSelection == "scissors") {
                playerScore++;         
            } 

            if (result == "rock" && computerSelection == "rock") {
                playerScore += 0;
                computerScore += 0;
            } 
            
            if (result == "paper" && computerSelection == "rock") {
                playerScore++;
            } 

            if (result == "paper" && computerSelection == "scissors") {
                computerScore++;
            } 

            if (result == "paper" && computerSelection == "paper") {
                playerScore += 0;
                computerScore += 0;
            }

            if (result == "scissors" && computerSelection == "paper") {
                playerScore++;           
            }

            if (result == "scissors" && computerSelection == "rock") {
                computerScore++;           
            } 

            if (result == "scissors" && computerSelection == "scissors") {
                playerScore += 0;
                computerScore += 0;
            }
            
            player.innerHTML = playerScore
            computer.innerHTML = computerScore;

            let body = document.querySelector("body");
            let p = document.createElement("p");
        
            if (playerScore == 5) {
                p.textContent = "You Win!";           
            } else if (computerScore == 5) {
                p.textContent = "You Lose!";
            }

            const buttons = document.querySelectorAll('button');
            if (playerScore == 5 || computerScore == 5) {
                buttons.forEach((button) => {
                    button.disabled = true;
                });
            }

            body.appendChild(p);           
        });
    });
}

game();