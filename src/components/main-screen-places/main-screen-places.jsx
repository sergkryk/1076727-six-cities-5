import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import MainTitle from "../main-title/main-title";
import Map from "../map/map";
import SortingList from "../sorting-list/sorting-list";
import {propTypeOffer} from "../../check-prop-types";
import withActiveState from "../../hoc/with-active-state/with-active-state";

const SortingListWrapped = withActiveState(SortingList);

const MainScreenPlaces = (props) => {
  const {history, sortedPlaces, placesByCity} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle offersNumber={placesByCity.length} />
        <SortingListWrapped />
        <div className="cities__places-list places__list tabs__content">
          <PlacesList
            offers={sortedPlaces}
            history={history}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={sortedPlaces}/>
        </section>
      </div>
    </div>
  );
};

MainScreenPlaces.propTypes = {
  history: PropTypes.object,
  sortedPlaces: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  placesByCity: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
};

export default MainScreenPlaces;
