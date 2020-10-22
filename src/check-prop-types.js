import PropTypes from "prop-types";

const propTypeOffer = {
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string.isRequired),
  features: PropTypes.arrayOf(PropTypes.string.isRequired),
  guests: PropTypes.number.isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pro: PropTypes.bool.isRequired,
  }),
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const propTypeReview = {
  avatar: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export {propTypeOffer, propTypeReview};
