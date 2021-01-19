import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MAX_NUMBERS_PATTERN } from "../../constants";
import { RootState } from "../../store/rootReducer";
import {
  addNumber,
  removeNumber,
} from "../../store/selectedElements/selectedElementsSlice";
import {
  decrementNumbers,
  incrementNumbers,
} from "../../store/selectedPattern/selectedPatternSlice";
import { disableButton } from "../../utils";
import { NumberButton } from "../../components/numberButton/NumberButton";
import "./numbers.css";

interface NumbersProps {
  numbers: number[];
}

export const Numbers: React.FC<NumbersProps> = ({ numbers }) => {
  const dispatch = useDispatch();
  const { numbers: numbersCount, stars } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const { selectedNumbers } = useSelector(
    (state: RootState) => state.selectedElements
  );

  const [toDisable, setToDisable] = useState(false);

  useEffect(() => {
    setToDisable(disableButton([numbersCount, stars], MAX_NUMBERS_PATTERN));
  }, [numbersCount, stars]);

  const onClick = (selected: boolean, value: number) => {
    if (!selected) {
      dispatch(incrementNumbers());
      dispatch(addNumber(value));
    } else {
      dispatch(decrementNumbers());
      dispatch(removeNumber(value));
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
          selected={selectedNumbers.includes(value)}
        />
      ))}
    </div>
  );
};
