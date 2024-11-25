import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PlecotusQuiz from './PlecotusQuiz';
import ScorePage from './ScorePage';
import Loading from '../components/Loading';
import { generateRandomQuestions } from '../../utils/helpers';
import { useQuizContext } from '../../hooks/useQuizContext';
import { writeData } from '../../db/database';
import { hashString } from '../../db/fingerprint';
import type { QuizQuestionType } from '../../utils/quiz';

const Quiz = (): React.ReactNode => {
  const [currentQuiz, setCurrentQuiz] = React.useState<QuizQuestionType[]>([]);
  const { totalQuestions, selectToAnswerMode } = useQuizContext();

  // Quiz
  const [index, setIndex] = React.useState<number>(0);
  const [value, setChoice] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);
  const [sessionId, setSessionId] = React.useState<string>(uuidv4());

  React.useEffect(() => {
    // Generate unique quiz for the user session
    const quiz = generateRandomQuestions(totalQuestions);
    setCurrentQuiz(quiz);
  }, [sessionId, totalQuestions]);

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
    setScore(0);
    setChoice('');
    setIndex(0);
    setSessionId(uuidv4());
  };

  const checkAnswer = (value: string) => {
    const answer = currentQuestion?.image.speciesId;
    const isCorrect = answer === value;
    const total = isCorrect ? score + 1 : score;
    isCorrect && setScore(total);

    try {
      // Answer
      const questionId = `${currentQuestion?.image.speciesId}_${currentQuestion?.image.url}`;
      void writeData({
        type: 'ANSWER',
        sessionId,
        questionId: hashString(questionId),
        isCorrect,
        answer,
        userAnswer: value,
      });

      // Score page
      if (index === currentQuiz.length - 1) {
        void writeData({
          type: 'SCORE',
          sessionId,
          score: total,
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
