import React from "react";

// Constants
import { reviews } from "../constants";

// Styles
import "./styles.scss";

// ----------------

export const ReviewsSliderSlide = ({ slide }) => {
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
};
