import * as React from 'react';
import Overlay from '../../accessibility/Overlay.tsx';

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
          className="py-2 px-6 font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow relative"
          type="button"
          onClick={onReset}
        >
          Je veux recommencer
          <Overlay onNext={onNext} onReset={onReset}>
            <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
              R
            </div>
          </Overlay>
        </button>
      </div>

      <div className="text-right basis-1/2">
        <button
          className="py-2 px-6 font-semibold rounded-md bg-natagora text-base hover:bg-natagora/90 hover:shadow relative"
          type="submit"
          onClick={onNext}
        >
          Suivant
          <Overlay onNext={onNext} onReset={onReset}>
            <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
              N
            </div>
          </Overlay>
        </button>
      </div>
    </div>
  );
};
export default QuizNavigation;
