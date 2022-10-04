import React from 'react';

import {} from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="*" element={<Page404 />} />
        <Route path="account">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
