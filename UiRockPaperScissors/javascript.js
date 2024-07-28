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