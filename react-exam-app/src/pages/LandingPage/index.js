import React from 'react';

// Components
import AboutUsSection from './AboutUsSection';
import ReviewsSection from './ReviewsSection';
// ----------------

export default function LandingPage() {
  return (
    <div>
      <AboutUsSection sectionName="about-us" />

      <ReviewsSection sectionName="reviews" />
    </div>
  );
}
