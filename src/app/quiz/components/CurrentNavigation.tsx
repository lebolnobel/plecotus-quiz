import * as React from 'react';
import { TOTAL } from '../../../utils/constants.ts';

type CurrentScoreType = {
  index: number;
};

const CurrentScore = (props: CurrentScoreType): React.ReactNode => {
  const { index } = props;

  const addLeadingZero = (number: number): string =>
    number > 9 ? `${number}` : `0${number}`;

  return (
    <div>
      <span className="text-4xl font-medium text-natagora">
        {addLeadingZero(index + 1)}
      </span>
      <span className="text-base text-slate-400">/{TOTAL}</span>
    </div>
  );
};

export default CurrentScore;
