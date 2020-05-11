import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Header } from '../../src/components/header';
import { Location } from '../../src/providers/location';
import { useScreenWidth } from '../../src/providers/screen-width';

jest.mock('../../src/providers/location', () => {
  const location: Location = { countryCode: 'CA', countryName: 'Canada', provinceCode: 'ON', provinceName: 'Ontario' };
  return { useLocation: jest.fn().mockReturnValue(location) };
});

jest.mock('../../src/providers/screen-width', () => ({
  useScreenWidth: jest.fn(),
}));
(useScreenWidth as jest.Mock<number>).mockImplementation(() => 1024);

expect.extend(toHaveNoViolations);

describe('<Header>', () => {

  [ true, false ].forEach(nav => {
    it(`shouldn't have any usability violations when nav = ${nav ? 'true' : 'false'}`, async () => {
      const { container } = render(<Header nav={nav} />);
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });
  });

  it('should render the correct logo when nav = true', () => {
    // screenWidth < 576 || screenWidth >= 768 && screenWidth < 992
    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 320);
    const { queryByTestId, rerender } = render(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 575);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 576);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 767);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 768);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 991);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 992);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 1680);
    rerender(<Header nav={true} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();
  });

  it('should render the correct logo when nav = false', () => {
    // screenWidth < 768
    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 320);
    const { queryByTestId, rerender } = render(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 767);
    rerender(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeTruthy();
    expect(queryByTestId(/header-logo-lg/i)).toBeFalsy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 768);
    rerender(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 991);
    rerender(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 992);
    rerender(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();

    (useScreenWidth as jest.Mock<number>).mockImplementation(() => 1680);
    rerender(<Header nav={false} />);
    expect(queryByTestId(/header-logo-sm/i)).toBeFalsy();
    expect(queryByTestId(/header-logo-lg/i)).toBeTruthy();
  });

  it('should display the main nav when nav = true', () => {
    const { queryByTestId } = render(<Header nav={true} />);
    expect(queryByTestId(/main-nav/i)).toBeTruthy();
  });

  it('should not display the main nav when nav = false', () => {
    const { queryByTestId } = render(<Header nav={false} />);
    expect(queryByTestId(/main-nav/i)).toBeFalsy();
  });
});
