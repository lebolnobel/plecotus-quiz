import React from 'react';
import QuizChoiceItem from './QuizChoiceItem';
import { SP, species } from '../../../../utils/species';
import { useQuizContext } from '../../../../hooks/useQuizContext';
import { DEFAULT_CHOICES } from '../../../../utils/constants';

type QuizChoiceListType = {
  rightAnswer: string;
  value: string;
  onSelectAnswer: (answer: string) => void;
};

const QuizChoiceList = (props: QuizChoiceListType): React.ReactNode => {
  const { value, rightAnswer, onSelectAnswer } = props;

  const { nbChoices } = useQuizContext();

  const choices =
    nbChoices === DEFAULT_CHOICES
      ? Object.keys(species)
      : getSubset(rightAnswer, SP);

  return (
    <div className="my-8">
      <div className="grid justify-items-stretch lg:grid-cols-2 lg:gap-2 md:grid-cols-2 md:gap-2 sm:grid-cols-2 sm:gap-2">
        {choices.map((sp, index) => (
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

function getSubset(
  rightAnswer: string,
  object: { [key: string]: string },
): Array<string> {
  const rest = Object.keys(object).filter((key) => key !== rightAnswer);

  const shuffledKeys = rest.sort(() => Math.random() - 0.5);
  const randomChoices = shuffledKeys.slice(0, 3);

  return [rightAnswer, ...randomChoices].sort(() => Math.random() - 0.5);
}

export default QuizChoiceList;
