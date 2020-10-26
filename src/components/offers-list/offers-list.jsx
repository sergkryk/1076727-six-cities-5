import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import PlaceCard from "../place-card/place-card";
import PlaceCardNear from "../place-card-near/place-card-near";
import {propTypeOffer} from "../../check-prop-types";

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

  render() {
    const {history, offers} = this.props;

    return (
      offers.map((offer) => (
        <PlaceCardNear
          cardHoverHandler={this.cardHoverHandler}
          offer={offer}
          history={history}
          key={offer.id}/>
      ))
    );
  }

}

OffersList.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  options: PropTypes.shape({
    articleClassName: PropTypes.string.isRequired,
    image: PropTypes.shape({
      imgHeight: PropTypes.number.isRequired,
      imgWidth: PropTypes.number.isRequired,
    }),
    infoClassName: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string.isRequired,
  }),
};

export default OffersList;
