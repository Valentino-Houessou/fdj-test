import { createSlice } from "@reduxjs/toolkit";
import { SelectedPatternState } from "../../types";

const selectedPatternSlice = createSlice({
  name: "selectedPattern",
  initialState: { selectedPattern: [0, 0] } as SelectedPatternState,
  reducers: {
    incrementNumbers(state) {
      state.selectedPattern[0] += 1;
    },
    incrementStars(state) {
      state.selectedPattern[1] += 1;
    },
    decrementNumbers(state) {
      state.selectedPattern[0] -= 1;
    },
    decrementStars(state) {
      state.selectedPattern[1] -= 1;
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
