import * as React from "react";

const Next = (props) => {
  const { isEnd, onNext } = props;

  return (
    <div className="flex-right">
      <button onClick={onNext}>{isEnd ? "Terminer" : "Suivant"}</button>
    </div>
  );
};

export default Next;
