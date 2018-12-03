import React, { Component } from "react";
import "./AnswerBox.css";

class AnswerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionID: props.questionID,
      answers: props.answers,
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <form>
        <div>
          <textarea
            className="answerBox-textArea"
            rows="8"
            cols="100"
            placeholder="Add your answer"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AnswerBox;
