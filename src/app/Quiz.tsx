import * as React from 'react';
import * as uuid from 'uuid';
import Start from './components/Start.tsx';
import PlecotusQuiz from './question/PlecotusQuiz.tsx';
import ScorePage from './score/ScorePage.tsx';
import Loading from './components/Loading.tsx';
import Footer from './components/Footer.tsx';
import { randomizeQuizElements, sliceArray } from '../utils/helpers.ts';
import { quizzes } from '../utils/quiz.ts';
import type { QuizQuestionType } from '../utils/quiz.ts';

const Quiz = (): React.ReactNode => {
  const [quizId, setQuizId] = React.useState(uuid.v4());
  const [currentQuiz, setCurrentQuiz] = React.useState<QuizQuestionType[]>([]);
  const [hasStart, setHasStart] = React.useState<boolean>(false);

  // Quiz
  const [index, setIndex] = React.useState<number>(0);
  const [value, setChoice] = React.useState<string>('');
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    // Generate unique quiz for the user session
    const quiz = sliceArray(randomizeQuizElements(quizzes));
    setCurrentQuiz(quiz);
  }, [quizId]);

  const downloadMemo = () => {
    window.open(
      'https://plecotus.natagora.be/fileadmin/Pole_Plecotus/biblio/Memo_5_20191106_PNy_RCo_1_.pdf',
    );
  };

  const startQuiz = () => {
    setHasStart(true);
  };

  const handleSelectAnswer = (answer: string) => {
    setChoice(answer);
  };

  const handleNext = () => {
    checkAnswer();
    setChoice('');
    setIndex(index + 1);
  };

  const handleReset = () => {
    setQuizId(uuid.v4());
    setScore(0);
    setChoice('');
    setIndex(0);
    setHasStart(true);
  };

  if (currentQuiz.length === 0) return <Loading />;

  const currentQuestion = currentQuiz[index];
  const rightAnswer = currentQuestion?.rightAnswer;
  const isCorrect = rightAnswer === value;
  const isEnd = index >= currentQuiz.length;

  const checkAnswer = () => (isCorrect && setScore(score + 1)) || undefined;

  return (
    <div className="font-anek bg-primary text-slate-800 flex flex-col items-center">
      <div className="md:py-6 sm:size-full md:size-3/4 lg:size-2/4">
        <div className="container px-10 py-6 mx-auto md:rounded-lg shadow-sm text-gray-800 bg-gray-50">
          <h1 style={{ display: 'none' }}>Plecotus - Natagora</h1>
          {!hasStart || currentQuiz.length === 0 ? (
            <Start startQuiz={startQuiz} downloadMemo={downloadMemo} />
          ) : isEnd ? (
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
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Quiz;
