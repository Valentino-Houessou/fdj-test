import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../constants";
import { PricesAPI, Status } from "../../types";
import { mapMultipleToPrice } from "../../utils";
import { AppThunk } from "../store";
import { pricesInitialState } from "./pricesInitialState";

const pricesSlice = createSlice({
  name: "prices",
  initialState: pricesInitialState,
  reducers: {
    getPricesStart(state) {
      state.status = Status.loading;
      state.error = null;
    },
    getPricesSuccess(state, action: PayloadAction<PricesAPI>) {
      state.prices = mapMultipleToPrice(action.payload.multiples);
      state.status = Status.success;
      state.error = null;
    },
    getPricesFailure(state, action: PayloadAction<string>) {
      state.status = Status.failed;
      state.error = action.payload;
    },
  },
});

export const {
  getPricesStart,
  getPricesSuccess,
  getPricesFailure,
} = pricesSlice.actions;

export default pricesSlice.reducer;

export const fetchPrices = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPricesStart());
    const response = await fetch(BACKEND_URL as string);
    const pricesData = (await response.json()) as PricesAPI;
    dispatch(getPricesSuccess(pricesData));
  } catch (err) {
    dispatch(getPricesFailure(err.toString()));
  }
};
