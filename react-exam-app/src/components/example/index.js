import React from "react";

// Modules
import classNames from "classnames";
import types from "prop-types";

// Styles
import "./styles.scss";

export const Name = (props) => {
  const { example } = props;

  const nameClass = classNames({
    nameClass: true,
    "nameClass--example": example,
  });

  return <div className={nameClass}>Hello!</div>;
};

// Type of props
Name.propTypes = {
  example: types.bool,
};

Name.defaultProps = {
  example: true,
};
