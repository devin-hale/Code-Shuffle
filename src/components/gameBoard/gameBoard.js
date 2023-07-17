import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  scoreIncrement,
  scoreZero,
  highScoreIncrement,
  setEqual,
  levelIncrement,
  levelZero,
} from "../scoreBoard/scoreSlice";
import cardData from "./../../cardData/cardData.JSON";

const GameBoard = () => {
  //Pull level, score, hScore data from redux store.
  const score = useSelector((state) => state.score.scoreSlice.value);
  const highScore = useSelector((state) => state.score.highScoreSlice.value);
  const level = useSelector((state) => state.score.levelSlice.value);

  //Compares score against high score.  If score is higher, update high score.
  const highScoreUpdate = () => {
    score > highScore ? setEqual() : null;
  };

  const readStuff = () => {
    console.log(cardData[`level${level}`]);
  };

  const [cardState, setCardState] = useState(cardData["level1"]);

  return (
    <div>
      <p onClick={readStuff}>P</p>
    </div>
  );
};

export default GameBoard;
