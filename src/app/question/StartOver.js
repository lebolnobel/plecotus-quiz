import * as React from "react";

const StartOver = (props) => {
  const { onReset } = props;
  return (
    <div className="flex-center reset">
      <a id="reset" href="#" onClick={onReset}>Je veux recommencer</a>
    </div>
  );
};

export default StartOver;
