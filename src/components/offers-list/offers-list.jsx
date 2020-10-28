import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import PlaceCardNear from "../place-card-near/place-card-near";
import PlaceCardFavorite from "../place-card-favorite/place-card-favorite";
import {propTypeOffer} from "../../check-prop-types";

const OffersList = (props) => {
  const {type, history, offers} = props;
  let Component = PlaceCard;

  switch (type) {
    case `near`:
      Component = PlaceCardNear;
      break;
    case `favorite`:
      Component = PlaceCardFavorite;
      break;
  }

  return (
    offers.map((offer) => (
      <Component
        offer={offer}
        history={history}
        key={offer.id}
      />
    ))
  );
};

OffersList.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
};

export default OffersList;
