"use client";
import { createContext } from "react";
import { useState } from "react";
import Scoreboard from "@/scoreboard/scoreboard";
import store from "./store";
import { Provider } from "react-redux";

export const Context = createContext(null);

export default function Home() {
  return (
    <Context.Provider>
      <div>
        <Scoreboard />
      </div>
    </Context.Provider>
  );
}
