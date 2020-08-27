import React from 'react';

import Header from './Header';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import OurChefSection from './OurChefSection';
import MenuSection from './MenuSection';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <OurChefSection />
      <MenuSection />
    </div>
  );
}
