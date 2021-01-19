import { selectedElementsInitialState } from "./selectedElementsInitialState";
import { createSlice } from "@reduxjs/toolkit";

const selectedElementsSlice = createSlice({
  name: "selectedElements",
  initialState: selectedElementsInitialState,
  reducers: {
    addNumber(state, action) {
      state.selectedNumbers.push(action.payload);
    },
    addStar(state, action) {
      state.selectedStars.push(action.payload);
    },
    removeNumber(state, action) {
      state.selectedNumbers.filter((number) => number !== action.payload);
    },
    removeStar(state, action) {
      state.selectedStars.filter((star) => star !== action.payload);
    },
  },
});

export const {
  addNumber,
  addStar,
  removeNumber,
  removeStar,
} = selectedElementsSlice.actions;

export default selectedElementsSlice.reducer;
