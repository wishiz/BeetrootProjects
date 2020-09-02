import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import GoogleApiWrapper from './GoogleApiWrapper';

import './styles.scss';

export default function ReserveSection() {
  return (
    <section className="reserve">
      <ContentWidthLimiter fullWidth className="reserve__container">
        <GoogleApiWrapper />
        <div>Form</div>
      </ContentWidthLimiter>
    </section>
  );
}
