import React, { useState } from "react";
import "./starButton.css";

interface StarButtonProps {
  value: number;
  onClick: (selected: boolean) => void;
}

export const StarButton: React.FC<StarButtonProps> = ({ value, onClick }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`starButton ${selected && "selectedStar"}`}
      onClick={() => {
        onClick(selected);
        setSelected(!selected);
      }}
    >
      <span className="starText">{value}</span>
    </button>
  );
};
