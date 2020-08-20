import React from 'react';

import { FaAngleRight } from 'react-icons/fa';
import ReactIcon from '../../../components/ReactIcon';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Button from '../../../components/Button';

import homeSectionData from '../../../constants/homeSectionData';

import './styles.scss';

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <ContentWidthLimiter width="sm" className="home__content-limiter">
        <div className="home__text-wrapper">
          <p className="home__capture">{homeSectionData.capture}</p>
          <h1 className="home__title">{homeSectionData.title}</h1>
          <Button
            className="home__button"
            type="submit"
            size="sm"
            appearance="rounded"
            color="white"
          >
            {homeSectionData.buttonText}
            <ReactIcon size="md" className="home__button-icon">
              <FaAngleRight />
            </ReactIcon>
          </Button>
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
