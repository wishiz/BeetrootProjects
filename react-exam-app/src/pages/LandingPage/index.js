import React from "react";

// Components
import { AboutUsSection } from "../../pages/LandingPage/AboutUsSection";
import { ReviewsSection } from "../../pages/LandingPage/ReviewsSection";
// import { HomeSection } from "../../pages/LandingPage/HomeSection";
// ----------------

export const LandingPage = () => {
  return (
    <div>
      {/* <HomeSection /> */}

      <AboutUsSection />

      <ReviewsSection />
    </div>
  );
};
