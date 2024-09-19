import * as React from 'react';
import { PlecotusContext } from '../context/PlecotusAppContext';
import type { PlecotusContextType } from '../context/PlecotusAppContext';

export const usePlecotusContext = (): PlecotusContextType => {
  const context: PlecotusContextType = React.useContext(PlecotusContext);

  if (!context) {
    throw new Error('usePlecotusContext should be used inside QuizProvider');
  }
  return context;
};
