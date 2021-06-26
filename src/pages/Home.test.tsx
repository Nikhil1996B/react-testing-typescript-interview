import React from 'react';
import { render } from '../../test/test-utils';
import { cleanup } from '@testing-library/react';

import Home from './Home';

describe('renders <Home /> page', () => {
  afterEach(cleanup);
  // You should be able to show that you can verify Home rendered correctly
  test("Greetings h1 tag rendered", async () => {
    render(<Home />)
    const {
      container,
      history: { navigate },
    } = render(<Home />);
    const appContainer = container;
    expect(appContainer.innerHTML).toMatch('Welcome!');
  });
  // test("Greetings h1 tag rendered", async () => {
  //   const appContainer = container;
  //   expect(appContainer.innerHTML).toMatch('Welcome!');
  // });
});
