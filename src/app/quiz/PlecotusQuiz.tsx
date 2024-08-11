import * as React from 'react';
import QuizNavigation from './components/QuizNavigation.tsx';
import AnswerList from './components/AnswerList.tsx';
import Question from './components/QuizQuestion.tsx';
import Explanation from './components/Explanation.tsx';
import Heading from './components/Heading.tsx';
import CurrentScore from './components/CurrentNavigation.tsx';
import type { QuizQuestionType } from '../../utils/quiz.ts';
import { useQuizContext } from '../../hooks/useQuizContext.ts';

type PlecotusQuizType = {
  index: number;
  quiz: Array<QuizQuestionType>;
  value: string;
  handleSelectAnswer: (answer: string) => void;
  handleNext: () => void;
  handleReset: () => void;
};

const PlecotusQuiz = (props: PlecotusQuizType): React.ReactNode => {
  const { index, quiz, value, handleSelectAnswer, handleNext, handleReset } =
    props;

  const { selectToAnswerMode } = useQuizContext();
  const [isExplanation, setIsExplanation] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [index, isExplanation]);

  const currentQuestion = quiz[index];

  return (
    <div className="mx-auto block">
      <div className="flex text-base justify-between mb-3">
        <Heading />
        <CurrentScore index={index} />
      </div>

      <Question currentQuestion={currentQuestion} isAnwser={isExplanation} />

      {isExplanation ? (
        <Explanation rightAnswer={currentQuestion.rightAnswer} value={value} />
      ) : (
        <AnswerList
          value={value}
          onSelectAnswer={(answer) => {
            handleSelectAnswer(answer);
            console.log(selectToAnswerMode);
            selectToAnswerMode && setIsExplanation(true);
          }}
        />
      )}

      <QuizNavigation
        onNext={
          !isExplanation
            ? () => setIsExplanation(true)
            : () => {
                setIsExplanation(false);
                handleNext();
              }
        }
        onReset={() => {
          setIsExplanation(false);
          handleReset();
        }}
      />
    </div>
  );
};

export default PlecotusQuiz;
