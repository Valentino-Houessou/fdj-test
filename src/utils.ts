import { Multiple, Price } from "./types";

export const mapMultipleToPrice = (multiples: Multiple[]) =>
  multiples.map(
    (multiple) =>
      ({
        value: multiple.cost.value,
        pattern: multiple.pattern,
      } as Price)
  );
