import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  decrementStars,
  incrementStars,
} from "../store/selectedPattern/selectedPatternSlice";
import { StarButton } from "./StarButton";
import "./stars.css";
import { disableButton } from "../utils";
import { MAX_NUMBERS_STARS_PATTERN } from "../constants";

interface StarsProps {
  numbers: number[];
}
export const Stars: React.FC<StarsProps> = ({ numbers }) => {
  const dispatch = useDispatch();
  const { selectedPattern } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const [toDisable, setToDisable] = useState(false);

  useEffect(() => {
    setToDisable(disableButton(selectedPattern, MAX_NUMBERS_STARS_PATTERN));
  }, [selectedPattern]);

  const onClick = (selected: boolean) => {
    if (!selected) {
      dispatch(incrementStars());
    } else {
      dispatch(decrementStars());
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
        />
      ))}
    </div>
  );
};
