import React from "react";
import PlaceCard from "../place-card/place-card";

const PlaceCardNear = (props) => {
  const {className = ``} = props;
  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <PlaceCard className={`near-places__card ${className}`} {...restProps} />
  );
};

export default PlaceCardNear;
