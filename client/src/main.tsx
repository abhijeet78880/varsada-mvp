import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Product from './components/pages/Product.tsx';
import ProductListing from './components/pages/ProductListing.tsx';
import DreamList from './components/pages/DreamList.tsx';
import Checkout from './components/pages/Checkout.tsx';
import CoinActivity from './components/pages/CoinActivity.tsx';
import Category from './components/pages/Category.tsx';

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
    path: '/category',
    element: <Category />,
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

const queryClient = new QueryClient({});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
