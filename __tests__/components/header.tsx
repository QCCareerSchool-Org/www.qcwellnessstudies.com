/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';

import { Header } from '../../src/components/Header';
import { useScreenWidth } from '../../src/hooks/useScreenWidth';
import * as breakpoints from '../../src/lib/breakpoints';

jest.mock('../../src/hooks/useScreenWidth');
jest.mock('../../src/hooks/useLocation');

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
