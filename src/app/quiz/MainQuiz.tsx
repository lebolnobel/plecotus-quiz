import * as React from 'react';
import * as uuid from 'uuid';
import PlecotusQuiz from './PlecotusQuiz';
import ScorePage from './ScorePage';
import Loading from '../components/Loading';
import { generateRandomQuestions } from '../../utils/helpers';
import { useQuizContext } from '../../hooks/useQuizContext';
import { writeData } from '../../db/database';
import type { QuizQuestionType } from '../../utils/quiz';

const Quiz = (): React.ReactNode => {
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
  }, [quizId, totalQuestions]);

  if (currentQuiz.length === 0) return <Loading />;

  const currentQuestion = currentQuiz[index];
  const isEnd = index >= currentQuiz.length;

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

  const checkAnswer = (value: string) => {
    const rightAnswer = currentQuestion?.image.speciesId;
    const isCorrect = rightAnswer === value;
    const newScore = score + 1;
    isCorrect && setScore(newScore);

    try {
      // Answer
      void writeData('ANSWER', {
        isCorrect,
        userAnswer: value,
        question: currentQuestion.image,
      });

      // Score page
      if (index === currentQuiz.length - 1) {
        void writeData('SCORE', {
          score: newScore,
          totalQuestions: currentQuiz.length,
        });
      }
    } catch (err) {
      console.error(err);
    }
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

export default Quiz;
