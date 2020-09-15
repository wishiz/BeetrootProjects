import React from 'react';

import Select from 'react-select';
import types from 'prop-types';

import './styles.scss';

export default function SelectOption({
  options,
  maxMenuHeight,
  defaultValue,
  customStyles,
  isSelected,
  isFocused,
  onChange,
  onFocus,
}) {
  return (
    <div className="select-option">
      <Select
        isSelected={isSelected}
        isFocused={isFocused}
        styles={customStyles}
        options={options}
        className="select-option__option"
        maxMenuHeight={maxMenuHeight}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}

SelectOption.propTypes = {
  options: types.arrayOf(types.object).isRequired,
  maxMenuHeight: types.number,
  defaultValue: types.objectOf(types.string),
  customStyles: types.objectOf(types.string),
  isSelected: types.bool,
  isFocused: types.bool,
  onChange: types.func,
  onFocus: types.func,
};

SelectOption.defaultProps = {
  maxMenuHeight: 150,
};
