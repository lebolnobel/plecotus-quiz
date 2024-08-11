import * as React from 'react';

export type QuizContextType = {
  display?: 'normal' | 'abbr';
  toggleDisplay?: () => void;
  selectToAnswerMode?: boolean;
  toggleSelectToAnswer?: () => void;
};

export const QuizContext = React.createContext({});
QuizContext.displayName = 'QuizContext';

type QuizProviderType = {
  children: React.ReactNode;
};

const NORMAL = 'normal';
const ABBR = 'abbr';

const QuizProvider = (props: QuizProviderType): React.ReactNode => {
  const { children } = props;

  const [display, setDisplay] = React.useState(NORMAL); // normal/abbr
  const [selectToAnswerMode, setSelectToAnswerMode] = React.useState(true); // true = select to answer ; false = select then next

  const toggleDisplay = () => {
    setDisplay((prev) => (prev === NORMAL ? ABBR : NORMAL));
  };

  const toggleSelectToAnswer = () => {
    setSelectToAnswerMode((prev) => !prev);
  };

  const context = {
    display,
    toggleDisplay,
    selectToAnswerMode,
    toggleSelectToAnswer,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export default QuizProvider;
