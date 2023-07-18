import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEqual } from "./scoreSlice";

const Scoreboard = () => {
  const score = useSelector((state) => state.score.scoreSlice.value);
  const highScore = useSelector((state) => state.score.highScoreSlice.value);
  const level = useSelector((state) => state.score.levelSlice.value);
  const dispatch = useDispatch();

  const highScoreUpdate = () => {
    score > highScore ? dispatch(setEqual()) : null;
  };

  useEffect(() => {
    highScoreUpdate(score);
    console.log(highScore);
  }, [score]);

  return (
    <div className="flex flex-row">
      <div className="border-solid border-[2px] border-black flex flex-nowrap justify-evenly align-middle w-[75px]">
        <p>Level:</p>
        <p>{level}</p>
      </div>
      <div
        id="scoreBoardScore"
        className="border-solid border-[2px] border-black flex flex-nowrap justify-evenly align-middle w-[75px]"
      >
        <p>Score:</p>
        <p>{score}</p>
      </div>
      <div className="border-solid border-[2px] border-black flex flex-nowrap justify-evenly align-middle w-[115px]">
        <p>High Score:</p>
        <p>{highScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
