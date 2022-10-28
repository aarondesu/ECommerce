import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './components/Layout';
import Loading from './components/Loading';
import Login from './pages/Login';

// OTHERS
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));

// PRODUCTS
const Products = lazy(() => import('./pages/Products'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/users',
          element: <Users />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
