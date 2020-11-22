import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import {propTypeOffer} from "../../check-prop-types";
import {getOffersByCity, sortArray} from "../../utils";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import Header from "../header/header";
import MainScreenPlaces from "../main-screen-places/main-screen-places";
import MainScreenEmpty from "../main-screen-empty/main-screen-empty";

const MainScreen = (props) => {
  const {citySelected, history, sortType, offers} = props;
  const placesByCity = getOffersByCity(offers, citySelected);
  const sortedPlaces = sortArray(placesByCity, sortType);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${!placesByCity.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {placesByCity.length ? <MainScreenPlaces placesByCity={placesByCity} sortedPlaces={sortedPlaces} history={history}/> : <MainScreenEmpty city={citySelected}/>}
        </div>
      </main>
    </div>
  );
};

MainScreen.propTypes = {
  citySelected: PropTypes.string.isRequired,
  history: PropTypes.object,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  sortType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateCityOffers(city) {
    dispatch(ActionCreator.updateCityOffers(city));
  },
});

const mapStateToProps = (state) => ({
  citySelected: state.citySelected,
  sortType: state.sortType,
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
