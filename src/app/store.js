import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "@/components/scoreSlice";

export default configureStore({
  reducer: {
    score: scoreSlice,
  },
});
