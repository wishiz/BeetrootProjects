import React from 'react';

import types from 'prop-types';

import './styles.scss';

export default function SelectOption({ maxNumOfGuests, id }) {
  const numOfGuests = [];

  for (let guests = 1; guests <= maxNumOfGuests; guests += 1) {
    numOfGuests.push(guests);
  }

  return (
    <div className="select-option">
      <select id={id} className="select-option__option">
        {numOfGuests.map((num) =>
          num === 1 ? (
            <option value={`${num}guest`} key={num}>{`${num} Person`}</option>
          ) : (
            <option value={`${num}guests`} key={num}>{`${num} People`}</option>
          ),
        )}
      </select>
    </div>
  );
}

SelectOption.propTypes = {
  maxNumOfGuests: types.number,
  name: types.string,
  id: types.string,
};
