import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

interface Props {
  image: StaticImageData;
  title: string;
  body?: string;
  buttonText: string;
  link: string;
  externalLink?: boolean;
  alt: string;
}

export const ArticleCard: FC<Props> = ({ image, title, body, buttonText, link, externalLink, alt }) => (
  <div className="card shadow-lg mb-5">
    {externalLink
      ? <a href={link}><Image className="card-img-top" src={image} alt={alt} style={{ height: 'auto' }} /></a>
      : <Link href={link}><Image className="card-img-top" src={image} alt={alt} style={{ height: 'auto' }} /></Link>
    }
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {typeof body !== 'undefined' && <p className="card-text">{body}</p>}
      <div className="buttonSpacer" />
      {externalLink
        ? <a href={link} className="absoluteButton btn btn-sm btn-secondary">{buttonText}</a>
        : <Link href={link} className="absoluteButton btn btn-sm btn-secondary">{buttonText}</Link>
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
