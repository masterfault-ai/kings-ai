let randomNumber;
let attemptsLeft = 10;
let level = 1; // Default level is Easy (1)

const levelSelector = document.getElementById("levelSelector");
const userGuessInput = document.getElementById("userGuess");
const submitButton = document.getElementById("submitGuess");
const message = document.getElementById("message");
const attemptsLeftDisplay = document.getElementById("attemptsLeft");
const restartButton = document.getElementById("restartGame");
const gameSection = document.getElementById("gameSection");

// Event listener to start the game and set level
levelSelector.addEventListener("change", startGame);

submitButton.addEventListener("click", function () {
    const userGuess = parseInt(userGuessInput.value);

    // Validate the input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > getMaxRange()) {
        message.textContent = `Please enter a valid number between 1 and ${getMaxRange()}.`;
        message.style.color = "red";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You guessed the number!";
        message.style.color = "green";
        endGame();
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        message.style.color = "orange";
    } else {
        message.textContent = "Too high! Try again.";
        message.style.color = "orange";
    }

    attemptsLeftDisplay.textContent = attemptsLeft;

    if (attemptsLeft <= 0) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        message.style.color = "red";
        endGame();
    }

    // Clear the input field
    userGuessInput.value = "";
});

// Restart the game
restartButton.addEventListener("click", function () {
    startGame();
});

// Start a new game based on selected level
function startGame() {
    // Get the selected level from the dropdown
    level = parseInt(levelSelector.value);

    // Set the maximum range based on level
    randomNumber = Math.floor(Math.random() * getMaxRange()) + 1;
    attemptsLeft = 10;

    attemptsLeftDisplay.textContent = attemptsLeft;
    message.textContent = "";

    // Show the game section and hide the level selector
    gameSection.style.display = "block";
    levelSelector.style.display = "none";
}

// Get the max range for random number based on the selected level
function getMaxRange() {
    if (level === 1) {
        return 50; // Easy (1 - 50)
    } else if (level === 2) {
        return 100; // Medium (1 - 100)
    } else if (level === 3) {
        return 200; // Hard (1 - 200)
    }
}

// End the game
function endGame() {
    userGuessInput.disabled = true;
    submitButton.disabled = true;
    restartButton.style.display = "inline-block";
}
