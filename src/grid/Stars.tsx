import React from "react";
import { StarButton } from "./StarButton";
import "./stars.css";

interface StarsProps {
  numbers: number[];
}
export const Stars: React.FC<StarsProps> = ({ numbers }) => {
  return (
    <div className="stars">
      {numbers.map((value) => (
        <StarButton value={value} key={value} />
      ))}
    </div>
  );
};
