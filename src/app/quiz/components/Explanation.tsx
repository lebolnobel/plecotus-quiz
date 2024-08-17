import * as React from 'react';
import { species } from '../../../utils/species.tsx';
import { GoCheckCircle, GoCircleSlash, GoDotFill } from 'react-icons/go';

type ExplanationType = {
  rightAnswer: string;
  value: string;
  onNext: () => void;
};

const Explanation = (props: ExplanationType): React.ReactNode => {
  const { rightAnswer, value, onNext } = props;

  const isCorrect = rightAnswer === value;
  const abbr = rightAnswer;
  const correctAnswer = species[rightAnswer];
  const userAnswer = species[value];

  return (
    <div className="flex items-start lg:space-x-6 lg:px-6 py-6">
      <div className="min-w-0 relative flex-auto">
        <div
          className={`rounded-lg h-32  bg-gray-100 ${isCorrect ? 'text-natagora' : 'text-red-400'} mb-10 cursor-pointer`}
          onClick={onNext}
        >
          <div className="flex flex-row w-full gap-5 justify-center items-center px-5 w-full h-full text-left">
            <div className="my-auto text-2xl">
              {isCorrect ? (
                <GoCheckCircle size="56px" />
              ) : (
                <GoCircleSlash size="56px" />
              )}
            </div>
            <div>
              {isCorrect ? (
                <>
                  <div className="text-lg sm:text-2xl">Bonne réponse !</div>
                  <div className="text-sm sm:text-lg text-natagora-100">
                    Bravo, il s'agit bien d'un.e{' '}
                    <strong>{correctAnswer.displayName}</strong> ! Au besoin, le
                    récapitulatif est ci-dessous
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lg sm:text-2xl">Mauvaise réponse !</div>
                  <div className="text-sm sm:text-lg text-red-300">
                    Manqué,{' '}
                    <em>{userAnswer?.displayName || 'aucune réponse'}</em> n'est
                    pas la bonne réponse, il s'agit d'un.e{' '}
                    <strong>{correctAnswer.displayName}</strong> !
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <h2 className="font-semibold text-slate-900">Fiche d'identification</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div>
            <dt className="sr-only">Nom vernaculaire</dt>
            <dd>{correctAnswer?.displayName || '-'}</dd>
          </div>
          <div>
            <dt className="sr-only">Nom scientifique</dt>
            <dd className="flex items-center">
              <GoDotFill size="8px" className="mx-2" />
              {correctAnswer.name}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Abbréviation</dt>
            <dd className="flex items-center">
              <GoDotFill size="8px" className="mx-2" />
              {abbr}
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Description</dt>
            <dd className="text-slate-500">
              {correctAnswer?.description || "Voir le mémo pour plus d'infos !"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Explanation;
