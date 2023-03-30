import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Counter/counterSlice";

export const store = configureStore({
  reducer: {
    //key: tenReducer
    counter: counterSlice.reducer,
  },
});
