import { combineReducers } from "@reduxjs/toolkit";
import pricesSlice from "./prices/pricesSlice";

const rootReducer = combineReducers({
  prices: pricesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
