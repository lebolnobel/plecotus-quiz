import * as React from 'react';
import { species } from '../../../utils/species.tsx';

type ExplanationType = {
  rightAnswer: string;
  value: string;
};

const Explanation = (props: ExplanationType): React.ReactNode => {
  const { rightAnswer, value } = props;

  const isCorrect = rightAnswer === value;
  const sp = species[rightAnswer];
  const abbr = rightAnswer;

  return (
    <div className="flex items-start lg:space-x-6 lg:px-6 py-6">
      <div className="min-w-0 relative flex-auto">
        <div className="group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-4 mb-6">
          <div className="w-full flex-none text-base font-medium text-center">
            <span className="text-2xl font-medium text-natagora">
              {isCorrect ? (
                <div className="inline-flex">
                  <div className="w-12 h-12 rounded-full bg-natagora p-2 flex items-center justify-center mx-auto">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-natagora px-4 py-2">
                    Bonne réponse !
                  </span>
                </div>
              ) : (
                <div className="inline-flex">
                  <div className="w-12 h-12 rounded-full bg-red-600 p-2 flex items-center justify-center mx-auto">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-red-500 px-4 py-2">
                    Mauvaise réponse
                  </span>
                </div>
              )}
            </span>
          </div>
        </div>

        <h2 className="font-semibold text-slate-900">Fiche d'identification</h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div>
            <dt className="sr-only">Nom vernaculaire</dt>
            <dd>{sp?.displayName || '-'}</dd>
          </div>
          <div>
            <dt className="sr-only">Nom scientifique</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {sp.name}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Abbréviation</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {abbr}
            </dd>
          </div>
          <div className="flex-none w-full mt-2 font-normal">
            <dt className="sr-only">Description</dt>
            <dd className="text-slate-600">
              {sp?.description || "Voir le mémo pour plus d'infos !"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Explanation;
