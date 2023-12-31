"use client";
import { createContext } from "react";
import Scoreboard from "@/components/scoreBoard/scoreboard";
import GameBoard from "@/components/gameBoard/gameBoard";
import store from "./store";
import { Provider } from "react-redux";
import "./globals.css";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="flex flex-col align-middle font-anon">
        <Scoreboard />
        <GameBoard />
      </div>
    </Provider>
  );
}
