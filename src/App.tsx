import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app/App.css";
import { fetchPrices } from "./store/prices/pricesSlice";
import { RootState } from "./store/rootReducer";
import { Status } from "./types";

const App = () => {
  const dispatch = useDispatch();
  const { prices, status, error } = useSelector(
    (state: RootState) => state.prices
  );

  useEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);

  let Container = () => {
    if (status === Status.loading) {
      return <p>Loading...</p>;
    } else if (status === Status.failed) {
      return <p>{error}</p>;
    } else {
      return <p>Here will be the grid of euromillion</p>;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Container />
      </div>
    </div>
  );
};

export default App;
