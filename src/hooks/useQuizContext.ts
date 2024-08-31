import * as React from 'react';
import { QuizContext } from '../context/QuizAppContext.tsx';
import type { QuizContextType } from '../context/QuizAppContext.tsx';

export const useQuizContext = (): QuizContextType => {
  const context: QuizContextType = React.useContext(QuizContext);

  if (!context) {
    throw new Error('useQuizContext should be used inside QuizProvider');
  }
  return context;
};
