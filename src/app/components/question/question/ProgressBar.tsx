import * as React from 'react';

type ProgressBarType = {
  width: number;
};

const ProgressBar = (props: ProgressBarType): React.ReactNode => {
  const { width } = props;
  return (
    <div
      className="h-1 w-[0%] bg-natagora transition-all duration-200 fixed z-40 top-0 left-0"
      style={{ width: `${width}%` }}
      role="presentation"
    ></div>
  );
};

export default ProgressBar;
