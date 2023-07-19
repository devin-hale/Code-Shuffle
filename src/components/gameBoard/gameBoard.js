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

  //Initialize cardData state.  Uses level 1 as default.
  const [cardState, setCardState] = useState(cardData["level1"]);

  //Given a card, checks if it is clicked in state or not.
  const checkClickable = (card) => {
    return cardState.some((c) => c.id === card.id && !c.clicked);
  };

  //Takes card, finds in state, creates new state, sets clicked to true, updates state.
  const updateCardState = (card) => {
    let cardIndex = cardState.findIndex((i) => i.id === card.id);
    let newState = [...cardState];
    newState[cardIndex].clicked = true;
    setCardState(newState);
  };

  //Takes card, checks if clickable.  Updates card state and increments score in redux if true.
  const cardClick = (card) => {
    if (checkClickable(card)) {
      updateCardState(card);
      dispatch(scoreIncrement());
    } else resetGame();
  };

  //Resets cardstate to level 1.  Zeroes level and current score.
  const resetGame = () => {
    setCardState(cardData["level1"]);
    dispatch(scoreZero());
    dispatch(levelZero());
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
