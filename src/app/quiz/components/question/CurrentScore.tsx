import * as React from 'react';
import { useQuizContext } from '../../../../hooks/useQuizContext';
import { addLeadingZero } from '../../../../utils/helpers';

type CurrentScoreType = {
  index: number;
};

const CurrentScore = (props: CurrentScoreType): React.ReactNode => {
  const { index } = props;

  const { totalQuestions } = useQuizContext();

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
