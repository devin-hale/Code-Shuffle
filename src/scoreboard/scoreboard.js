import { Context } from "@/app/page";
import { useContext } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scoreIncrement, scoreZero } from "@/scoreboard/scoreSlice";

const Scoreboard = () => {
  const score = useSelector((state) => state.score.scoreSlice.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{score}</p>
      <button type="button" onClick={() => dispatch(scoreIncrement())}>
        +1
      </button>
      <button type="button" onClick={() => dispatch(scoreZero())}>
        Reset
      </button>
    </div>
  );
};

export default Scoreboard;
