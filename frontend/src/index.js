import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Business from './pages/Business';
import India from './pages/India';
import IT from './pages/IT';
import Politics from './pages/Politics';
import TopHeadline from './pages/TopHeadline';
import {RouterProvider , createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App />}>
      <Route path = '/india' element = {<India />} />
      <Route path = '/business' element = {<Business />} />
      <Route path = '/it' element = {<IT />} />
      <Route path = '/politics' element = {<Politics />} />
      <Route path = '/topheadline' element = {<TopHeadline />} />
    </Route>

  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
