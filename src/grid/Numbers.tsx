import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  decrementNumbers,
  incrementNumbers,
} from "../store/selectedPattern/selectedPatternSlice";
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

  useEffect(() => {
    console.log(selectedPattern);
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
        <NumberButton value={value} key={value} onClick={onClick} />
      ))}
    </div>
  );
};
