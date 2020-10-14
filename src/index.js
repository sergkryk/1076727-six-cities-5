import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {offers, offerReviews} from "./mocks/offers";

const Places = {
  PLACES_AVAILABLE: 112
};

ReactDOM.render(
    <App
      placesAvailable = {Places.PLACES_AVAILABLE}
      offers = {offers}
      reviews = {offerReviews}
    />,
    document.querySelector(`#root`)
);
