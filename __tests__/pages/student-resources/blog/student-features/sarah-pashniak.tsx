import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import Page from '../../../../../src/pages/student-resources/blog/student-features/sarah-pashniak';
import { Location } from '../../../../../src/providers/location';

jest.mock('../../../../../src/providers/location', () => {
  const location: Location = { countryCode: 'CA', countryName: 'Canada', provinceCode: 'ON', provinceName: 'Ontario' };
  return { useLocation: jest.fn().mockReturnValue(location) };
});

jest.mock('../../../../../src/providers/screen-width', () => {
  const defaultScreenWidth = 1024;
  return {
    useScreenWidth: jest.fn().mockReturnValue(defaultScreenWidth),
  };
});

// Prevent act() error logs from Link
// TODO: clean up when fixed: https://github.com/vercel/next.js/pull/20169
jest.mock('next/link', () => (props: { children: unknown }): unknown => props.children);

const Image: React.FC = props => <img {...props} />;
jest.mock('next/image', () => Image);

expect.extend(toHaveNoViolations);

describe('/student-resources/blog/student-features/sarah-pashniak', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
