import React, {Fragment} from "react";
import PropTypes from "prop-types";

const StarRadioButton = (props) => {
  const {handleFieldChange, item} = props;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={item.value} id={`${item.value}-stars`} type="radio" onChange={handleFieldChange}/>
      <label htmlFor={`${item.value}-stars`} className="reviews__rating-label form__rating-label" title={item.text}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

StarRadioButton.propTypes = {
  handleFieldChange: PropTypes.func.isRequired,
  item: PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default StarRadioButton;
