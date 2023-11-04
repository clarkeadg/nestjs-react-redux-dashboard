import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./routes/login";
import Invoices from "./routes/invoices";
import Bills from "./routes/bills";
import Dashboard from "./routes/layouts/dashboard";
import ProtectedRoute from "./routes/utils/protected";
import UnprotectedRoute from "./routes/utils/unprotected";
import ErrorPage from "./routes/utils/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UnprotectedRoute>
                <Login />
              </UnprotectedRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: "/bills",
    element:  <ProtectedRoute>
                <Dashboard title="Bills">
                  <Bills />
                </Dashboard>
              </ProtectedRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: "/invoices",
    element:  <ProtectedRoute>                
                <Dashboard title="Invoices">
                  <Invoices />
                </Dashboard>
              </ProtectedRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element:  <ErrorPage/>,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>    
  </React.StrictMode>
)
