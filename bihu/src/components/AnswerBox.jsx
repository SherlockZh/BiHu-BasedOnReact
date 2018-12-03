import React, { Component }from 'react';
import './AnswerBox.css'

// const AnswerBox = (
//     {questionID, answers, addAnswerClick, handleChange}
// ) =>{

//     return (
//         <form>
//             <div>
                
//                 <textarea className="answerBox-textArea" rows="8" cols="100" 
//                         placeholder="Add your answer"
//                         onChange={handleChange}>
//                 </textarea>
//             </div>
//             <button type="submit" onClick={addAnswerClick}>Add</button>
//         </form>
//     )
// }

class AnswerBox extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            questionID: props.questionID,
            answers : props.answers,
            userID: props.userID,
            tempAnswerText:''
        }
        this.updateTempAnswerText = this.updateTempAnswerText.bind(this);

    }

    updateTempAnswerText(e) {
        this.setState({
            tempAnswerText: e.target.value
        })
    }

    sendAnswer(){
        sendAnswerInfo(this.state.tempAnswerText, this.state.userID, this.state.questionID);
    }

    render () {
        return (
            <div>
                <div>  
                    <textarea className="answerBox-textArea" rows="8" cols="100" 
                            placeholder="Add your answer"
                            onChange={this.handleChange}>
                    </textarea>
                </div>
                <button>Add</button>
            </div>
        )

    }
};


export default AnswerBox;