import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlaceCardFavorite = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);

  return (
    <PlaceCard
      {...restProps}
      className={`favorites__card ${className}`}
      wrapperClassName="favorites__image-wrapper"
      infoClassName="favorites__card-info"
      width={150}
      height={110} />
  );
};

PlaceCardFavorite.propTypes = {
  className: PropTypes.string,
};

export default PlaceCardFavorite;
