import React from "react";
import PropTypes from "prop-types";
import City from "../city/city";
import {connect} from "react-redux";

const CitiesList = (props) => {
  const {cities} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <City city={city} key={city}/>
        ))}
      </ul>
    </section>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export {CitiesList};
export default connect(mapStateToProps)(CitiesList);
