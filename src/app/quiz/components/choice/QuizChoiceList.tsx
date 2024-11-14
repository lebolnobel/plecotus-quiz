import React from 'react';
import QuizChoiceItem from './QuizChoiceItem';
import { species } from '../../../../utils/species';

type QuizChoiceListType = {
  value: string;
  onSelectAnswer: (answer: string) => void;
};

const QuizChoiceList = (props: QuizChoiceListType): React.ReactNode => {
  const { value, onSelectAnswer } = props;

  return (
    <div className="my-8">
      <div className="grid justify-items-stretch lg:grid-cols-2 lg:gap-2 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-2">
        {Object.keys(species).map((sp, index) => (
          <QuizChoiceItem
            key={sp}
            id={sp}
            index={index}
            value={value}
            species={species[sp]}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizChoiceList;
