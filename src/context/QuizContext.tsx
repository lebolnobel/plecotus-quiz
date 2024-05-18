import * as React from 'react';

export type QuizContextType = {
  display?: string;
  toggleDisplay?: () => void;
};

export const QuizContext = React.createContext({});
QuizContext.displayName = 'QuizContext';

type QuizProviderType = {
  children: React.ReactNode;
};

export const QuizProvider = (props: QuizProviderType): React.ReactNode => {
  const { children } = props;

  const [display, setDisplay] = React.useState('normal'); // normal/abbr

  const toggleDisplay = () => {
    setDisplay((prev) => (prev === 'normal' ? 'abbr' : 'normal'));
  };

  const context = {
    name: display,
    toggleName: toggleDisplay,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};
