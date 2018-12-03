import React, { Component } from 'react';
import './Questions.css';
import QuestionBox from './QuestionBox';

const Questions = (
    {
        questions,
        handleClick,
        users  
    }
)=>{
    const questionList= questions.map(
        question => (
            <div key={question.qid} className="each-question">
                <div className="title question-title" onClick={()=>handleClick(question.qid)}>
                    {question.title}
                </div>
                <div className="answer-user">Posted by {users[question.quesUserID].name}</div>
                <div className="question-description">
                    {question.description}
                </div>
            
            </div>
        )
    );
    return (
        <div className="question">
            <div>
                <button onClick={addTheQuestion}>Add a question</button>
                {questionList}
                1
                {<QuestionBox />}
            </div>
            <div> 
                dkfjdsgj
                123
                dfjdslij
            </div>    
        </div>
    )
};



// class Questions extends Component {
//     constructor(props){
//         super(props);
//     }
    
//     render() {
//         const questionList= this.props.questions.map(
            
//             question => (
//                 <div key={question.qid} className="each-question">
//                     <h2 className="title" onClick={()=> this.props.handleClick(question.qid)}>
                    
//                         {question.title}
//                     </h2>
//                     <div className="description">
//                         {question.description}
//                     </div>
                
//                 </div>
//             )
//         );
        
//         return (
//             <div className="question">
//                 {questionList}
//             </div>
//         )
//     }
// };

export default Questions;