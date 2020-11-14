import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import MainTitle from "../main-title/main-title";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortingList from "../sorting-list/sorting-list";
import {propTypeOffer} from "../../check-prop-types";
import {connect} from "react-redux";
import {getOffersByCity, sortArray} from "../../utils";
import {ActionCreator} from "../../store/action";

const MainScreen = (props) => {
  const {citySelected, history, sortType, offers} = props;
  const offersSortedByCitySelected = getOffersByCity(offers, citySelected);
  const sortedOffers = sortArray(offersSortedByCitySelected, sortType);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <MainTitle offersNumber={offersSortedByCitySelected.length} />
              <SortingList />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={sortedOffers}
                  history={history}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={sortedOffers}/>
              </section>
            </div>
          </div>
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
