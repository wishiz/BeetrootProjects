import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import SectionTitle from '../../../components/SectionTitle';
import AboutSlider from './AboutSlider';

import { aboutTitleData } from '../../../constants/aboutSectionData';

import './styles.scss';

export default function AboutSection() {
  return (
    <section className="about" id="restaurant">
      <ContentWidthLimiter className="about__container">
        <SectionTitle
          heading={aboutTitleData.title}
          desc={aboutTitleData.capture}
        />
        <AboutSlider />
      </ContentWidthLimiter>
    </section>
  );
}
