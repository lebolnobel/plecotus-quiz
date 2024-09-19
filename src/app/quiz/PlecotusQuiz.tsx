import * as React from 'react';
import QuizNavigation from './components/QuizNavigation';
import QuizAnswerList from './components/QuizAnswerList';
import Question from './components/QuizQuestion';
import Explanation from './components/Explanation';
import CurrentScore from './components/CurrentNavigation';
import ProgressBar from './components/ProgressBar';
import { useQuizContext } from '../../hooks/useQuizContext';
import type { QuizQuestionType } from '../../utils/quiz';

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

  const { selectToAnswerMode, totalQuestions } = useQuizContext();

  // Start with 0 to avoid displaying the progress bar if player doesn't start to play
  const [width, setWidth] = React.useState<number>(0);
  const [isExplanation, setIsExplanation] = React.useState<boolean>(false);

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
        setWidth(((index + 2) / totalQuestions) * 100); // +2 = compute next index
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

      <Question
        currentQuestion={currentQuestion}
        isAnwser={isExplanation}
        onNext={onNext}
        onReset={onReset}
      />

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
      <ProgressBar width={width} />
    </div>
  );
};

export default PlecotusQuiz;
