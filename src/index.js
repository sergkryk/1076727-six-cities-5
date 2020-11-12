import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {offers, offerReviews} from "./mocks/offers";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const Places = {
  PLACES_AVAILABLE: 112
};

ReactDOM.render(
    <Provider store={store}>
      <App
        placesAvailable = {Places.PLACES_AVAILABLE}
        offers = {offers}
        reviews = {offerReviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
