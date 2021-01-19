import React from "react";
import "./starButton.css";

interface StarButtonProps {
  value: number;
  onClick: (selected: boolean, value: number) => void;
  selected: boolean;
  disable: boolean;
}

export const StarButton: React.FC<StarButtonProps> = ({
  value,
  onClick,
  disable,
  selected,
}) => {
  const disabled = !selected && disable;
  return (
    <button
      className={`starButton ${selected && "selectedStar"} ${
        disabled && "disabledStar"
      }`}
      onClick={() => {
        onClick(selected, value);
      }}
      disabled={disabled}
    >
      <span className="starText">{value}</span>
    </button>
  );
};
