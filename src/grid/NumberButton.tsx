import React, { useState } from "react";
import "./numberButton.css";

interface NumberButtonProps {
  value: number;
}

export const NumberButton: React.FC<NumberButtonProps> = ({ value }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`numberButton ${selected && "selectedNumber"}`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      {value}
    </button>
  );
};
