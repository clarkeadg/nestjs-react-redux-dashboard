import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Dashboard from './dashboard';
import Bills from '../bills';

const router = createBrowserRouter([
  {
    path: "*",
    element: <Dashboard title="Invoices">
                <Bills/>
            </Dashboard> 
  }
]);

describe('Renders dashboard layout correctly', async () => {
  it('Should render the page correctly', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    );
      const title = await screen.getAllByText('Invoices');

      // Expectations
      expect(title).not.toBeNull();
  });
});