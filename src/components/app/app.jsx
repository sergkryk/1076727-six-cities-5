import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";

// const App = (props) => {
//   const {placesAvailable} = props;

//   return (
//     <MainScreen placesAvailable = {placesAvailable} />
//   );
// };


const App = (props) => {
  const {placesAvailable} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainScreen placesAvailable={placesAvailable} />
        </Route>
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesScreen />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesAvailable: PropTypes.number.isRequired
};

export default App;
