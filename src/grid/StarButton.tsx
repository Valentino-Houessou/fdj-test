import React, { useState } from "react";
import "./starButton.css";

interface StarButtonProps {
  value: number;
}

export const StarButton: React.FC<StarButtonProps> = ({ value }) => {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={`starButton ${selected && "selectedStar"}`}
      onClick={() => {
        setSelected(!selected);
      }}
    >
      <span className="starText">{value}</span>
    </button>
  );
};
