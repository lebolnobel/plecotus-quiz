import * as React from 'react';
import { useQuizContext } from '../../../hooks/useQuizContext.ts';

type CurrentScoreType = {
  index: number;
};

const CurrentScore = (props: CurrentScoreType): React.ReactNode => {
  const { index } = props;

  const { totalQuestions } = useQuizContext();

  const addLeadingZero = (number: number): string =>
    number > 9 ? `${number}` : `0${number}`;

  return (
    <div>
      <span className="text-4xl font-medium text-natagora">
        {addLeadingZero(index + 1)}
      </span>
      <span className="text-base text-slate-400">/{totalQuestions}</span>
    </div>
  );
};

export default CurrentScore;
