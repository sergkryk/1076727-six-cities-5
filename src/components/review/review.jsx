import React from "react";
import PropTypes from "prop-types";
import {propTypeReview} from "../../check-prop-types";


const Review = (props) => {
  const {reviewsToShow} = props;

  const getReviewDate = (date) => {
    return `${date.toLocaleString(`en`, {month: `long`})} ${date.getFullYear()}`;
  };

  return (
    reviewsToShow.map((review) =>
      (
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
              {review.content}
            </p>
            <time className="reviews__time" dateTime={review.date}>{getReviewDate(review.date)}</time>
          </div>
        </li>
      )
    )
  );
};

Review.propTypes = {
  reviewsToShow: PropTypes.arrayOf(PropTypes.shape(propTypeReview).isRequired),
};

export default Review;
