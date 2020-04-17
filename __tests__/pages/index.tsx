import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import Page from '../../src/pages/index';
import { Location } from '../../src/providers/location';

jest.mock('../../src/providers/location', () => {
  const location: Location = { countryCode: 'CA', countryName: 'Canada', provinceCode: 'ON', provinceName: 'Ontario' };
  return { useLocation: jest.fn().mockReturnValue(location) };
});

jest.mock('../../src/providers/screen-width', () => ({
  useScreenWidth: jest.fn().mockReturnValue(1024),
}));

expect.extend(toHaveNoViolations);

describe('/', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
