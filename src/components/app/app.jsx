import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {placesAvailable} = props;

  return (
    <MainScreen placesAvailable = {placesAvailable} />
  );
};

App.propTypes = {
  placesAvailable: PropTypes.number.isRequired
};

export default App;
