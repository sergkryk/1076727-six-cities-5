import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SortType} from "../../const";
import SortingItem from "../sorting-item/sorting-item";
import SortingButton from "../sorting-button/sorting-button";

const SortingList = (props) => {
  const {sortType, toggleActive, isActive} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <SortingButton handleClick={toggleActive} sortType={sortType}/>
      <ul className={`places__options places__options--custom ${isActive ? `places__options--opened` : ``}`}>
        {SortType.map((item) => (
          <SortingItem item={item} key={item.type} changeState={toggleActive}/>
        ))}
      </ul>
    </form>
  );
};

SortingList.propTypes = {
  isActive: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  toggleActive: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {SortingList};
export default connect(mapStateToProps)(SortingList);
