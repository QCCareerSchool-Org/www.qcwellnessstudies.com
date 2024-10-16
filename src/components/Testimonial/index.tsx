import type { FC } from 'react';

import { IoStar } from 'react-icons/io5';
import { ImageCircle } from '../ImageCircle';

import { testimonials } from './data';
import styles from './index.module.css';

interface Props {
  id: string;
  className?: string;
}

export const TestimonialSection: FC<Props> = ({ id, className }) => {

  const testimonial = testimonials[id];

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8 col-xxl-6">
            <div className="d-flex justify-content-center mb-3">
              {Array.from({ length: 5 }).map((_, index) => <IoStar color={testimonial.stars > index ? 'gold' : 'lightgrey'} size={25} />)}
            </div>
            <blockquote>
              <div className={styles.text}>
                {testimonial.long.map((q, i, a) => {
                  if (i < a.length - 1) {
                    return <p key={i} className={styles.quotation}>&ldquo;{q}</p>;
                  }
                  return <p key={i} className={styles.quotation}>&ldquo;{q}&rdquo;</p>;
                })}
              </div>
              <footer className={styles.footer}>
                <ImageCircle src={testimonial.image} alt={testimonial.name} imagePositionX={testimonial.imagePositionX} imagePositionY={testimonial.imagePositionY} size={96} />
                <cite className={styles.name}>{testimonial.name}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
