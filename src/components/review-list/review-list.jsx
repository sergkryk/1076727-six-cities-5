import React from "react";
import PropTypes from "prop-types";
import ReviewForm from "../review-form/review-form";
import Review from "../review/review";
import {propTypeOffer, propTypeReview} from "../../check-prop-types";


const ReviewList = (props) => {
  const {reviews, id} = props;

  const reviewsToShow = reviews.filter((review) => review.id === parseInt(id, 10));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsToShow.length}</span></h2>
      <ul className="reviews__list">
        {reviewsToShow.map((review) => <Review review={review} key={review.id}/>)}
      </ul>
      {<ReviewForm />}
    </section>
  );
};

ReviewList.propTypes = {
  id: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propTypeOffer).isRequired),
  reviews: PropTypes.arrayOf(PropTypes.shape(propTypeReview).isRequired),
};

export default ReviewList;
