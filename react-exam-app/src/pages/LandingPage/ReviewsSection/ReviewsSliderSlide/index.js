import React from 'react';

// Modules
import types from 'prop-types';

// Constants
import reviews from '../../../../constants/REVIEWS_DATA';

// Styles
import './styles.scss';

// ----------------

export default function ReviewsSliderSlide({ slide }) {
  const reviewSlide = reviews.find((card) => slide === card.flag);

  return (
    <div className="reviews-slide">
      <div className="reviews-slide__img-wrapper">
        <img className="img-cover" src={reviewSlide.photo} alt="reviewer_pic" />
      </div>
      <p className="reviews-slide__review">{reviewSlide.review}</p>
      <h3 className="reviews-slide__name">{reviewSlide.name}</h3>
    </div>
  );
}

ReviewsSliderSlide.propTypes = {
  slide: types.string,
};

ReviewsSliderSlide.defaultProps = {
  slide: 'firstReview',
};
