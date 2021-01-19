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
  const { numbers, stars } = useSelector(
    (state: RootState) => state.selectedPattern
  );
  const [remainNumbers, setRemainNumbers] = useState(MIN_NUMBERS);
  const [remainStars, setRemainStars] = useState(MIN_STARS);

  useEffect(() => {
    // process the remaining number after the user choice
    const remainNumbers = MIN_NUMBERS > numbers ? MIN_NUMBERS - numbers : 0;
    // process the remaining star after the user choice
    const remainStars = MIN_STARS > stars ? MIN_STARS - stars : 0;

    //set the remainPattern
    setRemainNumbers(remainNumbers);
    setRemainStars(remainStars);
  }, [numbers, stars]);

  // compute the test for numbersCount
  const numbersCount = remainNumbers
    ? `${remainNumbers} ${remainNumbers > 1 ? " Numéros" : "Numéro"}`
    : "";

  // compute the test for "et"
  const andDisplayer = remainNumbers && remainStars ? "et" : "";

  // compute the test for starsCount
  const starsCount = remainStars
    ? `${remainStars} ${remainStars > 1 ? " Étoiles" : "Étoile"}`
    : "";

  const price = getPrice([numbers, stars], prices);

  return (
    <div className="priceContainer">
      {`Tarif: ${
        remainNumbers > 0 || remainStars > 0
          ? `choisissez ${numbersCount} ${andDisplayer} ${starsCount}`
          : `${price}    Cochez d'autres numéros pour faire un multiple`
      }`}
    </div>
  );
};
