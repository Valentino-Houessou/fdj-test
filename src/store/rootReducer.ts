import { combineReducers } from "@reduxjs/toolkit";
import pricesSlice from "./prices/pricesSlice";
import selectedElementsSlice from "./selectedElements/selectedElementsSlice";
import selectedPatternSlice from "./selectedPattern/selectedPatternSlice";

const rootReducer = combineReducers({
  prices: pricesSlice,
  selectedPattern: selectedPatternSlice,
  selectedElements: selectedElementsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
