import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Plecotus from './app/Plecotus.tsx';
import ErrorPage from './app/components/ErrorPage.tsx';
import Home from './app/components/Home.tsx';
import Quiz from './app/components/Quiz.tsx';
import Ressources from './app/components/Ressources.tsx';
import About from './app/components/About.tsx';

import './styles/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Plecotus />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'ressources',
        element: <Ressources />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
