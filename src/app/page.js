import { createContext } from "react";
import { useState } from "react";

export default function Home() {
  //Context initialize.
  const Context = createContext("default");

  //Current score, high score, level states
  const [currentScore, incrementCS] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  //Increment current score.
  const currentScorePlus = () => {
    const current = currentScore;
    incrementCS(current++);
  };
  //Set current score to zero.
  const currentZero = () => {
    incrementCS(0);
  };

  //High score changer
  const highScoreCheck = () => {
    const current = currentScore;
    const high = highScore;

    if (current > high) setHighScore(current);
  };

  const nextLevel = () => {
    const lev = level;
    setLevel(lev++);
  };

  const levelReset = () => {
    setLevel(1);
  };

  return <main>Words</main>;
}
