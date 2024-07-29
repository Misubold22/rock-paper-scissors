const images = Array.from(document.querySelectorAll(".information-image"));

let humanChoice = '';

// Function to handle human choice
function getHumanChoice(callback) {
    images.forEach((image) => {
        image.addEventListener("click", () => {
            if (computerScore >= 5) {
                const message = document.querySelector('.game-result');
                message.textContent = "Game Over. You Lost!";
                return;
            } else if (humanScore >= 5) {
                const message = document.querySelector('.game-result');
                message.textContent = "You Won The Game!";
                return;
            }
            humanChoice = image.dataset.image;
            console.log(`Human choice: ${humanChoice}`);
            
            // Execute the callback with the human choice
            callback(humanChoice);
        });
    });
}

function handleChoice(choice) {
    playRound(choice, getComputerChoice());
}

// Initialize the choice handling
getHumanChoice(handleChoice);

// Function to randomly select the computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerGuess = '';
    
    if (randomNumber === 0) {
        computerGuess = 'Rock';
    } else if (randomNumber === 1) {
        computerGuess = 'Paper';
    } else {
        computerGuess = 'Scissors';
    }
    
    return computerGuess;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

let humanScore = 0;
updatePscore(humanScore);
let computerScore = 0;
updateCscore(computerScore);

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++; 
        updateCscore(computerScore);  
        const message = document.querySelector('.player-message');
        message.textContent = "You lose! Paper beats Rock!";
        
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        updatePscore(humanScore);
        const message = document.querySelector('.player-message');
        message.textContent = "You Win! Rock beats Scissors!";
        
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        const message = document.querySelector('.player-message');
        message.textContent = "Tie! No winner declared";
        
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        updatePscore(humanScore); 
        const message = document.querySelector('.player-message');
        message.textContent = "You Win! Paper beats Rock!";
        
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        const message = document.querySelector('.player-message');
        message.textContent = "Tie! No winner declared";
        
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++; 
        updateCscore(computerScore);
        const message = document.querySelector('.player-message');
        message.textContent = "You lose! Scissors beats Paper!";
        
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;  
        updateCscore(computerScore);
        const message = document.querySelector('.player-message');
        message.textContent = "You Lose! Rock beats Scissors!";
        
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++; 
        updatePscore(humanScore);  
        const message = document.querySelector('.player-message');
        message.textContent = "You Win! Scissors beats Paper!";
        
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        const message = document.querySelector('.player-message');
        message.textContent = "Tie! No winner declared";
    }
}