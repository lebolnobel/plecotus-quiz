import * as React from 'react';
import { NORMAL, ABBR } from '../utils/constants.ts';

export type QuizContextType = {
  display?: 'normal' | 'abbr';
  toggleDisplay?: () => void;
  selectToAnswerMode?: boolean; // true = select to answer ; false = select then next
  toggleSelectToAnswer?: () => void;
  isMac?: boolean;
};

export const QuizContext = React.createContext({});
QuizContext.displayName = 'QuizContext';

type QuizProviderType = {
  display: 'normal' | 'abbr';
  selectToAnswerMode: boolean;
  children: React.ReactNode;
};

const QuizProvider = (props: QuizProviderType): React.ReactNode => {
  const { children } = props;

  const [display, setDisplay] = React.useState(props.display);
  const [selectToAnswerMode, setSelectToAnswerMode] = React.useState(
    props.selectToAnswerMode,
  );

  const isMac = React.useMemo(() => navigator.userAgent.includes('Mac'), []);

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
    isMac,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export default QuizProvider;
