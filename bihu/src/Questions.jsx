import React from "react";
import "./Questions.css";
import QuestionsBox from './QuestionBox';

const Questions = ({
  allQuestions, handleClick, users, updateQuestionTitle, updateQuestionDesc, sendQuestion}
  ) => {
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
      
      {questionList}
      <div>
        <input type="text" placeholder="Add your title" size="40" onChange={updateQuestionTitle}/>
      </div>
      <div>
        <textarea
          className="questionBox-textArea"
          rows="4"
          cols="80"
          placeholder="Add your answer"
          onChange={updateQuestionDesc}
        />
        <button onClick={sendQuestion}>Add a question</button>
      </div>
    </div>
  );
};


export default Questions;
