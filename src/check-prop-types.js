import PropTypes from "prop-types";

const propTypeOffer = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  premium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string.isRequired),
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pro: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  description: PropTypes.arrayOf(PropTypes.string.isRequired),
  pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
};

const propTypeReview = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  review: PropTypes.string.isRequired,
};

export {propTypeOffer, propTypeReview};
