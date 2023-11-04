import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import ErrorPage from './error-page';

describe('Renders error page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(
      <ErrorPage/>
    );
      const title = await screen.queryByText('Oops!');

      // Expectations
      expect(title).not.toBeNull();
  });
});