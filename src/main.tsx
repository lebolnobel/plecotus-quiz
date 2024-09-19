import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Plecotus from './app/PlecotusApp';
import ErrorPage from './app/components/ErrorPage';
import Home from './app/components/Home';
import Quiz from './app/quiz/MainQuiz';
import Ressources from './app/components/Ressources';
import About from './app/components/About';
import PlecotusProvider from './context/PlecotusAppContext';
import QuizAppContext from './context/QuizAppContext';

import { NORMAL, DEFAULT_TOTAL } from './utils/constants';

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
    <PlecotusProvider>
      <QuizAppContext
        selectToAnswerMode={true}
        display={NORMAL}
        totalQuestions={DEFAULT_TOTAL}
      >
        <RouterProvider router={router} />
      </QuizAppContext>
    </PlecotusProvider>
  </React.StrictMode>,
);
