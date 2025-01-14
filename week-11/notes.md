# Week 11: Interactive Game Website - Setup and Basic Interactivity

## Objective

In this week, we will set up the basic structure of the game website and style the layout. We will focus on building the game layout and adding basic interactivity using HTML, CSS, and JavaScript.

## Steps

### **HTML Structure**:

- Create the game layout using divs, input fields, and buttons.
- Example HTML:

  ```html
  <div id="game-container">
    <h1>Guess the Number Game</h1>
    <p>Guess a number between 1 and 100</p>

    <input type="number" id="user-guess" min="1" max="100" />
    <button id="guess-button">Guess</button>

    <div class="feedback" id="feedback"></div>
  </div>
  ```
