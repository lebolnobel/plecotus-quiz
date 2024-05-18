import React from 'react';
import ReactDOM from 'react-dom/client';

import Quiz from './app/Quiz.tsx';

import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>,
);
