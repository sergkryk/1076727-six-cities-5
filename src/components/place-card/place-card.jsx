import React from "react";
import PropTypes from "prop-types";
import {propTypeOffer} from "../../check-prop-types";


const PlaceCard = (props) => {
  const {
    cardHoverHandler,
    history,
    offer: {pictures, title, price, type, rating, id},
    options: {articleClassName, wrapperClassName, infoClassName, image: {imgWidth, imgHeight}},
  } = props;

  const cardClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  return (
    <article className={`${articleClassName} place-card`} onMouseEnter={cardHoverHandler} onClick={cardClickHandler}>
      <div className={`${wrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={pictures[0]} width={imgWidth} height={imgHeight} alt={title}/>
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
  history: PropTypes.object.isRequired,
  offer: PropTypes.shape(propTypeOffer).isRequired,
  options: PropTypes.shape({
    articleClassName: PropTypes.string.isRequired,
    image: PropTypes.shape({
      imgWidth: PropTypes.number.isRequired,
      imgHeight: PropTypes.number.isRequired,
    }),
    infoClassName: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string.isRequired,
  }),
};

export default PlaceCard;
