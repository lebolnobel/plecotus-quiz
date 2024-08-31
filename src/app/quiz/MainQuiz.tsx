import * as React from 'react';
import * as uuid from 'uuid';
import PlecotusQuiz from './PlecotusQuiz.tsx';
import ScorePage from './ScorePage.tsx';
import Loading from '../components/Loading.tsx';
import { generateRandomQuestions } from '../../utils/helpers.ts';
import { useQuizContext } from '../../hooks/useQuizContext.ts';
import type { QuizQuestionType } from '../../utils/quiz.ts';

const Plecotus = (): React.ReactNode => {
  const [quizId, setQuizId] = React.useState(uuid.v4());
  const [currentQuiz, setCurrentQuiz] = React.useState<QuizQuestionType[]>([]);
  const { totalQuestions, selectToAnswerMode } = useQuizContext();

  // Quiz
  const [index, setIndex] = React.useState<number>(0);
  const [value, setChoice] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    // Generate unique quiz for the user session
    const quiz = generateRandomQuestions(totalQuestions);
    setCurrentQuiz(quiz);
    // console.log(quizId, totalQuestions);
    // console.log(quiz);
  }, [quizId, totalQuestions]);

  const handleSelectAnswer = (answer: string) => {
    setChoice(answer);
    selectToAnswerMode && checkAnswer(answer);
  };

  const handleNext = () => {
    !selectToAnswerMode && checkAnswer(value);
    setChoice('');
    setIndex(index + 1);
  };

  const handleReset = () => {
    setQuizId(uuid.v4());
    setScore(0);
    setChoice('');
    setIndex(0);
  };

  if (currentQuiz.length === 0) return <Loading />;

  const currentQuestion = currentQuiz[index];
  const isEnd = index >= currentQuiz.length;

  const checkAnswer = (value: string) => {
    const rightAnswer = currentQuestion?.rightAnswer;
    const isCorrect = rightAnswer === value;
    isCorrect && setScore(score + 1);
  };

  return (
    <>
      {isEnd ? (
        <ScorePage score={score} onReset={handleReset} />
      ) : (
        <PlecotusQuiz
          index={index}
          quiz={currentQuiz}
          value={value}
          handleSelectAnswer={handleSelectAnswer}
          handleNext={handleNext}
          handleReset={handleReset}
        />
      )}
    </>
  );
};

export default Plecotus;
