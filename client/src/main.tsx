import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/pages/Product.tsx';
import ProductListing from './components/pages/ProductListing.tsx';
import DreamList from './components/pages/DreamList.tsx';
import Checkout from './components/pages/Checkout.tsx';
import CoinActivity from './components/pages/CoinActivity.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/productlist',
    element: <ProductListing />,
  },
  {
    path: '/dreamlist',
    element: <DreamList />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/coinactivity',
    element: <CoinActivity />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
