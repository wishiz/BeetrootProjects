import React from 'react';

// Modules
import types from 'prop-types';

// Components
import ContentLimiter from '../../../components/ContentLimiter';
import SectionTitle from '../../../components/SectionTitle';
import ReviewsSlider from './ReviewsSlider';

// Constants
import titles from '../../../constants/SECTION_TITLE_DATA';

// Styles
import './styles.scss';

// ----------------

export default function ReviewsSection({ sectionName }) {
  const reviewsSectionTitle = titles.find(
    (title) => title.section === sectionName,
  );
  return (
    <section className="reviews">
      <ContentLimiter>
        <SectionTitle
          heading={reviewsSectionTitle.heading}
          capture={reviewsSectionTitle.capture}
          color={reviewsSectionTitle.color}
        />

        <ReviewsSlider />
      </ContentLimiter>
    </section>
  );
}

ReviewsSection.propTypes = {
  sectionName: types.string,
};
