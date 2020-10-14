import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import ReviewForm from "../review-form/review-form";
import {propTypeOffer, propTypeReview} from "../../check-prop-types";


const PlaceCardDetailed = (props) => {
  const {offers} = props;
  const {reviews} = props;
  const {id} = props;
  const {history} = props;

  const el = offers.filter((offer) => offer.id === parseInt(id, 10))[0];
  const favOffers = offers.filter((offer) => offer !== el).filter((item) => item.city === el.city).slice(0, 3);
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
          <section key={el.title} className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {el.pictures.map((picture, i) => (
                  <div className="property__image-wrapper" key={i * Math.random()}>
                    <img className="property__image" src={picture} alt="Photo studio"/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  el.premium ?
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                    : ``
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {el.title}
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
                    <span style={{width: `${el.rating * 20}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{el.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {el.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {el.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {el.guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{el.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {el.features.map((feature) => (
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
                      <img className="property__avatar user__avatar" src={el.host.avatar} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {el.host.name}
                    </span>
                    {
                      el.host.pro ?
                        <span className="property__user-status">
                          Pro
                        </span> :
                        ``
                    }
                  </div>
                  <div className="property__description">
                    {el.description.map((item) => (
                      <p className="property__text" key={item}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.filter((review) => review.id === el.id).length}</span></h2>
                  <ul className="reviews__list">
                    {reviews.filter((review) => review.id === el.id).map((review) => (
                      <li className="reviews__item" key={review.avatar}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar"/>
                          </div>
                          <span className="reviews__user-name">
                            {review.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={{width: `${review.rating * 20}%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.review}
                          </p>
                          <time className="reviews__time" dateTime={review.date}>{`${review.date.toLocaleString(`en`, {month: `long`})} ${review.date.getFullYear()}`}</time>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {<ReviewForm />}
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
        }
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {<OffersList
                offers={favOffers}
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
