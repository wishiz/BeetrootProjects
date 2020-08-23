/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// Modules
import Slider from 'react-slick';

// Components
import ReviewsSliderSlide from '../ReviewsSliderSlide';

// ----------------

export default function ReviewsSlider() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="reviews-slider">
      <Slider {...settings}>
        <ReviewsSliderSlide slide="firstReview" />
        <ReviewsSliderSlide slide="secondReview" />
        <ReviewsSliderSlide slide="thirdReview" />
        <ReviewsSliderSlide slide="fourthReview" />
        <ReviewsSliderSlide slide="fifthReview" />
        <ReviewsSliderSlide slide="sixthReview" />
      </Slider>
    </div>
  );
}
