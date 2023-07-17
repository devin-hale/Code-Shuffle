import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "@/components/scoreBoard/scoreSlice";

export default configureStore({
  reducer: {
    score: scoreSlice,
  },
});
