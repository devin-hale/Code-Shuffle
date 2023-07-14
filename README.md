# Memory-Game

The Odin Project Memory Game using React Hooks. Basically just a game where you're presented with a certain amount of unique cards. You click one, and then they shuffle. You're not supposed to

## Code Outline

-[] Context provider. Holds current score, high core, and current level states.
-[] Function to increment current score.
-[] Set current score to 0.
-[] Compare current score to high score and update high score when current score > high score.
-[] Increment level.
-[] Set level to zero.

### Scoreboard component

-[] Display current score.

-[] Display high score.

-[] Display current level.

-[] Reset button.

### "Gameboard" component

- [] Holds card array in state.
- [] Card object : ID(int), Name(string), img(string URL), clicked(bool) properties
- [] Maybe multiple arrays for more levels.
- [] Function that ,given a unique ID, finds card object and sets it's clicked property state to true.
- [] Function that resets all clicked property states to false.
- [] Win/Lose state.

#### Rendering Cards

-[] Function that renders all cards in state object to JSX in random order. Corresponding state properties are passed as props.
-[] onClick = check if clicked = true. Run high score checker, then reset board and score if true. Increment current score. Run high score checker.

### Message components.

-[] Lose screen with Score, High Score, and Play again button.
-[] Reset confirmation screen. Yes/No?
-[] Secret screen that says something wacky and dumb.
-[] 2nd even secreter screen that says something even dumber and wackier.
