import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import store from "../redux/store";
import Modal from './Modal';

describe('Renders Modal component correctly', async () => {
  it('Should render the page correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );

    const modal = container.querySelector('#modal');
    
    expect(modal).not.toBeNull();
  });
});