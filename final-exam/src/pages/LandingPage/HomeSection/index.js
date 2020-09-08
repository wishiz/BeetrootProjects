import React from 'react';

import { FaAngleRight } from 'react-icons/fa';
import ReactIcon from '../../../components/ReactIcon';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Button from '../../../components/Button';

import homeData from '../../../constants/homeSectionData';

import './styles.scss';

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <ContentWidthLimiter width="sm" className="home__content-limiter">
        <div className="home__text-wrapper">
          <p className="home__capture">{homeData.capture}</p>
          <h1 className="home__title">{homeData.title}</h1>
          <Button
            className="home__reserve-button"
            type="submit"
            size="sm"
            appearance="rounded"
            color="white"
          >
            {homeData.buttonText}
            <ReactIcon size="md" className="home__reserve-button-icon">
              <FaAngleRight />
            </ReactIcon>
          </Button>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
