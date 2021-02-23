import Link from 'next/link';
import React from 'react';

interface Image {
  src: string;
  type: string;
}

interface Props {
  images: Image[];
  title: string;
  body?: string;
  buttonText: string;
  link: string;
  externalLink?: boolean;
  alt: string;
}

export const ArticleCard: React.FC<Props> = ({ images, title, body, buttonText, link, externalLink, alt }) => (
  <div className="card shadow-lg rounded-lg">
    {externalLink
      ? <a href={link}><CardImage images={images} alt={alt} /></a>
      : <Link href={link}><a><CardImage images={images} alt={alt} /></a></Link>
    }
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {body !== null && <p className="card-text">{body}</p>}
      <div className="buttonSpacer" />
      {externalLink
        ? <a href={link} className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a>
        : <Link href={link}><a className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a></Link>
      }
    </div>

    <style jsx>{`
    .buttonSpacer {
      height: 31px;
    }
    .absoluteButton {
      position: absolute;
      bottom: 20px;
    }
  `}</style>
  </div>
);

interface CardImageProps {
  images: Image[];
  alt: string;
}

const CardImage: React.FC<CardImageProps> = ({ images, alt }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <picture>
      {[...images].reverse().map((image, i) => <source key={i} srcSet={image.src} type={image.type} />)}
      <img className="card-img-top" src={images[0].src} alt={alt} />
    </picture>
  );
};