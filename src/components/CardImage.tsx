import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

export type Image = {
  src: string;
  type: string;
};

type Props = {
  images: Image[];
  alt: string;
};

export const CardImage = ({ images, alt }: Props): ReactElement | null => {
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
