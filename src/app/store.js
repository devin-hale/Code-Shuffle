import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "@/scoreboard/scoreSlice";

export default configureStore({
  reducer: {
    score: scoreSlice,
  },
});
