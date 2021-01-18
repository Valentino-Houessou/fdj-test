import React from "react";
import { NumberButton } from "./NumberButton";
import "./numbers.css";

interface NumbersProps {
  numbers: number[];
}

export const Numbers: React.FC<NumbersProps> = ({ numbers }) => {
  return (
    <div className="numbers">
      {numbers.map((value) => (
        <NumberButton value={value} key={value} />
      ))}
    </div>
  );
};
