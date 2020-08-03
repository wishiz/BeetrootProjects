import React from "react";

// Modules
import classNames from "classnames";
import types from "prop-types";

// Styles
import "./styles.scss";

export const SectionTitle = (props) => {
  const { heading, capture, color } = props;

  const sectionTitleClass = classNames({
    "section-title": true,
    "section-title--white": color === "white",
    "section-title--grey": color === "grey",
  });

  return (
    <div className={sectionTitleClass}>
      <h1 className="section-title__heading">{heading}</h1>
      <h2 className="section-title__capture">{capture}</h2>
    </div>
  );
};

// Type of props
SectionTitle.propTypes = {
  heading: types.string,
  capture: types.string,
  color: types.string,
};

// Name.defaultProps = {
//   example: true,
// };
