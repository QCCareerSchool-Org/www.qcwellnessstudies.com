/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React, { ReactElement } from 'react';

import Page from '../../src/pages/about/index.page';

expect.extend(toHaveNoViolations);

describe('/about', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
