let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guess-button").addEventListener("click", function () {
  let userGuess = document.getElementById("user-guess").value;
  attempts++;

  if (userGuess == randomNumber) {
    document.getElementById(
      "feedback"
    ).innerText = `Congratulations! You guessed it in ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    document.getElementById("feedback").innerText = "Too low, try again!";
  } else {
    document.getElementById("feedback").innerText = "Too high, try again!";
  }
});
