import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PlaceCardDetailed from "../place-card-detailed/place-card-detailed";
import {propTypeOffer, propTypeReview} from "../../check-prop-types";

const App = (props) => {
  const {placesAvailable} = props;
  const {offers} = props;
  const {reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainScreen
              placesAvailable={placesAvailable}
              offers={offers}
              history={history} />
          )}
        />
        <Route path="/login" exact>
          <LoginScreen />
        </Route>
        <Route exact
          path="/favorites"
          render={({history}) => (
            <FavoritesScreen
              offers={offers}
              history={history}
            />
          )}
        />
        <Route exact
          path="/offer/:id"
          render={({match, history}) => (
            <PlaceCardDetailed
              id = {match.params.id}
              history={history}
              offers={offers}
              reviews={reviews}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesAvailable: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  reviews: PropTypes.arrayOf(PropTypes.shape(propTypeReview).isRequired),
};

export default App;
