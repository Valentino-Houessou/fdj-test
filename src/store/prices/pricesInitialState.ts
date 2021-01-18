import { PricesState, Status } from "../../types";

export const pricesInitialState: PricesState = {
  prices: [],
  status: Status.success,
  error: null,
};
