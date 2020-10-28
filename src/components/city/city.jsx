import React from "react";
import PropTypes from "prop-types";


const City = (props) => {
  const {city} = props;

  const onClickShowOffers = () => {
    console.log(`You clicked the ${city}`);
  };

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#" onClick={onClickShowOffers}>
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.string.isRequired,
};

export default City;
