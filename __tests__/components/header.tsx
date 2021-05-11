import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Header } from '../../src/components/header';
import * as breakpoints from '../../src/lib/breakpoints';
import { Location } from '../../src/providers/location';
import { useScreenWidth } from '../../src/providers/screen-width';

jest.mock('../../src/providers/location', () => {
  const location: Location = { countryCode: 'CA', countryName: 'Canada', provinceCode: 'ON', provinceName: 'Ontario' };
  return { useLocation: jest.fn().mockReturnValue(location) };
});

jest.mock('../../src/providers/screen-width', () => {
  const defaultScreenWidth = 1024;
  return {
    useScreenWidth: jest.fn().mockReturnValue(defaultScreenWidth),
  };
});

// Prevent act() error logs from Link
// TODO: clean up when fixed: https://github.com/vercel/next.js/pull/20169
jest.mock('next/link', () => (props: { children: unknown }): unknown => props.children);

expect.extend(toHaveNoViolations);

describe('<Header>', () => {

  describe('when nav = true', () => {

    it('shouldn\'t have any usability violations', async () => {
      const { container } = render(<Header nav={true} />);
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });

    it('should display the main nav', () => {
      const { queryByTestId } = render(<Header nav={true} />);
      expect(queryByTestId(/main-nav/iu)).toBeTruthy();
    });

    // xs, md
    [ 0, breakpoints.xs.end, breakpoints.md.start, breakpoints.md.end ].forEach(screenWidth => {
      it(`should render the small logo when screen size is ${screenWidth}`, () => {
        (useScreenWidth as jest.Mock<number>).mockImplementation(() => screenWidth);
        const { queryByTestId } = render(<Header nav={true} />);
        expect(queryByTestId(/header-logo-sm/iu)).toBeTruthy();
        expect(queryByTestId(/header-logo-lg/iu)).toBeFalsy();
      });
    });

    // sm, lg, xl
    [ breakpoints.sm.start, breakpoints.sm.end, breakpoints.lg.start, breakpoints.lg.end, breakpoints.xl.start ].forEach(screenWidth => {
      it(`should render the large logo when screen size is ${screenWidth}`, () => {
        (useScreenWidth as jest.Mock<number>).mockImplementation(() => breakpoints.lg.start);
        const { queryByTestId } = render(<Header nav={true} />);
        expect(queryByTestId(/header-logo-sm/iu)).toBeFalsy();
        expect(queryByTestId(/header-logo-lg/iu)).toBeTruthy();
      });
    });
  });

  describe('when nav = false', () => {

    it('shouldn\'t have any usability violations', async () => {
      const { container } = render(<Header nav={false} />);
      const result = await axe(container);
      expect(result).toHaveNoViolations();
    });

    it('should not display the main nav', () => {
      const { queryByTestId } = render(<Header nav={false} />);
      expect(queryByTestId(/main-nav/iu)).toBeFalsy();
    });

    // xs, sm
    [ 0, breakpoints.xs.end, breakpoints.sm.start, breakpoints.sm.end ].forEach(screenWidth => {
      it(`should render the small logo when screen size is ${screenWidth}`, () => {
        (useScreenWidth as jest.Mock<number>).mockImplementation(() => screenWidth);
        const { queryByTestId } = render(<Header nav={false} />);
        expect(queryByTestId(/header-logo-sm/iu)).toBeTruthy();
        expect(queryByTestId(/header-logo-lg/iu)).toBeFalsy();
      });
    });

    // md, lg, xl
    [ breakpoints.md.start, breakpoints.md.end, breakpoints.lg.start, breakpoints.lg.end, breakpoints.xl.start ].forEach(screenWidth => {
      it(`should render the large logo when screen size is ${screenWidth}`, () => {
        (useScreenWidth as jest.Mock<number>).mockImplementation(() => breakpoints.lg.start);
        const { queryByTestId } = render(<Header nav={false} />);
        expect(queryByTestId(/header-logo-sm/iu)).toBeFalsy();
        expect(queryByTestId(/header-logo-lg/iu)).toBeTruthy();
      });
    });
  });
});
