import { Pattern } from "./types";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const NUMBERS_COUNT = 50;
export const STARS_COUNT = 12;
export const MAX_NUMBERS_STARS_PATTERN = [
  [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  [7, 10],
  [7, 11],
  [8, 4],
  [8, 5],
  [9, 3],
  [10, 2],
] as Pattern[];

export const MAX_NUMBERS_PATTERN = [
  [7, 5],
  [10, 1],
  [6, 12],
  [6, 11],
  [6, 10],
  [6, 9],
  [6, 8],
  [6, 7],
  ...MAX_NUMBERS_STARS_PATTERN,
] as Pattern[];
