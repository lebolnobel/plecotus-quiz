import * as React from 'react';
import {
  DEFAULT_TOTAL,
  NORMAL,
  ABBR,
  DEFAULT_CHOICES,
  FOUR_CHOICES,
} from '../utils/constants';

export type QuizContextType = {
  totalQuestions: number;
  setQuestions?: (value: number) => void;

  display: string;
  toggleDisplay?: () => void;

  nbChoices: number; // 0 = normal mode, all choices ; 4 = only 4 choices are displayed
  toggleNbChoices?: () => void;

  selectToAnswerMode: boolean; // true = select to answer ; false = select then next
  toggleSelectToAnswer?: () => void;
};

export const QuizContext = React.createContext({
  totalQuestions: DEFAULT_TOTAL,
  nbChoices: DEFAULT_CHOICES,
  display: NORMAL,
  selectToAnswerMode: true,
});

QuizContext.displayName = 'QuizContext';

type QuizProviderType = {
  totalQuestions: number;
  nbChoices: number;
  display: string;
  selectToAnswerMode: boolean;
  children: React.ReactNode;
};

const QuizProvider = (props: QuizProviderType): React.ReactNode => {
  const { children } = props;

  const [totalQuestions, setQuestions] = React.useState(props.totalQuestions);
  const [nbChoices, setNbChoices] = React.useState(props.nbChoices);
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

  const toggleNbChoices = () => {
    setNbChoices((prev) =>
      prev === DEFAULT_CHOICES ? FOUR_CHOICES : DEFAULT_CHOICES,
    );
  };

  const context = {
    totalQuestions,
    setQuestions,
    nbChoices,
    toggleNbChoices,
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
