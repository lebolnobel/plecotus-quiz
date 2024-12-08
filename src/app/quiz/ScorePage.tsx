import * as React from 'react';
import { GoMoveToStart, GoTrophy } from 'react-icons/go';
import Overlay from '../accessibility/Overlay';
import { useQuizContext } from '../../hooks/useQuizContext';
import { K_R } from '../../utils/constants';
import { FormattedMessage } from 'react-intl';

type ScorePageType = {
  score: number;
  onReset: () => void;
};

const ScorePage = (props: ScorePageType): React.ReactNode => {
  const { score, onReset } = props;

  const { totalQuestions } = useQuizContext();

  return (
    <div className="mx-auto block" role="main">
      <h2 className="text-slate-500 uppercase sm:block">
        <FormattedMessage id="quiz.title" />
      </h2>

      <div className="pt-10">
        <h3 className="text-lg mb-8 font-semibold text-slate-900 uppercase">
          <FormattedMessage id="quiz.result" />
        </h3>

        <div className={`rounded-lg h-32  bg-gray-100 mb-10`}>
          <div className="flex flex-row w-full gap-5 justify-center items-center px-5 w-full h-full text-left">
            <div className="my-auto text-2xl">
              <GoTrophy role="presentation" size="56px" />
            </div>
            <div>
              <>
                <div className="text-lg sm:text-2xl">
                  <span className="text-4xl font-medium text-natagora">
                    {score}
                  </span>
                  <span className="text-base sm:text-base text-slate-500">
                    /{totalQuestions}
                  </span>
                </div>
                <div className="text-sm sm:text-base">
                  <FormattedMessage
                    id="quiz.score"
                    values={{
                      total: totalQuestions,
                      score: totalQuestions - score,
                    }}
                  />
                </div>
              </>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="py-2 text-center">
            <button
              className="py-2 px-6 font-semibold rounded-md border border-slate-200 hover:bg-slate-100 hover:shadow relative inline-flex focus:outline-none focus:ring-2 focus:ring-natagora/40"
              type="button"
              role="button"
              aria-label="reset"
              onClick={onReset}
            >
              <GoMoveToStart role="presentation" size="24" className="mr-2" />
              <FormattedMessage id="action.reset" />
              <Overlay onAction={onReset} keyCode={K_R}>
                <div className="overlay absolute top-0 inset-x-2/4 bg-gray-200 w-8 text-center text-natagora py-1 px-2 -ml-4 mt-1 rounded">
                  <FormattedMessage id="shortcuts.R" />
                </div>
              </Overlay>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
