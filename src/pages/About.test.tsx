import React from 'react';
import { render } from '../../test/test-utils';
import { screen, fireEvent, cleanup } from '@testing-library/react';
import About from './About';
import { waitForElement } from '@testing-library/dom';
// Hoist helper functions (but not vars) to reuse between test cases

afterEach(cleanup);

it('renders <About /> page', async () => {
  // You should be able to verify the About page rendered correctly.
  // Render new instance in every test to prevent leaking state
  const {
    container,
    history: { navigate },
  } = render(<About />);
  const appContainer = container;
  expect(appContainer.innerHTML).toMatch("Current Count: 0");
});

it('clicks button and fires increment counter', async () => {
  // You should be able to click the increment button and verify the count.
  const {
    container,
    history: { navigate },
  } = render(<About />);
  const appContainer = container;
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Current Count: 1'));
});
