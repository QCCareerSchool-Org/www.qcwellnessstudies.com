import PropTypes from 'prop-types';
import React from 'react';

export interface Image {
  src: string;
  type: string;
}

interface CardImageProps {
  images: Image[];
  alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ images, alt }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <picture>
      {[ ...images ].reverse().map((image, i) => <source key={i} srcSet={image.src} type={image.type} />)}
      <img className="card-img-top" src={images[0].src} alt={alt} />
    </picture>
  );
};

CardImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  alt: PropTypes.string.isRequired,
};
