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

  const dispatch = useDispatch();

  //Compares score against high score.  If score is higher, update high score.
  const highScoreUpdate = () => {
    score > highScore ? dispatch(setEqual()) : console.log("pee");
  };

  const readStuff = () => {
    console.log(cardData[`level${level}`]);
  };

  const [cardState, setCardState] = useState(cardData["level1"]);

  const cardClick = (card) => {
    const cardIndex = cardState.findIndex((i) => i.id == card.id);
    if (cardIndex != -1 && !cardState[cardIndex].clicked) {
      let newState = [...cardState];
      newState[cardIndex].clicked = true;
      setCardState(newState);
      dispatch(scoreIncrement());
    } else dispatch(scoreZero());
  };

  const mapCards = cardState.map((card) => {
    return (
      <div
        className=" border-solid border-black border-[2px] w-[20px] cursor-pointer"
        key={card.id}
        onClick={() => cardClick(card)}
      >
        {card.name}
      </div>
    );
  });

  return <div>{mapCards}</div>;
};

export default GameBoard;
