import { createSlice } from "@reduxjs/toolkit";
import { patternInitialState } from "./patternInitialState";

const selectedPatternSlice = createSlice({
  name: "selectedPattern",
  initialState: patternInitialState,
  reducers: {
    incrementNumbers(state) {
      state.numbers += 1;
    },
    incrementStars(state) {
      state.stars += 1;
    },
    decrementNumbers(state) {
      state.numbers -= 1;
    },
    decrementStars(state) {
      state.stars -= 1;
    },
  },
});

export const {
  incrementNumbers,
  incrementStars,
  decrementNumbers,
  decrementStars,
} = selectedPatternSlice.actions;

export default selectedPatternSlice.reducer;
