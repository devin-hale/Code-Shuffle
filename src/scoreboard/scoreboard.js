import { Context } from "@/app/page";
import { useContext } from "react";
import { useState } from "react";

const Scoreboard = () => {
  const { currentScore, setScore, highScore, setHighScore, level, setLevel } =
    useContext(Context);

  return (
    <div>
      <p>{currentScore}</p>
      <button type="button" onClick={() => setScore(currentScore + 1)}>
        +1
      </button>
      <button type="button" onClick={setScore(0)}>
        Reset
      </button>
    </div>
  );
};

export default Scoreboard;
