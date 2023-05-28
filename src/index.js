import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './component/Pages/HomePage';
import Product_Details from './component/Dynamic/JSX/Product_Details';
import Login_Register from './component/UserPages/JSX/Login_Register';
import Dashboard from './component/UserPages/JSX/Dashboard';
import AboutUs from './component/StaticPages/JSX/AboutUS';
import FAQ from './component/StaticPages/JSX/FAQ';
import TermUse from './component/StaticPages/JSX/TermUse';
import Privacy from './component/StaticPages/JSX/Privacy';
import ContactUs from './component/StaticPages/JSX/ContactUs';
import OnlineStore from './component/Dynamic/JSX/OnlineStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'product-details/:id',
    element: <Product_Details />,
  },
  {
    path: 'login-register',
    element: <Login_Register />,
  },
  {
    path: 'my-dashboard',
    element: <Dashboard />,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
  },
  {
    path: 'faq',
    element: <FAQ />,
  },
  {
    path: 'term-of-use',
    element: <TermUse />,
  },
  {
    path: 'privacy-policy',
    element: <Privacy />,
  },
  {
    path: 'contact-us',
    element: <ContactUs />,
  },
  {
    path: 'online-store',
    element: <OnlineStore />,
  },
  // {
  //   path: '*',
  //   element: < />,
  // },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
