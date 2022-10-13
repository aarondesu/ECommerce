/* eslint-disable no-console */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Account/Login';
import Register from './pages/Account/Register';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Category from './pages/Category';
import Page404 from './pages/Page404';
import Dashboard from './pages/Dashboard';

import Protected from './components/Protected';
import Account from './pages/Account';

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Landing />,
    },
    {
      path: 'products/:categoryId',
      element: <Category />,
    },
    {
      path: 'products/product/:productId',
      element: <Product />,
    },
    {
      path: 'account',
      element: <Account />,
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
    {
      path: 'cart',
      element: <Cart />,
    },
    {
      path: 'admin/dashboard',
      errorElement: <Page404 />,
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
