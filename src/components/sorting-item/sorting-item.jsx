import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


class SortingItem extends PureComponent {
  constructor(props) {
    super(props);

    this.sortOffers = this.props.sortOffers;
    this.item = this.props.item;

    this._handleClick = this._handleClick.bind(this);

    this.state = {
      active: `POPULAR`,
    };
  }

  _handleClick() {
    this.sortOffers(this.item.type);
  }

  render() {
    return (
      <li className={`places__option ${this.item.type === this.state.active ? `places__option--active` : ``}`} tabIndex="0" onClick={this._handleClick}>{this.item.content}</li>
    );
  }
}

SortingItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
  sortOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sortOffers(type) {
    dispatch(ActionCreator.sortOffers(type));
  },
});

export {SortingItem};
export default connect(``, mapDispatchToProps)(SortingItem);
