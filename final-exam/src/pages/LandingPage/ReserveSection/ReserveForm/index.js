import React, { useState } from 'react';

import SelectOption from '../../../../components/SelectOption';
import Button from '../../../../components/Button';
import FieldLabel from '../../../../components/FieldLabel';
import InputDateTime from '../../../../components/InputDateTime';
import InputPhone from '../../../../components/InputPhone';
import CalendarDatepicker from '../../../../components/InputDateTime/CalendarDatepicker';

import './styles.scss';

export default function ReserveForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelected, setSelected] = useState(false);
  const [isFocused, setFocused] = useState(false);

  const startDate = new Date();

  const options = [];

  for (let guests = 1; guests <= 10; guests += 1) {
    guests === 1
      ? options.push({ value: '1person', label: '1 Person' })
      : options.push({ value: `${guests}people`, label: `${guests} People` });
  }

  const customStyles = {
    menu: (base) => ({
      ...base,
      borderRadius: 0,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? '#d09e5b'
        : state.isFocused
        ? '#eee'
        : '#fff',
      cursor: 'pointer',
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    singleValue: (base) => ({
      ...base,
      color: '#777',
    }),
  };
  return (
    <>
      <form className="reserve-form">
        <FieldLabel label="Date" id="date" blockTitle>
          <InputDateTime
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            selectsStart
            minDate={startDate}
            calendarContainer={CalendarDatepicker}
          />
        </FieldLabel>

        <FieldLabel label="Time" id="date" blockTitle>
          <InputDateTime
            placeholderText="Select time"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
            calendarContainer={CalendarDatepicker}
          />
        </FieldLabel>

        <FieldLabel label="We are:" id="people">
          <SelectOption
            id="people"
            options={options}
            defaultValue={{ value: '1person', label: '1 Person' }}
            customStyles={customStyles}
            isSelected={isSelected}
            isFocused={isFocused}
            onChange={(option) => setSelected(option)}
            onFocus={(option) => setFocused(option)}
          />
        </FieldLabel>

        <FieldLabel label="Contact number">
          <InputPhone />
        </FieldLabel>

        <Button
          size="md"
          color="beige"
          className="reserve-form__button"
          appearance="rounded"
          type="submit"
        >
          Reserve a table
        </Button>
      </form>
    </>
  );
}
