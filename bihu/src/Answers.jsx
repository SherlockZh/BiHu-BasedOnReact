import React, { Component } from "react";
import AnswerBox from "./AnswerBox";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: props.allQuestions,
      questionID: props.questionID,
      answers: props.answers,
      hasAnswerBox: false
    };
    this.answerTheQuestion = this.answerTheQuestion.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
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
          <h2 className="title">{answer}</h2>
          <p> Answered by {this.state.answers[answer].ansUserID}</p>
          <p>{this.state.answers[answer].content}</p>
        </div>
      )
    );

    return (
      <div className="question">
        <h1>{this.state.allQuestions[this.state.questionID].description}</h1>
        <button className="Button-answer" onClick={this.answerTheQuestion}>
          Answer
        </button>
        {answerList}
        {this.state.hasAnswerBox && (
          <AnswerBox
            addAnswerClick={this.addAnswerClick}
            questionID={this.state.questionID}
            answers={this.state.answers}
          />
        )}
      </div>
    );
  }
}

export default Answers;
