import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const City = (props) => {
  const {city, changeCity, citySelected} = props;

  const handleCityClick = () => {
    changeCity(city);
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city === citySelected ? `tabs__item--active` : ``}`} href="#" onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  citySelected: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

const mapStateToProps = (state) => ({
  citySelected: state.citySelected,
});

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);
