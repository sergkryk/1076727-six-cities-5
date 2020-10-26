import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {propTypeOffer} from "../../check-prop-types";
import PlaceCardNear from "../place-card-near/place-card-near";
import PlaceCardFavorite from "../place-card-favorite/place-card-favorite";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.cardHoverHandler = this.cardHoverHandler.bind(this);
  }

  cardHoverHandler(evt) {
    this.setState({activeCard: evt.currentTarget});
  }

  renderComponents(Component) {
    const {history, offers} = this.props;

    return offers.map((offer) => (
      <Component
        cardHoverHandler={this.cardHoverHandler}
        offer={offer}
        history={history}
        key={offer.id}/>
    ));
  }

  render() {
    const {type = ``} = this.props;

    switch (type) {
      case `near`:
        return this.renderComponents(PlaceCardNear);
      case `favorites`:
        return this.renderComponents(PlaceCardFavorite);
      default:
        return this.renderComponents(PlaceCard);
    }
  }
}

OffersList.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  type: PropTypes.string,
};

export default OffersList;
