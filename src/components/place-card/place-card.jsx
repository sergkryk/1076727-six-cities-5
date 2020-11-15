import React from "react";
import PropTypes from "prop-types";
import {propTypeOffer} from "../../check-prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";


const PlaceCard = (props) => {
  const {
    history,
    offer: {pictures, title, price, type, rating, id},
    className = `cities__place-card`,
    wrapperClassName = `cities__image-wrapper`,
    infoClassName = `cities__card-info`,
    width = 260,
    height = 200,
    updateActivePlace,
  } = props;

  const cardClickHandler = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  const handleMouseEnter = () => {
    updateActivePlace(id);
  };

  const handleMouseLeave = () => {
    updateActivePlace(``);
  };

  return (
    <article className={`${className} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={cardClickHandler}>
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
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  height: PropTypes.number,
  infoClassName: PropTypes.string,
  offer: PropTypes.shape(propTypeOffer).isRequired,
  width: PropTypes.number,
  wrapperClassName: PropTypes.string,
  updateActivePlace: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateActivePlace(place) {
    dispatch(ActionCreator.updateActivePlace(place));
  },
});

// const mapStateToProps = (state) => ({
//   citySelected: state.citySelected,
//   sortType: state.sortType,
// });

export {PlaceCard};
export default connect(``, mapDispatchToProps)(PlaceCard);
