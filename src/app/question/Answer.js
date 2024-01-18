import * as React from "react";
import Next from "./Next";

const Answer = (props) => {
  const { selectedAnswer, currentQuestion, res, isEnd, onNext } = props;
  return (
    <>
      <Next isEnd={isEnd} onNext={onNext} />

      {selectedAnswer?.id === currentQuestion.rightAnswer ? (
        <p>
          <strong className="success">Bonne réponse ✓</strong>
          <br />
          Il s'agissait bien de{" "}
          <em>
            {res.name} ({res.displayName}, {res.abbr})
          </em>
        </p>
      ) : (
        <p>
          <strong className="wrong">Mauvaise réponse ×</strong>
          <br />
          Il s'agissait de{" "}
          <em>
            {res.name} ({res.displayName}, {res.abbr})
          </em>
        </p>
      )}

      <div class="answer">{res?.description}</div>
    </>
  );
};

export default Answer;
