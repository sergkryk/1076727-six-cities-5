import React from "react";
import PropTypes from "prop-types";
import {propTypeOffer} from "../../check-prop-types";


const PlaceCard = (props) => {
  const {
    cardHoverHandler,
    history,
    offer: {pictures, title, price, type, rating, id},
    className = `cities__place-card`,
    wrapperClassName = `cities__image-wrapper`,
    infoClassName = `cities__card-info`,
    width = 260,
    height = 200,
  } = props;

  const cardClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  return (
    <article className={`${className} place-card`} onMouseEnter={cardHoverHandler} onClick={cardClickHandler}>
      <div className={`${wrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={pictures[0]} width={width} height={height} alt={title}/>
        </a>
      </div>
      <div className={`${infoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  cardHoverHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  height: PropTypes.number,
  infoClassName: PropTypes.string,
  offer: PropTypes.shape(propTypeOffer).isRequired,
  width: PropTypes.number,
  wrapperClassName: PropTypes.string,
};

export default PlaceCard;
