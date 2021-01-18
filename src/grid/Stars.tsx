import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import {
  decrementStars,
  incrementStars
} from "../store/selectedPattern/selectedPatternSlice";
import { StarButton } from "./StarButton";
import "./stars.css";

interface StarsProps {
  numbers: number[];
}
export const Stars: React.FC<StarsProps> = ({ numbers }) => {
  const dispatch = useDispatch();
  const { selectedPattern } = useSelector(
    (state: RootState) => state.selectedPattern
  );

  useEffect(() => {
    console.log(selectedPattern);
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
        <StarButton value={value} key={value} onClick={onClick} />
      ))}
    </div>
  );
};
