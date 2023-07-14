"use client";
import { createContext } from "react";
import { useState } from "react";
import Scoreboard from "@/scoreboard/scoreboard";

export const Context = createContext(null);

export default function Home() {
  //Current score, high score, level states
  const [currentScore, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);

  const value = {
    currentScore,
    setScore,
    highScore,
    setHighScore,
    level,
    setLevel,
  };

  return (
    <Context.Provider value={value}>
      <div>
        <Scoreboard />
      </div>
    </Context.Provider>
  );
}
