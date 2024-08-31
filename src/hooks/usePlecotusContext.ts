import * as React from 'react';
import { PlecotusContext } from '../context/PlecotusAppContext.tsx';
import type { PlecotusContextType } from '../context/PlecotusAppContext.tsx';

export const usePlecotusContext = (): PlecotusContextType => {
  const context: PlecotusContextType = React.useContext(PlecotusContext);

  if (!context) {
    throw new Error('usePlecotusContext should be used inside QuizProvider');
  }
  return context;
};
