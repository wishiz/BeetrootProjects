import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import GoogleApiWrapper from '../../../components/GoogleApiWrapper';
import SectionTitle from '../../../components/SectionTitle';
import ReserveForm from './ReserveForm';

import { reserveSectionTitle } from '../../../constants/reserveSectionData';

import './styles.scss';

export default function ReserveSection() {
  AOS.init();

  return (
    <section className="reserve" id="reserve">
      <ContentWidthLimiter fullWidth className="reserve__container">
        <div className="reserve__map-block">
          <GoogleApiWrapper />
        </div>

        <div className="reserve__info-block" data-aos="fade-up">
          <SectionTitle
            className="reserve__info-block-title"
            heading={reserveSectionTitle.heading}
            desc={reserveSectionTitle.desc}
            icon={reserveSectionTitle.icon}
          />
          <ReserveForm />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
