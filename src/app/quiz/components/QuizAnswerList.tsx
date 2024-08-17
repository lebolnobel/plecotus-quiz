import React from 'react';
import QuizAnswer from './QuizAnswer.tsx';
import { species } from '../../../utils/species.tsx';

type QuizAnswerListType = {
  value: string;
  onSelectAnswer: (answer: string) => void;
};

const QuizAnswerList = (props: QuizAnswerListType): React.ReactNode => {
  const { value, onSelectAnswer } = props;

  return (
    <div className="my-8">
      <div className="grid justify-items-stretch lg:grid-cols-2 lg:gap-2 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-2">
        {Object.keys(species).map((sp) => (
          <QuizAnswer
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

export default QuizAnswerList;
