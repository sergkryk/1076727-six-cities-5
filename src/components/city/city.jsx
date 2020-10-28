import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const City = (props) => {
  const {city, changeCity} = props;

  const onClickShowOffers = () => {
    changeCity(city);
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
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {City};
export default connect(``, mapDispatchToProps)(City);
