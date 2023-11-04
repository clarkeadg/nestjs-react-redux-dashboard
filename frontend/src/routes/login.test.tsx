import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../redux/store";
import Login from './login';

describe('Renders login page correctly', async () => {
  it('Should render the page correctly', async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
      const title = await screen.queryByText('Login');

      // Expectations
      expect(title).not.toBeNull();
  });
});