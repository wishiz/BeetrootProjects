import React from 'react';

import types, { oneOf } from 'prop-types';
import classNames from 'classnames';

import titleDivider from '../../assets/icons/titleDivider.png';

import './styles.scss';

export default function SectionTitle({
  heading,
  desc,
  icon,
  color,
  className,
}) {
  const SectionTitleClass = classNames(
    {
      'section-title': true,
      [`section-title--${color}`]: color,
    },
    className,
  );

  return (
    <div className={SectionTitleClass}>
      <h2 className="section-title__heading">{heading}</h2>
      <p className="section-title__desc">{desc}</p>
      <Divider icon={icon} />
    </div>
  );
}

function Divider({ icon }) {
  if (!icon) {
    return null;
  }
  return (
    <div className="section-title__divider">
      <img src={titleDivider} alt="Title_divider" />
    </div>
  );
}

SectionTitle.propTypes = {
  heading: types.string,
  desc: types.string,
  icon: types.bool,
  color: oneOf(['light', 'dark']),
};

SectionTitle.defaultTypes = {
  color: 'dark',
};

Divider.propTypes = {
  icon: types.bool,
};
