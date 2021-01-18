import React, { useState } from "react";
import "./numberButton.css";

interface NumberButtonProps {
  value: number;
  onClick: (selected: boolean) => void;
  disable: boolean;
}

export const NumberButton: React.FC<NumberButtonProps> = ({
  value,
  onClick,
  disable,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`numberButton ${selected && "selectedNumber"}`}
      onClick={() => {
        onClick(selected);
        setSelected(!selected);
      }}
      disabled={!selected && disable}
    >
      {value}
    </button>
  );
};
