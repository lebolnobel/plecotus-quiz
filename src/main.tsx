import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Plecotus from './app/PlecotusApp';
import ErrorPage from './app/pages/ErrorPage';
import Home from './app/pages/Home';
import Quiz from './app/pages/MainQuiz';
import Learn from './app/pages/Learn';
import Species from './app/pages/Species';
import Resources from './app/pages/Resources';
import About from './app/pages/About';
import PlecotusProvider from './context/PlecotusAppContext';
import QuizAppContext from './context/QuizAppContext';

import { NORMAL, DEFAULT_TOTAL, DEFAULT_CHOICES } from './utils/constants';

import './styles/styles.css';

const router = createBrowserRouter(
  [
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
          path: '/quiz',
          element: <Quiz />,
        },
        {
          path: '/learn',
          element: <Learn />,
        },
        {
          path: '/species/:species',
          element: <Species />,
        },
        {
          path: '/resources',
          element: <Resources />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
    },
  },
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlecotusProvider>
      <QuizAppContext
        selectToAnswerMode={true}
        nbChoices={DEFAULT_CHOICES}
        display={NORMAL}
        totalQuestions={DEFAULT_TOTAL}
      >
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </QuizAppContext>
    </PlecotusProvider>
  </React.StrictMode>,
);
