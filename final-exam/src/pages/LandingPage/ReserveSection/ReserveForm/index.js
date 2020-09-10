import React from 'react';

import Input from '../../../../components/Input';
import SelectOption from '../../../../components/SelectOption';
import Button from '../../../../components/Button';
import FieldLabel from '../../../../components/FieldLabel';

import './styles.scss';

export default function ReserveForm() {
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <form className="reserve-form">
        <FieldLabel label="Date" id="date" blockTitle>
          <Input type="date" min={today} defaultValue={today} />
        </FieldLabel>

        <FieldLabel label="Time" id="date" blockTitle>
          <Input type="text" placeholder="Enter time" />
        </FieldLabel>

        <FieldLabel label="We are:" id="people">
          <SelectOption id="people" maxNumOfGuests={10} />
        </FieldLabel>

        <FieldLabel label="Contact number">
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+380123456789"
            maxlength={13}
            pattern="^[+380][0-9]*"
          />
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
