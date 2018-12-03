import React from "react";
import "./Questions.css";

const Questions = ({allQuestions, handleClick, users}) => {
  const questionList = allQuestions.map(question => (
    <div key={question.qid} className="each-question">
      <div
        className="title question-title"
        onClick={() => handleClick(question.qid)}
      >
        {question.title}
      </div>
      <div className="answer-user">
        Posted by {users[question.quesUserID].username}
      </div>
      <div className="question-description">{question.description}</div>
    </div>
  ));

  return (
    <div className="question">
      <button>Add a question</button>
      {questionList}
    </div>
  );
};


export default Questions;
