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
    // process the remaining number after the user choice
    const remainNumbers =
      MIN_NUMBERS > selectedPattern[0] ? MIN_NUMBERS - selectedPattern[0] : 0;
    // process the remaining star after the user choice
    const remainStars =
      MIN_STARS > selectedPattern[1] ? MIN_STARS - selectedPattern[1] : 0;

    //set the remainPattern
    setRemainPattern([remainNumbers, remainStars]);
  }, [selectedPattern]);

  // compute the test for numbersCount
  const numbersCount = remainPattern[0]
    ? `${remainPattern[0]} ${remainPattern[0] > 1 ? " Numéros" : "Numéro"}`
    : "";

  // compute the test for "et"
  const andDisplayer = remainPattern[0] && remainPattern[1] ? "et" : "";

  // compute the test for starsCount
  const starsCount = remainPattern[1]
    ? `${remainPattern[1]} ${remainPattern[1] > 1 ? " Étoiles" : "Étoile"}`
    : "";

  const price = getPrice(selectedPattern, prices);

  return (
    <div className="priceContainer">
      {`Tarif: ${
        remainPattern[0] > 0 || remainPattern[1] > 0
          ? `choisissez ${numbersCount} ${andDisplayer} ${starsCount}`
          : `${price}    Cochez d'autres numéros pour faire un multiple`
      }`}
    </div>
  );
};
