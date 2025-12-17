import type { StaticImageData } from 'next/image';

import { Sarah } from './images';

export interface Testimonial {
  name: string;
  courses: string[];
  short: string[];
  long: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Record<string, Testimonial> = {
  TD_0001: {
    name: 'Sarah Pashniak',
    stars: 5,
    image: Sarah,
    courses: [ 'Pediatric Sleep Consultant' ],
    short: [ 'I had a wonderful experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. It felt so personal!' ],
    long: [ 'I had a wonderful experience as a student at QC Wellness School! My favorite thing about my program was the quick feedback from my instructor. It felt so personal! I also found the turnaround rate to be exceptionally fast. If I needed any support or had questions about my assignment, I could ask my tutor. They were always there to help! Not to mention, there was also the Student Support Team. The entire QC staff supports you, helps you with assignments, and answers any questions you may have!' ],
  },
};
