import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import ReviewList from "../review-list/review-list";
import {propTypeOffer, propTypeReview} from "../../check-prop-types";


const PlaceCardDetailed = (props) => {
  const {offers, reviews, id, history} = props;

  const currentOffer = offers.filter((offer) => offer.id === parseInt(id, 10))[0];
  const nearOffers = offers.filter((offer) => offer !== currentOffer && offer.city === currentOffer.city).slice(0, 3);

  const options = {
    articleClassName: `near-places__card`,
    wrapperClassName: `near-places__image-wrapper`,
    infoClassName: `near-places__card-info`,
    image: {
      imgWidth: 260,
      imgHeight: 200,
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        {
          <section key={currentOffer.title} className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.pictures.map((picture) => (
                  <div className="property__image-wrapper" key={picture}>
                    <img className="property__image" src={picture} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  currentOffer.premium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${currentOffer.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.features.map((feature) => (
                      <li className="property__inside-item" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {
                      currentOffer.host.pro ?
                        <span className="property__user-status">
                          Pro
                        </span> :
                        ``
                    }
                  </div>
                  <div className="property__description">
                    {currentOffer.description.map((item) => (
                      <p className="property__text" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <ReviewList id={id} reviews={reviews} />
              </div>
            </div>
            <section className="property__map map">
              <Map offers={nearOffers} />
            </section>
          </section>
        }
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {<OffersList
                type = {`near`}
                offers={nearOffers}
                history={history}
                options = {options}
              />}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PlaceCardDetailed.propTypes = {
  history: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  reviews: PropTypes.arrayOf(PropTypes.shape(propTypeReview).isRequired),
};

export default PlaceCardDetailed;
