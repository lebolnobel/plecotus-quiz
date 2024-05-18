import * as React from 'react';
import { TOTAL } from '../../utils/helpers.ts';

type ScorePageType = {
  score: number;
  onReset: () => void;
};

const ScorePage = (props: ScorePageType): React.ReactNode => {
  const { score, onReset } = props;
  return (
    <div className="mx-auto block">
      <h2 className="text-slate-500">
        QUIZ DES RECENSEMENTS HIVERNAUX, DU PÔLE PLECOTUS DE NATAGORA
      </h2>

      <div className="pt-10">
        <h3 className="text-lg font-semibold text-slate-900">RÉSULTAT</h3>

        <div className="group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-6 mt-4">
          <div className="w-full flex-none text-base font-medium mt-2 text-center">
            <span className="text-4xl font-medium text-natagora">{score}</span>
            <span className="text-base text-slate-400">/{TOTAL}</span>
          </div>

          <p className="py-2 text-center text-slate-400 text-sm">
            Ce qui fait un total de {TOTAL - score} mauvaise
            {TOTAL - score > 1 ? 's' : ''} réponse
            {TOTAL - score > 1 ? 's' : ''} sur {TOTAL} questions !
          </p>
        </div>

        <div className="mt-4 mb-6">
          <p className="py-2 text-center">
            <button
              className="py-2 px-6 font-semibold rounded-md border border-slate-200 text-slate-800 hover:bg-slate-100 hover:shadow"
              type="button"
              onClick={onReset}
            >
              Je veux recommencer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
