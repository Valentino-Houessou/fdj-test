import React, { useState } from "react";
import "./starButton.css";

interface StarButtonProps {
  value: number;
  onClick: (selected: boolean) => void;
  disable: boolean;
}

export const StarButton: React.FC<StarButtonProps> = ({
  value,
  onClick,
  disable,
}) => {
  const [selected, setSelected] = useState(false);
  const disabled = !selected && disable;
  return (
    <button
      className={`starButton ${selected && "selectedStar"} ${
        disabled && "disabledStar"
      }`}
      onClick={() => {
        onClick(selected);
        setSelected(!selected);
      }}
      disabled={disabled}
    >
      <span className="starText">{value}</span>
    </button>
  );
};
