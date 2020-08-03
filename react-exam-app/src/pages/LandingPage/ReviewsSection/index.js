import React from "react";

// Components
import { ContentLimiter } from "./../../../components/ContentLimiter";
import { SectionTitle } from "./../../../components/SectionTitle";
import { ReviewsSlider } from "./ReviewsSlider";

// Styles
import "./styles.scss";

// ----------------

export const ReviewsSection = () => {
  const reviewsSectionTitle = {
    heading: "Happy clients",
    capture: "Some kind words from our clients",
    color: "white",
  };

  return (
    <section className="reviews">
      <ContentLimiter>
        <SectionTitle
          heading="Happy clients"
          capture={reviewsSectionTitle.capture}
          color={reviewsSectionTitle.color}
        />

        <ReviewsSlider />
      </ContentLimiter>
    </section>
  );
};
