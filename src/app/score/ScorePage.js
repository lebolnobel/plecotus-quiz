import * as React from "react";

const Footer = (props) => {
  const { score, total, onReset } = props;

  return (
    <div className="result">
      <h3>Résultat</h3>
      <div className="score">
        <span className="res">{score}</span>
        <span className="total-question">/{total}</span>
      </div>

      <p className="info">
        Ce qui fait un total de {total - score} mauvaise
        {total - score > 1 ? "s" : ""} réponse
        {total - score > 1 ? "s" : ""} sur {total} questions !
      </p>

      <div className="flex-center">
        <button title="Recommencer" onClick={onReset}>
          ↺
        </button>
      </div>
    </div>
  );
};

export default Footer;
