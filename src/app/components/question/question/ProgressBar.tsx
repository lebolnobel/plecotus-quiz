import * as React from 'react';

type ProgressBarType = {
  index: number;
  totalQuestions: number;
};

const ProgressBar = (props: ProgressBarType): React.ReactNode => {
  const { index, totalQuestions } = props;

  const width = ((index + 1) / totalQuestions) * 100; // +2 = compute next index

  return (
    <div
      className="h-[2px] w-[0%] bg-natagora transition-all duration-200 fixed z-40 top-0 left-0"
      style={{ width: `${width}%` }}
      role="progressbar"
    ></div>
  );
};

export default ProgressBar;
