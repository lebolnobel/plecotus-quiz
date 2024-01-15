import "../styles/styles.css";

import * as React from "react";
import Header from "./Header";
import QuestionBreadcrumb from "./question/QuestionBreadcrumb";
import Answer from "./question/Answer";
import Image from "./question/Image";
import Choices from "./question/Choices";
import StartOver from "./question/StartOver";
import ResultPage from "./score/ScorePage";
import Footer from "./Footer";
import { QuizProvider } from "../context/QuizContext";
import { quiz, genera, species, images, authors } from "../utils/constants";

const Quiz = () => {
  const [index, setIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedGenus, setSelectedGenus] = React.useState(null);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [screen, setScreen] = React.useState(null); // result/score

  const currentQuiz = quiz["plecotus-hiver"];
  const currentQuestion = currentQuiz.questions[index];
  const totalQuestions = currentQuiz.questions.length;
  const res = species.find((sp) => sp.id === currentQuestion.rightAnswer);
  const img = images.find((img) => img.id === currentQuestion.imageId);
  const imgAnswer = images.find(
    (img) => img.id === currentQuestion?.imageAnswer
  );
  const author = authors.find((author) => author.id === img?.authorId);

  const onReset = () => {
    setIndex(0);
    setScore(0);
    setSelectedGenus(null);
    setSelectedAnswer(null);
    setScreen(null);
  };

  const onNext = () => {
    setSelectedGenus(null);
    setSelectedAnswer(null);

    if (index !== totalQuestions - 1) {
      setScreen(null);
      setIndex((prev) => prev + 1);
    } else {
      setScreen("score");
      setIndex(0);
    }
  };

  const applyScore = (isRightAnswer) => {
    setScore((prev) => (isRightAnswer ? prev + 1 : prev));
  };

  const onGenus = (value) => {
    if (selectedGenus === value) {
      setSelectedGenus(null);
      setSelectedAnswer(null);
    } else {
      setSelectedGenus(value);
    }
  };

  const onSpecies = (value) => {
    setSelectedAnswer(value);

    const answer = !!value ? { ...value } : {};
    const isRightAnswer = answer?.id === currentQuestion.rightAnswer;

    setTimeout(() => {
      applyScore(isRightAnswer);
      setScreen("result");
    }, 500);
  };

  return (
    <QuizProvider>
      <div className="quiz-container">
        <Header />

        {(screen === "result" || screen === null) && (
          <>
            <QuestionBreadcrumb index={index} total={totalQuestions} />

            <h2>{currentQuiz.title}</h2>
            <h3>{currentQuiz.description}</h3>

            {screen === "result" && (
              <>
                <Answer
                  selectedAnswer={selectedAnswer}
                  currentQuestion={currentQuestion}
                  res={res}
                  isEnd={index === totalQuestions - 1}
                  onNext={onNext}
                />

                <Image author={author} image={imgAnswer || img} />
              </>
            )}

            {screen === null && (
              <>
                <Image author={author} image={img} />

                <Choices
                  selectedAnswer={selectedAnswer}
                  selectedGenus={selectedGenus}
                  genera={genera}
                  species={species}
                  onSpecies={onSpecies}
                  onGenus={onGenus}
                />
              </>
            )}

            <StartOver onReset={onReset} />
          </>
        )}

        {screen === "score" && (
          <ResultPage score={score} total={totalQuestions} onReset={onReset} />
        )}
      </div>
      <Footer />
    </QuizProvider>
  );
};

export default Quiz;
