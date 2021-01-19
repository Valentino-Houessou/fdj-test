import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAX_NUMBERS_STARS_PATTERN } from "../../constants";
import { RootState } from "../../store/rootReducer";
import {
  addStar,
  removeStar,
} from "../../store/selectedElements/selectedElementsSlice";
import {
  decrementStars,
  incrementStars,
} from "../../store/selectedPattern/selectedPatternSlice";
import { disableButton } from "../../utils";
import { StarButton } from "../../components/starButton/StarButton";
import "./stars.css";

interface StarsProps {
  numbers: number[];
}
export const Stars: React.FC<StarsProps> = ({ numbers }) => {
  const dispatch = useDispatch();
  const { numbers: numbersCount, stars } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const { selectedStars } = useSelector(
    (state: RootState) => state.selectedElements
  );
  const [toDisable, setToDisable] = useState(false);

  useEffect(() => {
    setToDisable(
      disableButton([numbersCount, stars], MAX_NUMBERS_STARS_PATTERN)
    );
  }, [numbersCount, stars]);

  const onClick = (selected: boolean, value: number) => {
    if (!selected) {
      dispatch(incrementStars());
      dispatch(addStar(value));
    } else {
      dispatch(decrementStars());
      dispatch(removeStar(value));
    }
  };

  return (
    <div className="stars">
      {numbers.map((value) => (
        <StarButton
          value={value}
          key={value}
          onClick={onClick}
          disable={toDisable}
          selected={selectedStars.includes(value)}
        />
      ))}
    </div>
  );
};
