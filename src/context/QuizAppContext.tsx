import * as React from 'react';
import { DEFAULT_TOTAL, NORMAL, ABBR } from '../utils/constants.ts';

export type QuizContextType = {
  totalQuestions: number;
  setQuestions?: (value: number) => void;

  display: string;
  toggleDisplay?: () => void;

  selectToAnswerMode: boolean; // true = select to answer ; false = select then next
  toggleSelectToAnswer?: () => void;
};

export const QuizContext = React.createContext({
  totalQuestions: DEFAULT_TOTAL,
  display: NORMAL,
  selectToAnswerMode: true,
});
QuizContext.displayName = 'QuizContext';

type QuizProviderType = {
  totalQuestions: number;
  display: string;
  selectToAnswerMode: boolean;
  children: React.ReactNode;
};

const QuizProvider = (props: QuizProviderType): React.ReactNode => {
  const { children } = props;

  const [totalQuestions, setQuestions] = React.useState(props.totalQuestions);
  const [display, setDisplay] = React.useState(props.display);
  const [selectToAnswerMode, setSelectToAnswerMode] = React.useState(
    props.selectToAnswerMode,
  );

  const toggleDisplay = () => {
    setDisplay((prev) => (prev === NORMAL ? ABBR : NORMAL));
  };

  const toggleSelectToAnswer = () => {
    setSelectToAnswerMode((prev) => !prev);
  };

  const context = {
    totalQuestions,
    setQuestions,
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
