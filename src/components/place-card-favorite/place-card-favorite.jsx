import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

const PlaceCardNear = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlaceCard className={`favorites__card ${className}`} {...restProps}
      wrapperClassName="favorites__image-wrapper"
      infoClassName="favorites__card-info"
      width={150}
      height={110} />
  );
};

PlaceCardNear.propTypes = {
  className: PropTypes.string,
};

export default PlaceCardNear;
