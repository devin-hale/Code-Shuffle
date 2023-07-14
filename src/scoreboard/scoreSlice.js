import { createSlice } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    zero: (state) => {
      state.value = 0;
    },
  },
});

export const { scoreIncrement, scoreZero } = scoreSlice.actions;

export const highScoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    setEqual: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { highScoreIncrement, setEqual } = highScoreSlice.actions;

export const levelSlice = createSlice({
  name: "level",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    zero: (state) => {
      state.value = 0;
    },
  },
});

export const { levelIncrement, levelZero } = levelSlice.actions;

export { scoreSlice, highScoreSlice, levelSlice };
