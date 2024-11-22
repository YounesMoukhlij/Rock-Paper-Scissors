This project is a **Rock, Paper, Scissors** game built using JavaScript. Here's a breakdown:

---

### **Features of the Game**
1. **Game Options**:
   - The player can choose between "Rock", "Paper", and "Scissors" using buttons.

2. **Game Mechanics**:
   - The computer randomly selects a choice from the same options using the `getRandomComputerChoice` function.
   - The winner of each round is determined using the `isPlayerWons` function, which compares the player's and computer's choices.

3. **Scoring**:
   - The scores for the player and the computer are tracked using `PlayerScore` and `ComputerScore`.
   - Scores are updated and displayed in the UI (`scoreUser` for the player, `scoreComputer` for the computer).

4. **Win Condition**:
   - The game ends when either the player or the computer reaches a score of 3.
   - A message (`winner.innerText`) declares the winner.
   - The game disables further play by hiding the options container (`optionContainer`) and showing the result container (`resultContainer`).

5. **Reset Option**:
   - After the game ends, a "Reset" button becomes visible.
   - Clicking "Reset" resets the scores, clears the winner message, and re-enables the game options.

---

### **Key Functions**
1. **`getRandomComputerChoice`**:
   - Randomly selects a choice for the computer from the `Choices` array.

2. **`isPlayerWons(userOption, computerOption)`**:
   - Determines if the player's choice beats the computer's choice based on game rules:
     - Rock beats Scissors
     - Paper beats Rock
     - Scissors beat Paper

3. **`getResult(userOption)`**:
   - Determines the result of a round:
     - Updates scores based on who wins.
     - Returns a message summarizing the result (e.g., "Player wins! Rock beats Scissors").

4. **`Game(userOption)`**:
   - Runs a single round of the game.
   - Updates the UI with the current scores and result message.
   - Checks if either player has won the game (score reaches 3).
   - Handles the end of the game by showing the winner and preparing for a reset.

5. **`resetGame()`**:
   - Resets the game state:
     - Scores are set to 0.
     - UI elements are updated to reflect the reset.
     - The game options become visible again.

---

### **UI Elements**
- **Buttons**:
  - Rock, Paper, Scissors buttons trigger the `Game` function with the player's choice.
  - Reset button triggers the `resetGame` function.

- **Score Display**:
  - `score-p` and `score-c` display the player's and computer's scores, respectively.

- **Game Status**:
  - `result` shows the outcome of the current round.
  - `whoWins` displays the winner of the game when it ends.

- **Containers**:
  - `button-container`: Contains the game option buttons (Rock, Paper, Scissors).
  - `result-container`: Displays the game result and reset button after the game ends.

---

### **How It Works**
1. The player clicks a button to make their choice.
2. The computer makes a random choice.
3. The game determines the round winner, updates scores, and displays the results.
4. If one player reaches a score of 3, the game ends, showing the winner and enabling the reset option.
5. The reset button clears the scores and game state, allowing the player to start over.

This implementation is a great example of using DOM manipulation and event handling in JavaScript for an interactive game.
