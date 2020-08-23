import React from 'react';

// Modules
import classNames from 'classnames';
import types from 'prop-types';

// Styles
import './styles.scss';

export default function SectionTitle({ heading, capture, color }) {
  const sectionTitleClass = classNames({
    'section-title': true,
    'section-title--white': color === 'white',
    'section-title--grey': color === 'grey',
  });

  return (
    <div className={sectionTitleClass}>
      <h1 className="section-title__heading">{heading}</h1>
      <h2 className="section-title__capture">{capture}</h2>
    </div>
  );
}

// Type of props
SectionTitle.propTypes = {
  heading: types.string,
  capture: types.string,
  color: types.oneOf(['white', 'grey']),
};

SectionTitle.defaultProps = {
  heading: 'Section header',
  capture: 'Section description',
  color: 'white',
};
