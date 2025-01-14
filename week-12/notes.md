# Week 12: Interactive Game Website - Advanced Logic and Refinement

## Objective

In this week, we will implement advanced game logic, handle user input more effectively, and refine the UI for better usability.

## Steps

### **Game Logic**:

- Add game logic to generate a random number.
- Check user input and provide feedback based on game rules.
- Example JavaScript code:

  ```javascript
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  document
    .getElementById("guess-button")
    .addEventListener("click", function () {
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
  ```
