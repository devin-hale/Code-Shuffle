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

  const [gameLost, setGameLost] = useState(false);

  const modalBGFadeIn = { animation: "modalBGFadeIn .5s ease 0s" };
  const modalBGFadeOut = { animation: "modalBGFadeOut .5s ease 0s" };

  const [style, setStyle] = useState(modalBGFadeIn);

  const [tutorialLoad, setTutorialLoad] = useState(true);

  const handleClose = () => {
    setStyle(modalBGFadeOut);
    setCardFade(cardFadeOutReset);
    setTimeout(() => {
      resetGame();
      setGameLost(false);
      setStyle(modalBGFadeIn);
      setCardFade(cardFadeIn);
    }, 400);
  };

  const handleTutClose = () => {
    setStyle(modalBGFadeOut);
    setTimeout(() => {
      setTutorialLoad(false);
      setStyle(modalBGFadeIn);
    }, 400);
  };

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
    } else setGameLost(true);
  };

  //Resets cardstate to level 1.  Zeroes level and current score.
  const resetGame = () => {
    for (let i = 1; i <= 10; i++) {
      cardData[`level${i}`].forEach((el) => (el.clicked = false));
    }
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

  const cardFadeIn = { animation: "modalBGFadeIn .25s ease 0s" };
  const cardFadeOut = { animation: "modalBGFadeOut .25s ease 0s" };
  const cardFadeOutReset = { animation: "modalBGFadeOut .5s ease 0s" };

  const [cardFade, setCardFade] = useState(cardFadeIn);

  //Maps cards to gameboard div.
  const mapCards = cardState.map((card) => {
    return (
      <div
        className=" bg-slate-300 shadow-lg rounded w-[100px] p-2 cursor-pointer text-center md:w-[150px] transition-all hover:scale-[102%] hover:transition-all"
        key={card.id}
        onClick={() => {
          if (checkClickable(card)) {
            setCardFade(cardFadeOut);
            setTimeout(() => {
              cardClick(card);
              setCardFade(cardFadeIn);
            }, 150);
          } else cardClick(card);
        }}
        style={cardFade}
      >
        <p className=" text-md md:text-xl">{card.name}</p>
        <img className=" w-[100%]" src={card.img} />
      </div>
    );
  });

  return (
    <div className="m-auto grid grid-cols-1 align-middle">
      {tutorialLoad && (
        <div
          id="lostGameModal"
          className=" fixed w-[100lvw] h-[100lvh] top-0 left-0 bg-[rgba(0,0,0,.875)] z-10"
          style={style}
        >
          <div className="modalWindowFadeDown bg-white w-[350px] p-5 z-20 text-center rounded shadow-lg m-auto mt-[100px]">
            <p className="font-bold text-2xl">Code Shuffle</p>
            <div className="flex flex-col w-[300px] m-auto p-5 text-center text-lg">
              <h1 className="font-bold">Rules:</h1>
              <ul className="list-disc">
                <li className="w-fit text-[17px]">
                  During each level, you may only click each language once.
                </li>
                <li className="w-fit text-[17px]">
                  Each round, the icons will be shuffled.
                </li>
                <li className="w-fit text-[17px]">
                  If you click an icon twice in one level, you lose!
                </li>
              </ul>
            </div>
            <button
              className=" bg-green-300 font-bold p-1 rounded-md shadow-lg hover:bg-green-400 transition-all hover:transition-all"
              type="button"
              onClick={() => {
                handleTutClose();
              }}
            >
              Play Game
            </button>
          </div>
        </div>
      )}
      {gameLost ? (
        <div
          id="lostGameModal"
          className=" fixed w-[100lvw] h-[100lvh] top-0 left-0 bg-[rgba(0,0,0,.875)] z-10"
          style={style}
        >
          <div className="modalWindowFadeDown bg-white w-fit p-5 z-20 text-center rounded shadow-lg fixed top-40 left-[28%] md:left-[42.5lvw]">
            <p className="font-bold text-2xl">You lose!</p>
            <div className="flex flex-col w-[150px] m-5 text-center text-lg">
              <div className="flex flex-row justify-between w-[100%]">
                <p className=" font-bold">Level: </p>
                <p>{level}</p>
              </div>
              <div className="flex flex-row justify-between w-[100%]">
                <p className=" font-bold ">Score: </p>
                <p>{score}</p>
              </div>
              <div className="flex flex-row justify-between w-[100%]">
                <p className=" font-bold">High Score: </p>
                <p>{highScore}</p>
              </div>
            </div>
            <button
              className=" bg-green-300 font-bold p-1 rounded-md shadow-lg hover:bg-green-400 transition-all hover:transition-all"
              type="button"
              onClick={() => {
                handleClose();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 justify-center m-3">
        {mapCards}
      </div>
      <button
        className="border-black border-[2px] p-1 text-center m-auto w-fit fixed bottom-[10px] right-[43%] md:bottom-[94.125%] md:right-[2%]"
        type="button"
        onClick={resetGame}
      >
        Reset
      </button>
    </div>
  );
};

export default GameBoard;
