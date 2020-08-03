import React from "react";

// Modules

import classnames from "classnames";
import types from "prop-types";

// Styles

import "./styles.scss";

// ----------------

export const ReactIcon = (props) => {
  const { className, color, size, onClick, id } = props;

  const reactIconClass = classnames(
    {
      "react-icon": true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {props.children}
    </div>
  );
};

// Type of props

ReactIcon.propTypes = {
  className: types.string,
  onClick: types.func,
  color: types.oneOf(["orange"]),
  size: types.string,
  id: types.string,
};
