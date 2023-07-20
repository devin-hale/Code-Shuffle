import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEqual } from "./scoreSlice";

const Scoreboard = () => {
  const score = useSelector((state) => state.score.scoreSlice.value);
  const highScore = useSelector((state) => state.score.highScoreSlice.value);
  const level = useSelector((state) => state.score.levelSlice.value);
  const dispatch = useDispatch();

  //If score is higher than high score, dispatch for global store to update high score.
  const highScoreUpdate = () => {
    score > highScore ? dispatch(setEqual(score)) : null;
  };

  //Any time the scoreboard is updated, update high score.
  useEffect(() => {
    highScoreUpdate();
  });

  return (
    <div className="flex flex-row m-auto mt-[10px] w-[100%] justify-evenly">
      <div className=" bg-slate-300 rounded flex flex-nowrap justify-evenly align-middle w-[75px] md:w-[150px] md:text-[25px]">
        <p className="font-bold">Level:</p>
        <p>{level}</p>
      </div>
      <div
        id="scoreBoardScore"
        className="bg-slate-300 rounded flex flex-nowrap justify-evenly align-middle w-[75px] md:w-[150px] md:text-[25px]"
      >
        <p className="font-bold">Score:</p>
        <p>{score}</p>
      </div>
      <div className="bg-slate-300 rounded border-black flex flex-nowrap justify-evenly align-middle w-[115px] md:w-[200px] md:text-[25px]">
        <p className="font-bold">High Score:</p>
        <p>{highScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
