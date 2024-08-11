import React from 'react';
import Answer from './Answer.tsx';
import { species } from '../../../utils/species.tsx';

type AnswerListType = {
  value: string;
  onSelectAnswer: (answer: string) => void;
};

const AnswerList = (props: AnswerListType): React.ReactNode => {
  const { value, onSelectAnswer } = props;

  return (
    <div className="my-8">
      <div className="grid justify-items-stretch lg:grid-cols-2 lg:gap-2 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-2">
        {Object.keys(species).map((sp) => (
          <Answer
            key={sp}
            id={sp}
            value={value}
            species={species[sp]}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default AnswerList;
