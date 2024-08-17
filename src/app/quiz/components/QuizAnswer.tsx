import * as React from 'react';
import { useQuizContext } from '../../../hooks/useQuizContext.ts';
import { ABBR } from '../../../utils/constants.ts';
import type { SpeciesType } from '../../../utils/species.tsx';

type QuizAnswerType = {
  id: string;
  value: string;
  species: SpeciesType;
  onSelectAnswer: (value: string) => void;
};

const QuizAnswer = (props: QuizAnswerType): React.ReactNode => {
  const { id, value, species, onSelectAnswer } = props;

  const { display } = useQuizContext();

  const onChange = () => {
    onSelectAnswer(id);
  };

  return (
    <div>
      <label
        className={`p-3 px-5 block cursor-pointer rounded-md border border-slate-300 border-opacity-20 border-primary border-opacity-[0.5] mb-3 ${
          value === id && 'bg-natagora bg-slate-100'
        } hover:bg-accent hover:shadow hover:bg-primary hover:text-accent hover:bg-slate-100`}
      >
        <input
          type="radio"
          name="answer"
          checked={value === id}
          onChange={onChange}
          className="accent-primary -mt-1 align-middle"
          tabIndex={0}
        />
        <span className="ps-3 font-normal text-base">
          {display === ABBR ? (
            id
          ) : (
            <>
              {species.name}
              <br />
              <span className="text-slate-400 text-sm italic">
                {species.displayName} ({id})
              </span>
            </>
          )}
        </span>
      </label>
    </div>
  );
};

export default QuizAnswer;
