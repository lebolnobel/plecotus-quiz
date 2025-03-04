import * as React from 'react';
import Overlay from '../../accessibility/Overlay';
import { K_N, K_R } from '../../../../utils/constants';
import { GoArrowRight, GoMoveToStart } from 'react-icons/go';
import { FormattedMessage } from 'react-intl';

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
          type="button"
          role="button"
          aria-label="reset"
          onClick={onReset}
          className="inline-flex px-6 py-2 inline-flex font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow focus:outline-none focus:ring-2 focus:ring-natagora/40"
        >
          <GoMoveToStart role="presentation" size="24" className="mr-2" />
          <FormattedMessage id="action.resetShort" />
          <Overlay onAction={onReset} keyCode={K_R}>
            <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
              <FormattedMessage id="shortcuts.R" />
            </div>
          </Overlay>
        </button>
      </div>

      <div className="text-right basis-1/2">
        <button
          className="py-2 px-6 font-semibold rounded-md bg-natagora text-white hover:bg-natagora/90 hover:shadow inline-flex 
          relative focus:outline-none focus:ring-2 focus:ring-natagora/40"
          type="submit"
          role="button"
          aria-label="reset"
          onClick={onNext}
        >
          <FormattedMessage id="action.next" />
          <GoArrowRight role="presentation" size="24" className="ml-2" />
          <Overlay onAction={onNext} keyCode={K_N}>
            <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
              <FormattedMessage id="shortcuts.N" />
            </div>
          </Overlay>
        </button>
      </div>
    </div>
  );
};

export default QuizNavigation;
