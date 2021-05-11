import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Footer } from '../../src/components/footer';

jest.mock('../../src/components/telephone-number', () => ({
  TelephoneNumber: jest.fn().mockReturnValue(null),
}));

jest.mock('../../src/components/address', () => ({
  Address: jest.fn().mockReturnValue(null),
}));

// Prevent act() error logs from Link
// TODO: clean up when fixed: https://github.com/vercel/next.js/pull/20169
jest.mock('next/link', () => (props: { children: unknown }): unknown => props.children);

expect.extend(toHaveNoViolations);

describe('<Footer>', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Footer />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
