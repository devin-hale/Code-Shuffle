import { useEffect, useState } from "react";
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
  const defaultData = cardData["level1"];
  const [cardState, setCardState] = useState(defaultData);

  //Given a card, checks if it is clicked in state or not.
  const checkClickable = (card) => {
    return cardState.some((c) => c.id === card.id && !c.clicked);
  };

  //Takes card, finds in state, creates new state, sets clicked to true, shuffles new state, and then updates state.
  const updateCardState = (card) => {
    let cardIndex = cardState.findIndex((i) => i.id === card.id);
    let newState = [...cardState];
    newState[cardIndex].clicked = true;
    shuffleCards(newState);
    setCardState(newState);
  };

  //Takes card, checks if clickable.  Updates card state and increments score in redux if true.
  const cardClick = (card) => {
    if (checkClickable(card)) {
      updateCardState(card);
      dispatch(scoreIncrement());
      //In case of win.
      if (levelWin()) {
        if (level < 10) dispatch(levelIncrement());
        else console.log("Win!");
      }
    } else resetGame();
  };

  //Resets cardstate to level 1.  Zeroes level and current score.
  const resetGame = () => {
    cardData[`level${1}`].forEach((el) => (el.clicked = false));
    dispatch(scoreZero());
    dispatch(levelZero());
  };

  //Checks for level win.  Returns true for win, false for not win.
  const levelWin = () => {
    // .some checks for any unclicked cards.  Reverse using ? to get the desired bool.
    return cardState.some((card) => !card.clicked) ? false : true;
  };

  //Every time level is updated, pull new level data, shuffle it, and set it as state.
  useEffect(() => {
    let nextLevel = cardData[`level${level}`];
    shuffleCards(nextLevel);
    setCardState(nextLevel);
  }, [level]);

  //Shuffles cardState.
  const shuffleCards = (cardState) => {
    for (let i = cardState.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = cardState[i];
      cardState[i] = cardState[j];
      cardState[j] = temp;
    }
  };

  //Maps cards to gameboard div.
  const mapCards = cardState.map((card) => {
    return (
      <div
        className=" border-solid border-black border-[2px] w-[100px] p-1 cursor-pointer text-center md:w-[150px]"
        key={card.id}
        onClick={() => cardClick(card)}
      >
        <p className=" text-md md:text-xl">{card.name}</p>
        <img className=" w-[100%]" src={card.img} />
      </div>
    );
  });

  const loseGameRender = () => {};

  return (
    <div className="m-auto grid grid-cols-1 align-middle">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-center m-3">
        {mapCards}
      </div>
      <button
        className="border-black border-[2px] p-1 text-center m-auto w-fit fixed bottom-[10px] right-[43%] md:bottom-[94.125%] md:right-[5%] xl:right-[15%]"
        type="button"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default GameBoard;
