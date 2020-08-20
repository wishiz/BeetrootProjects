import React from 'react';

import types from 'prop-types';

import titleDivider from '../../assets/icons/titleDivider.png';

import './styles.scss';

export default function SectionTitle({ heading, desc, icon }) {
  // const exampleClass = classNames({
  //   exampleClass: true,
  //   'exampleClass--modificator': example,
  // });

  return (
    <div className="section-title">
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
};

Divider.propTypes = {
  icon: types.bool,
};
