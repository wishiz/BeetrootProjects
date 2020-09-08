import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';

import galleryPics from '../../../constants/gallerySectionData';

import './styles.scss';

export default function GallerySection() {
  AOS.init();

  return (
    <section className="gallery" id="gallery">
      <ContentWidthLimiter className="gallery__container" fullWidth>
        <div className="gallery__grid-wrapper">
          {galleryPics.map((pic) => (
            <div
              className={`gallery__grid-card${pic.id} gallery__grid-card`}
              data-aos="fade-right"
              key={pic.id}
            >
              <img
                src={pic.src}
                alt={pic.alt}
                title={pic.title}
                className="img-cover"
              />
            </div>
          ))}
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
