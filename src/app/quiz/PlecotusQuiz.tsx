import * as React from 'react';
import QuizNavigation from './components/QuizNavigation.tsx';
import QuizAnswerList from './components/QuizAnswerList.tsx';
import Question from './components/QuizQuestion.tsx';
import Explanation from './components/Explanation.tsx';
import CurrentScore from './components/CurrentNavigation.tsx';
import { useQuizContext } from '../../hooks/useQuizContext.ts';
import type { QuizQuestionType } from '../../utils/quiz.ts';

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

  const [isExplanation, setIsExplanation] = React.useState<boolean>(false);

  const { selectToAnswerMode } = useQuizContext();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [index, isExplanation]);

  const currentQuestion = quiz[index];

  const onNext = !isExplanation
    ? () => {
        setIsExplanation(true);
      }
    : () => {
        setIsExplanation(false);
        handleNext();
      };

  const onReset = () => {
    setIsExplanation(false);
    handleReset();
  };

  return (
    <div className="mx-auto block" role="main">
      <div className="flex text-base justify-between mb-3">
        <div>
          <h2 className="text-slate-500 uppercase hidden sm:block">
            Plecotus quiz : recensements hivernaux des Chauves-souris
          </h2>

          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase sm:pt-10">
            Quiz
          </h3>
          <span className="text-slate-500 text-sm hidden sm:block">
            Trouver l'espèce qui se cache derrière cette photo !
          </span>
        </div>

        <CurrentScore index={index} />
      </div>

      <Question currentQuestion={currentQuestion} isAnwser={isExplanation} />

      {isExplanation ? (
        <Explanation
          rightAnswer={currentQuestion.rightAnswer}
          value={value}
          onNext={onNext}
        />
      ) : (
        <QuizAnswerList
          value={value}
          onSelectAnswer={(answer) => {
            handleSelectAnswer(answer);
            selectToAnswerMode && setIsExplanation(true);
          }}
        />
      )}

      <QuizNavigation onNext={onNext} onReset={onReset} />
    </div>
  );
};

export default PlecotusQuiz;
