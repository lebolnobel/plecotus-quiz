import * as React from 'react';
import QuizNavigation from './question/question/Navigation';
import QuizAnswerList from './question/choice/QuizChoiceList';
import Question from './question/Question';
import Explanation from './question/explanation/Explanation';
import CurrentScore from './question/question/CurrentScore';
import ProgressBar from './question/question/ProgressBar';
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
    <section className="mx-auto block">
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
    </section>
  );
};

export default PlecotusQuiz;
