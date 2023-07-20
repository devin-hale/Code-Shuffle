# Memory-Game

The Odin Project Memory Game using React Hooks. Basically just a game where you're presented with a certain amount of unique cards. You click one, and then they shuffle. You're not supposed to

-- I completely realize the implementation of Redux was completely unneccessary for the scope of this project, but we use redux at work, so I wanted to learn how to use it here.

## Code Outline

### Context provider. Holds current score, high core, and current level states.

- [x] Function to increment current score.
- [x] Set current score to 0.
- [x] Compare current score to high score and update high score when current score > high score.
- [x] Increment level.
- [x] Set level to zero.

### Scoreboard component

- [x] Display current score.
- [x] Display high score.
- [x] Display current level.
- [x] Reset button.

### "Gameboard" component

- [x] Holds card array in state.
- [x] Card object : ID(int), Name(string), img(string URL), clicked(bool) properties
- [x] Maybe multiple arrays for more levels.
- [x] Function that ,given a unique ID, finds card object and sets it's clicked property state to true.
- [x] Level win.

#### Rendering Cards

- [x] Function that renders all cards in state object to JSX in random order. Corresponding state properties are passed as props.
  - Changed. Properties are now just accessed through local state.
- [x] onClick
  - [x] Check if clickable
  - [x] Increment current score
  - [x] Re-shuffle board without changing state.
  - [x] Advance level if all cards in state are clicked.
  - [x] Reset Board if not clickable.
  - [x] Reset level if not clickable.

### Message components.

- [x] Lose screen with Score, High Score, and Play again button.
