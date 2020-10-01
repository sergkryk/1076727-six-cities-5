import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Places = {
  PLACES_AVAILABLE: 112
};

ReactDOM.render(
    <App placesAvailable = {Places.PLACES_AVAILABLE} />,
    document.querySelector(`#root`)
);
