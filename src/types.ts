export type Pattern = [number, number];

export interface Price {
  pattern: Pattern;
  value: number;
}

export enum Status {
  loading = "loading",
  success = "success",
  failed = "failed",
}

export interface PricesState {
  prices: Price[];
  status: Status;
  error: string | null;
}

interface Cost {
  currency: string;
  value: number;
}

export interface Multiple {
  cost: Cost;
  pattern: Pattern;
}

interface DrawConfiguration {
  weekMasks: number[];
  nextDrawMask: number;
}

interface Jackpot {
  date: string;
}

export interface PricesAPI {
  drawConfiguration: DrawConfiguration;
  jackpot: Jackpot;
  multiples: Multiple[];
}

export interface SelectedPatternState {
  numbers: number;
  stars: number;
}
