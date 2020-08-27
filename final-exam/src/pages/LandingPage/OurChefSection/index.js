import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import SectionTitle from '../../../components/SectionTitle';

import {
  ourChefTitle,
  ourChefMainText,
} from '../../../constants/ourChefSectionData';
import chefSignature from '../../../assets/images/chef_signature.png';

import './styles.scss';

export default function OurChefSection() {
  return (
    <section className="our-chef" id="our-chef">
      <ContentWidthLimiter className="our-chef__container">
        <SectionTitle
          className="our-chef__title"
          heading={ourChefTitle.heading}
          desc={ourChefTitle.desc}
          icon={ourChefTitle.icon}
          color={ourChefTitle.color}
        />
        <div className="our-chef__text-block">
          <p>{ourChefMainText['top-paragraph']}</p>
          <p>{ourChefMainText['bottom-paragraph']}</p>
        </div>
        <div className="our-chef__signature-wrapper">
          <img src={chefSignature} alt="chef_signature" />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
