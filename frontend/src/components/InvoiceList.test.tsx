import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../redux/store";
import InvoiceList from './InvoiceList';

describe('Renders InvoiceList component correctly', async () => {
  it('Should render the page correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <InvoiceList />
      </Provider>
    );

    const loader = container.querySelector('.animate-spin');
    
    expect(loader).not.toBeNull();
  });
});