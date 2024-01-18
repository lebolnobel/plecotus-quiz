import * as React from "react";
import { useQuizContext } from "../context/QuizContext";

const Header = () => {
  const [isShown, setShow] = React.useState(false);

  const ctx = useQuizContext();

  const handleHide = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="header">
      <span
        className="info-btn"
        title="Abbréviation ou nom scientifique/vernaculaire"
        onClick={ctx.toggleName}
      >
        ◑ <span style={{ fontSize: "12px" }}>Abbr/nom scientifique</span>
      </span>

      <span
        id="info"
        className="info-btn"
        title="Plus d'infos !"
        onClick={handleHide}
      >
        🛈
      </span>

      {isShown && (
        <div className="info-backdrop">
          <div className="info-content">
            <span className="flex-right info-btn" onClick={handleHide}>
              ×
            </span>

            <h1>Info</h1>

            <p>
              Cette application a été créée dans le cadre du travail de fin
              d'étude de la formation Plecotus, dispensée par Natagora.
            </p>

            <p>
              Son objectif est de permettre à quiconque de travailler
              l'identification des espèces de chauve-souris en hivers. Le
              contenu est inspiré du Mémo de détermination.
            </p>

            <div style={{ padding: "15px 0px", textAlign: "center" }}>
              <a
                href="https://plecotus.natagora.be/fileadmin/Pole_Plecotus/biblio/Memo_5_20191106_PNy_RCo_1_.pdf"
                className="download"
              >
                Mémo de détermination
              </a>
            </div>

            <p>
              Ce doument vous permettra de revoir les critères de détermination
              des chauve-souris en hivers.
            </p>

            <p>
              Bonne révision, <br />
              Lionel Lebon
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
