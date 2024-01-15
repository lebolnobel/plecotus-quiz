import * as React from "react";
import { useQuizContext } from "../../context/QuizContext";

const Choices = (props) => {
  const { selectedAnswer, selectedGenus, genera, species, onSpecies, onGenus } =
    props;

  const ctx = useQuizContext();

  const setGroup = (genus) => {
    return () => onGenus(genus);
  };

  const setChoice = (sp) => {
    return () => onSpecies(sp);
  };

  return (
    <ul>
      {genera.map((genus) => {
        const isGenusSelected =
          !!selectedGenus && selectedGenus?.id === genus.id;

        return (
          <li
            key={genus.id}
            className={isGenusSelected ? "selected-genus" : null}
          >
            <div className="group" onClick={setGroup(genus)}>
              <span className="species">
                {genus.name} <span>{genus.displayName}</span>
                {isGenusSelected && <span>↴</span>}
              </span>
            </div>

            {isGenusSelected && (
              <div className="sub-group">
                <ul>
                  {species
                    .filter((sp) => sp.genus === selectedGenus.id)
                    .map((sp) => (
                      <li
                        onClick={setChoice(sp)}
                        key={sp.id}
                        className={
                          selectedAnswer?.id === sp.id
                            ? "selected-answer"
                            : null
                        }
                      >
                        <span className="species">
                          {ctx.name === "normal" ? (
                            <>
                              {sp.name} <span>{sp.displayName}</span>
                            </>
                          ) : (
                            <>{sp.abbr}</>
                          )}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Choices;
