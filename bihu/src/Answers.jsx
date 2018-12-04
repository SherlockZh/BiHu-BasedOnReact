import React, { Component } from "react";
import AnswerBox from "./AnswerBox";
import './Answers.css';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: props.allQuestions,
      questionID: props.questionID,
			answers: props.answers,
      userID: props.userID,
      handleClick: props.handleClick,
      users: props.users,
			hasAnswerBox: false,
      tempAnswerText:''
    };
    this.answerTheQuestion = this.answerTheQuestion.bind(this);
  }

  addAnswerClick(e) {
    this.setState({
      tempAnswerText: e.target.value
    });
  }

  answerTheQuestion() {
    this.setState({
      hasAnswerBox: true
    });
	}

  render() {
    const answerList = this.state.allQuestions[this.state.questionID].ansIDs.map(
      answer => (
        <div key={answer} className="each-question">
          <p className="answer-user">{this.state.users[this.state.answers[answer].ansUserID].username}: </p>
          <p className="answer-content">{this.state.answers[answer].content}</p>
        </div>
      )
    );

    return (
      <div className="question">
        <button 
          className="return-to-QuestionPage" 
          onClick={() => this.state.handleClick(-1)
        }> {"<"}return to questions</button>
        <div className="question-area">
          <h3 className="question-title">{this.state.allQuestions[this.state.questionID].title}</h3>
          <p className="question-description">{this.state.allQuestions[this.state.questionID].description}</p>
          <button className="answer-button" onClick={this.answerTheQuestion}>Answer</button>
        </div>
        
          {answerList}
        
        {this.state.hasAnswerBox && (
          <AnswerBox
            addAnswerClick={this.addAnswerClick}
            questionID={this.state.questionID}
						answers={this.state.answers}
						userID={this.state.userID}
          />
        )}
      </div>
    );
  }
}

export default Answers;
