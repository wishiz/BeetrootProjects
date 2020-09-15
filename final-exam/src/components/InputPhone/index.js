import React, { useState } from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './styles.scss';

export default function InputPhone() {
  const [phone, setPhone] = useState('');

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div className="input-phone">
      <PhoneInput
        value={phone}
        onChange={handleOnChange}
        country="ua"
        placeholder="+380"
      />
    </div>
  );
}
