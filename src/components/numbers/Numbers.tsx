import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAX_NUMBERS_PATTERN } from "../../constants";
import { RootState } from "../../store/rootReducer";
import {
  decrementNumbers,
  incrementNumbers
} from "../../store/selectedPattern/selectedPatternSlice";
import { disableButton } from "../../utils";
import { NumberButton } from "./NumberButton";
import "./numbers.css";

interface NumbersProps {
  numbers: number[];
}

export const Numbers: React.FC<NumbersProps> = ({ numbers }) => {
  const dispatch = useDispatch();
  const { selectedPattern } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const [toDisable, setToDisable] = useState(false);

  useEffect(() => {
    setToDisable(disableButton(selectedPattern, MAX_NUMBERS_PATTERN));
  }, [selectedPattern]);

  const onClick = (selected: boolean) => {
    if (!selected) {
      dispatch(incrementNumbers());
    } else {
      dispatch(decrementNumbers());
    }
  };
  return (
    <div className="numbers">
      {numbers.map((value) => (
        <NumberButton
          value={value}
          key={value}
          onClick={onClick}
          disable={toDisable}
        />
      ))}
    </div>
  );
};
