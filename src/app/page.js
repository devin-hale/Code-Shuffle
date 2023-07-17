"use client";
import { createContext } from "react";
import Scoreboard from "@/scoreboard/scoreboard";
import store from "./store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Scoreboard />
      </div>
    </Provider>
  );
}
