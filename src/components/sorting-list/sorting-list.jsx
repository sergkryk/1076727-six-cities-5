import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {propTypeOffer} from "../../check-prop-types";
import {ActionCreator} from "../../store/action";
import {SortType} from "../../const";
import SortingItem from "../sorting-item/sorting-item";
import SortingButton from "../sorting-button/sorting-button";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);
    this.offers = this.props.offers;
    this.sortType = this.props.sortType;

    this._handleSortClick = this._handleSortClick.bind(this);
    this._toggleSelect = this._toggleSelect.bind(this);

    this.state = {
      opened: false,
    };
  }

  _handleSortClick() {
    this._toggleSelect();
  }

  _toggleSelect() {
    this.setState((prevState) => ({opened: !prevState.opened}));
  }

  componentDidMount() {
    console.log(`success`);
  }

  componentDidUpdate() {
    console.log(`updated`);
  }

  componentWillUnmount() {
    console.log(`deleted`);
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <SortingButton handleClick={this._toggleSelect} sortType={this.sortType}/>
        <ul className={`places__options places__options--custom ${this.state.opened ? `places__options--opened` : ``}`}>
          {SortType.map((item) => (
            <SortingItem item={item} key={item.type} changeState={this._toggleSelect}/>
          ))}
        </ul>
      </form>
    );
  }
}

SortingList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  sortType: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sortOffers(sortedOffers) {
    dispatch(ActionCreator.sortOffers(sortedOffers));
  },
});

const mapStateToProps = (state) => ({
  offers: state.offers,
  sortType: state.sortType,
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
