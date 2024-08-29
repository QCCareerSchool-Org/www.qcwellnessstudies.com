import Link from 'next/link';
import type { FC } from 'react';

export const Back: FC = () => (
  <section className="bg-light text-dark">
    <div className="container text-center">
      <Link href="/student-resources" className="btn btn-primary btn-lg text-uppercase">Back to Student Resources</Link>
    </div>
  </section>
);
