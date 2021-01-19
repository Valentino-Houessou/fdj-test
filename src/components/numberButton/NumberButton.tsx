import React from "react";
import "./numberButton.css";

interface NumberButtonProps {
  value: number;
  onClick: (selected: boolean, value: number) => void;
  selected: boolean;
  disable: boolean;
}

export const NumberButton: React.FC<NumberButtonProps> = ({
  value,
  onClick,
  disable,
  selected,
}) => {
  const disabled = !selected && disable;
  return (
    <button
      className={`numberButton ${selected && "selectedNumber"}`}
      onClick={() => {
        onClick(selected, value);
      }}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
