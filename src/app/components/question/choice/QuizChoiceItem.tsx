import * as React from 'react';
import { useQuizContext } from '../../../../hooks/useQuizContext';
import { ABBR } from '../../../../utils/constants';
import { GoDotFill } from 'react-icons/go';
import type { SpeciesType } from '../../../../utils/species';

type QuizAnswerType = {
  id: string;
  index: number;
  value: string;
  species: SpeciesType;
  onSelectAnswer: (value: string) => void;
};

const QuizChoiceItem = (props: QuizAnswerType): React.ReactNode => {
  const { id, value, species, onSelectAnswer } = props;

  const { display } = useQuizContext();

  const onChange = () => {
    onSelectAnswer(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === 'Space') {
      onSelectAnswer(id);
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={`mb-3 focus:outline-none focus:ring-2 focus:ring-natagora/40 cursor-pointer rounded-md border border-slate-300 border-opacity-20 border-primary border-opacity-[0.5] hover:bg-accent hover:shadow hover:bg-primary hover:text-accent hover:bg-slate-100 ${value === id && 'bg-natagora bg-slate-100'} `}
    >
      <label className="block p-3 px-5">
        <input
          type="radio"
          name="answer"
          checked={value === id}
          onChange={onChange}
          className="accent-primary -mt-1 align-middle focus:outline-none focus:ring-2 focus:ring-natagora/40"
          value={id}
          tabIndex={-1}
        />
        <span className="ps-3 font-normal text-base">
          {display === ABBR ? (
            id
          ) : (
            <>
              <span className="italic">{species.name}</span>
              <br />
              <span className="inline-flex text-slate-400 text-sm">
                {species.displayName}
                <GoDotFill role="presentation" size="4" className="mx-2 mt-2" />
                {id}
              </span>
            </>
          )}
        </span>
      </label>
    </div>
  );
};

export default QuizChoiceItem;
