import * as React from 'react';
import { species } from '../../../utils/species.tsx';
import {
  GoArrowRight,
  GoCheckCircle,
  GoCircleSlash,
  GoDotFill,
} from 'react-icons/go';

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
          className={`rounded-lg h-32  bg-gray-100 ${isCorrect ? 'text-natagora' : 'text-red-400'} mb-10 cursor-pointer relative overflow-hidden`}
          title="Cliquer pour aller à la question suivante"
          onClick={onNext}
        >
          <GoArrowRight
            className="absolute bg-transparent -end-4 inset-y-0 h-full text-gray-400 opacity-5 z-0"
            role="presentation"
            size="128px"
          />

          <div className="flex flex-row w-full gap-5 justify-center items-center px-5 w-full h-full text-left z-1">
            <div className="my-auto text-2xl">
              {isCorrect ? (
                <GoCheckCircle role="presentation" size="56px" />
              ) : (
                <GoCircleSlash role="presentation" size="56px" />
              )}
            </div>
            <div>
              {isCorrect ? (
                <>
                  <div className="text-lg sm:text-xl">Bonne réponse !</div>
                  <div className="text-sm sm:text-base text-natagora-100">
                    Bravo, il s'agit bien d'un.e{' '}
                    <strong>{correctAnswer.displayName}</strong>.
                    <br />
                    Au besoin, le récapitulatif est ci-dessous.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lg sm:text-xl">Mauvaise réponse !</div>
                  <div className="text-sm sm:text-base text-red-300">
                    Manqué, {userAnswer?.displayName || 'aucune réponse'} n'est
                    pas la bonne réponse.
                    <br />
                    Il s'agit d'un.e{' '}
                    <strong>{correctAnswer.displayName}</strong>.
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
            <dd className="flex items-center italic">
              <GoDotFill role="presentation" size="8px" className="mx-2" />
              {correctAnswer.name}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Notation hivernale</dt>
            <dd className="flex items-center">
              <GoDotFill role="presentation" size="8px" className="mx-2" />
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
