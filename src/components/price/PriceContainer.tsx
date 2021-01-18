import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MIN_NUMBERS, MIN_STARS } from "../../constants";
import { RootState } from "../../store/rootReducer";
import { Price } from "../../types";
import "./priceContainer.css";
import { getPrice } from "../../utils";

interface PriceContainerProps {
  prices: Price[];
}

export const PriceContainer: React.FC<PriceContainerProps> = ({ prices }) => {
  const { selectedPattern } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const [remainPattern, setRemainPattern] = useState([MIN_NUMBERS, MIN_STARS]);

  useEffect(() => {
    const remainNumbers =
      MIN_NUMBERS > selectedPattern[0] ? MIN_NUMBERS - selectedPattern[0] : 0;
    const remainStars =
      MIN_STARS > selectedPattern[1] ? MIN_STARS - selectedPattern[1] : 0;
    setRemainPattern([remainNumbers, remainStars]);
  }, [selectedPattern]);

  return (
    <div className="priceContainer">
      {remainPattern[0] > 0 || remainPattern[1] > 0
        ? `choisissez ${
            remainPattern[0]
              ? `${remainPattern[0]} ${
                  remainPattern[0] > 1 ? " Numéros" : "Numéro"
                }`
              : ""
          } ${remainPattern[0] && remainPattern[1] ? "et" : ""} ${
            remainPattern[1]
              ? `${remainPattern[1]} ${
                  remainPattern[1] > 1 ? " Étoiles" : "Étoile"
                }`
              : ""
          }`
        : `${getPrice(
            selectedPattern,
            prices
          )}    Cochez d'autres numéros pour faire un multiple`}
    </div>
  );
};
