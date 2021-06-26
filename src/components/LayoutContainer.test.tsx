import React from 'react';
import { render } from '../../test/test-utils';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LayoutContainer from './LayoutContainer';

afterEach(cleanup);
it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  const {
    container,
    history: { navigate },
  } = render(<LayoutContainer />);

  const appContainer = container;

  expect(appContainer.innerHTML).toMatch('Welcome!');

  // Navigate to about page
  await navigate('/about')
  expect(container.innerHTML).toContain('About Page');
});
