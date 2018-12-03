import React, { Component } from "react";
import "./AnswerBox.css";

import { sendAnswerInfo } from "./services";

class AnswerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: props.questionID,
      answers: props.answers,
      userID: props.userID,
      tempAnswerText: ''
    };
    this.updateTempAnswerText = this.updateTempAnswerText.bind(this);
    this.sendAnswer = this.sendAnswer.bind(this);
  }

  updateTempAnswerText(e) {
    this.setState({
      tempAnswerText: e.target.value
    });
  }

  sendAnswer(){
    sendAnswerInfo(this.state.tempAnswerText, this.state.userID, this.state.questionID);
    alert('answer has been posted!');
  }

  render() {
    return (
      <div>
        <textarea
          className="answerBox-textArea"
          rows="8"
          cols="100"
          placeholder="Add your answer"
          onChange={this.updateTempAnswerText}
        />
        <button onClick={this.sendAnswer}>Add</button>
      </div>
    );
  }
}

export default AnswerBox;
