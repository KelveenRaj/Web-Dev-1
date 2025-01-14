const messageElement = document.querySelector(".message");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-btn");
const guessesElement = document.querySelector(".guesses");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuesses = [];
let attemptsLeft = 10;

guessButton.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  previousGuesses.push(userGuess);
  attemptsLeft--;

  if (userGuess === randomNumber) {
    messageElement.textContent = "Correct! You win!";
    guessButton.disabled = true;
  } else if (attemptsLeft === 0) {
    messageElement.textContent = `Game Over! The number was ${randomNumber}.`;
    guessButton.disabled = true;
  } else {
    messageElement.textContent =
      userGuess > randomNumber ? "Too high!" : "Too low!";
  }

  guessesElement.textContent = previousGuesses.join(", ");
  guessInput.value = "";
});

// Reset button functionality
