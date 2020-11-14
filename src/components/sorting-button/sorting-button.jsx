import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const SortingButton = (props) => {
  const {sortType, handleClick} = props;

  return (
    <span className="places__sorting-type" tabIndex="0" onClick={handleClick}>{sortType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
  );
};

SortingButton.propTypes = {
  sortType: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {SortingButton};
export default connect(mapStateToProps)(SortingButton);
