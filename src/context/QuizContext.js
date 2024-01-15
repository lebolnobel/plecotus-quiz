import * as React from "react";

const QuizContext = React.createContext();

export const QuizProvider = ({ children }) => {
  const [name, setName] = React.useState("normal"); // normal/abbr

  const toggleName = () => {
    setName((prev) => (prev === "normal" ? "abbr" : "normal"));
  };

  const context = {
    name,
    toggleName,
  };

  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = React.useContext(QuizContext);

  if (!context) {
    throw new Error(
      "useQuizContext doit être utilisé à l'intérieur de QuizProvider"
    );
  }
  return context;
};
