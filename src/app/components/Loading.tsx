import * as React from 'react';

const Loading = (): React.ReactNode => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-20 w-20 bg-natagora animate-ping"></div>
    </div>
  );
};

export default Loading;
