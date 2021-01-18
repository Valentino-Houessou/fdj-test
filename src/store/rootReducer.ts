import { combineReducers } from "@reduxjs/toolkit";
import pricesSlice from "./prices/pricesSlice";
import selectedPatternSlice from "./selectedPattern/selectedPatternSlice";

const rootReducer = combineReducers({
  prices: pricesSlice,
  selectedPattern: selectedPatternSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
