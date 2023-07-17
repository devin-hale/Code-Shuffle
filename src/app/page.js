"use client";
import { createContext } from "react";
import Scoreboard from "@/components/scoreboard";
import store from "./store";
import { Provider } from "react-redux";
import "./globals.css";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <Scoreboard />
      </div>
    </Provider>
  );
}
