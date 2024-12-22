import * as React from 'react';
import QuizNavigation from './components/question/Navigation';
import QuizAnswerList from './components/choice/QuizChoiceList';
import Question from './components/Question';
import Explanation from './components/explanation/Explanation';
import CurrentScore from './components/question/CurrentScore';
import ProgressBar from './components/question/ProgressBar';
import { useQuizContext } from '../../hooks/useQuizContext';
import { FormattedMessage } from 'react-intl';
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

  const mainRef = React.useRef<HTMLDivElement | null>(null);
  const { selectToAnswerMode, totalQuestions } = useQuizContext();

  // Start with 0 to avoid displaying the progress bar if player doesn't start to play
  const [width, setWidth] = React.useState<number>(0);
  const [isExplanation, setIsExplanation] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [index, isExplanation]);

  React.useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
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
    <div
      className="mx-auto block outline-none"
      role="main"
      ref={mainRef}
      tabIndex={-1}
    >
      <div className="flex text-base justify-between mb-3">
        <div>
          <h2 className="text-slate-500 uppercase hidden sm:block">
            <FormattedMessage id="quiz.title" />
          </h2>

          <h3 className="flex-auto text-2xl font-medium text-slate-900 uppercase sm:pt-10">
            <FormattedMessage id="quiz.quiz" />
          </h3>
          <span className="text-slate-500 text-sm hidden sm:block">
            <FormattedMessage id="quiz.quizSubtitle" />
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
          rightAnswer={currentQuestion.image.speciesId}
          value={value}
          onNext={onNext}
          onReset={onReset}
        />
      ) : (
        <QuizAnswerList
          value={value}
          rightAnswer={currentQuestion.image.speciesId}
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
