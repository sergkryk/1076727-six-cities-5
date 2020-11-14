import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const SortingItem = (props) => {
  const {item, sortType, updateSortType, changeState} = props;

  const handleClick = () => {
    updateSortType(item.type);
    changeState();
  };

  return (
    <li className={`places__option ${item.type === sortType ? `places__option--active` : ``}`} tabIndex="0" onClick={handleClick}>{item.type}</li>
  );
};

SortingItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  updateSortType: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateSortType(type) {
    dispatch(ActionCreator.updateSortType(type));
  },
});

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {SortingItem};
export default connect(mapStateToProps, mapDispatchToProps)(SortingItem);
