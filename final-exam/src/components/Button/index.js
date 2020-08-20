import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Button({
  className,
  size,
  color,
  appearance,
  onClick,
  children,
}) {
  const buttonClass = classNames(
    {
      button: true,
      [`button--size-${size}`]: size,
      [`button--color-${color}`]: color,
      [`button--style-${appearance}`]: appearance,
    },
    className,
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  size: types.oneOf(['sm', 'lg']),
  color: types.oneOf(['white', 'beige']),
  appearance: types.string,
  onClick: types.func,
  children: types.node,
};
