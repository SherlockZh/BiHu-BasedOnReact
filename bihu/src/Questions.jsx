import React from "react";
import "./Questions.css";

const Questions = ({
  allQuestions, handleClick, users, updateQuestionTitle, updateQuestionDesc, sendQuestion}
  ) => {
  const questionList = allQuestions.map(question => (
    <div key={question.qid} className="question-list">
      <div className="question-user">{users[question.quesUserID].username}</div> 
      <div
        className="question-title"
        onClick={() => handleClick(question.qid)}>
        {question.title}
      </div>
      <div className="question-description">
        {question.description}
      </div>

    </div>
  ));




  return (
    <div className="question">
      
      {questionList}
      <div>
        
      </div>
      <div className="answer-question-textareas">
        <input type="text" placeholder="Add your title" className="questionBox-title" onChange={updateQuestionTitle}/>
        <textarea
          className="questionBox-textArea"
          placeholder="Add your question"
          onChange={updateQuestionDesc}
        />
        <button onClick={sendQuestion} className="question-button">Add a question</button>
      </div>
      <div>
        
      </div>
    </div>
  );
};


export default Questions;
