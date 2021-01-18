import { Multiple, Pattern, Price } from "./types";

export const mapMultipleToPrice = (multiples: Multiple[]) =>
  multiples.map(
    (multiple) =>
      ({
        value: multiple.cost.value,
        pattern: multiple.pattern,
      } as Price)
  );

export const getNumbers = (value: number) => {
  return Array.from(Array(value), (e, i) => i + 1);
};

export const disableButton = (selectedPattern: Pattern, patterns: Pattern[]) =>
  !!patterns.find(
    (pattern) => JSON.stringify(pattern) === JSON.stringify(selectedPattern)
  );
