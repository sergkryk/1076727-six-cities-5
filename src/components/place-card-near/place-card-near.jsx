import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlaceCardNear = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlaceCard className={`near-places__card ${className}`} {...restProps} wrapperClassName="near-places__image-wrapper" infoClassName="near-places__card-info" />
  );
};

PlaceCardNear.propTypes = {
  className: PropTypes.string,
};

export default PlaceCardNear;
