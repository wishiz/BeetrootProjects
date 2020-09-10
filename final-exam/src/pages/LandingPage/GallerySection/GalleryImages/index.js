import React from 'react';

import types from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';

import galleryPics from '../../../../constants/gallerySectionData';

import './styles.scss';

export default function GalleryImages({ onClick }) {
  AOS.init();
  return (
    <div className="gallery__grid-wrapper">
      {galleryPics.map((pic, index) => (
        <div
          className={`gallery__grid-card${pic.id} gallery__grid-card`}
          data-aos="fade-up"
          key={pic.id}
        >
          <img
            src={pic.src}
            alt={pic.alt}
            title={pic.title}
            className="img-cover"
            onClick={() => onClick(index)}
          />
          <span
            className="card-icon-open fa fa-expand"
            onClick={() => onClick(index)}
          />
        </div>
      ))}
    </div>
  );
}

GalleryImages.propTypes = {
  onClick: types.func.isRequired,
};
