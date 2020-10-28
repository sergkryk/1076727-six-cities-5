import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const MainTitle = (props) => {
  const {city, offersNumber} = props;

  return (
    <b className="places__found">{`${offersNumber} places to stay in ${city}`}</b>
  );
};

MainTitle.propTypes = {
  city: PropTypes.string.isRequired,
  offersNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.citySelected,
});

export {MainTitle};
export default connect(mapStateToProps)(MainTitle);
