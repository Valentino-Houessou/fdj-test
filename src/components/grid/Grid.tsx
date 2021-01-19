import "./grid.css";
import { Stars } from "../../containers/stars/Stars";
import { Numbers } from "../../containers/numbers/Numbers";
import { getNumbers } from "../../utils";
import { NUMBERS_COUNT, STARS_COUNT } from "../../constants";

export const Grid = () => {
  return (
    <div className="grid">
      <Numbers numbers={getNumbers(NUMBERS_COUNT)} />
      <Stars numbers={getNumbers(STARS_COUNT)} />
    </div>
  );
};
