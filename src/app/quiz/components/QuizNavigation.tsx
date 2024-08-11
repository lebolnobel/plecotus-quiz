import * as React from 'react';

type QuizNavigationType = {
  onReset: () => void;
  onNext: () => void;
};

const QuizNavigation = (props: QuizNavigationType): React.ReactNode => {
  const { onReset, onNext } = props;

  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <button
          className="py-2 px-6 font-semibold rounded-md border border-slate-200 text-slate-800 hover:bg-slate-100 hover:shadow"
          type="button"
          onClick={onReset}
        >
          Je veux recommencer
        </button>
      </div>

      <div className="text-right basis-1/2">
        <button
          className="py-2 px-6 font-semibold rounded-md bg-natagora text-base text-slate-800 hover:bg-natagora/90 hover:shadow"
          type="submit"
          onClick={onNext}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};
export default QuizNavigation;
