import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../redux/store";
import BillsList from './BillList';

describe('Renders BillList component correctly', async () => {
  it('Should render the page correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <BillsList />
      </Provider>
    );

    const loader = container.querySelector('.animate-spin');
    
    expect(loader).not.toBeNull();
  });
});