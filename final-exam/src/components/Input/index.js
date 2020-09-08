import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Input({
  placeholder,
  defaultValue,
  maxlength,
  className,
  pattern,
  error,
  value,
  name,
  min,
  type,
  id,
}) {
  const inputClass = classNames(
    {
      input: true,
      'input--error': error,
    },
    className,
  );

  return (
    <div className={inputClass}>
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        maxLength={maxlength}
        pattern={pattern}
        value={value}
        type={type}
        name={name}
        min={min}
        id={id}
        required
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: types.string,
  defaultValue: types.string,
  className: types.string,
  maxlength: types.number,
  pattern: types.string,
  error: types.string,
  value: types.string,
  name: types.string,
  min: types.string,
  type: types.string,
  id: types.string,
};

Input.defaultProps = {
  placeholder: 'Please enter',
  type: 'text',
};
