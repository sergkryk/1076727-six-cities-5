import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {propTypeOffer} from "../../check-prop-types";
import {ActionCreator} from "../../store/action";
import {SortType} from "../../const";
import SortingItem from "../sorting-item/sorting-item";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);
    this.offers = this.props.offers;

    this._handleSortClick = this._handleSortClick.bind(this);

    this.state = {
      opened: false,
    };
  }

  _handleSortClick() {
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
        <span className="places__sorting-type" tabIndex="0" onClick={this._handleSortClick}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.opened ? `places__options--opened` : ``}`}>
          {SortType.map((item) => (
            <SortingItem item={item} key={item.content} />
          ))}
        </ul>
      </form>
    );
  }
}

SortingList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
};

const mapDispatchToProps = (dispatch) => ({
  sortOffers(sortedOffers) {
    dispatch(ActionCreator.sortOffers(sortedOffers));
  },
});

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
