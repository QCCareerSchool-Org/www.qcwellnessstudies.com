/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Page from '../../../../../../src/pages/student-resources/blog/student-features/sarah-pashniak/index.page';

expect.extend(toHaveNoViolations);

describe('/student-resources/blog/student-features/sarah-pashniak', () => {

  it('shouldn\'t have any usability violations', async () => {
    const { container } = render(<Page />);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });
});
