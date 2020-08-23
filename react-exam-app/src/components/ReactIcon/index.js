/* eslint-disable react/require-default-props */
import React from 'react';

// Modules

import classnames from 'classnames';
import types from 'prop-types';

// Styles

import './styles.scss';

// ----------------

export default function ReactIcon({
  className,
  color,
  size,
  onClick,
  id,
  children,
}) {
  const reactIconClass = classnames(
    {
      'react-icon': true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className,
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
}

// Type of props

ReactIcon.propTypes = {
  children: types.node.isRequired,
  className: types.string,
  onClick: types.func,
  color: types.oneOf(['orange']),
  size: types.string,
  id: types.string,
};
