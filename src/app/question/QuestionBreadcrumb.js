import * as React from "react";

const QuestionBreadcrumb = (props) => {
  const { index, total } = props;

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div>
      <span className="active-question-no">{addLeadingZero(index + 1)}</span>
      <span className="total-question">/{addLeadingZero(total)}</span>
    </div>
  );
};

export default QuestionBreadcrumb;
