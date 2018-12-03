import React from 'react';

const QuestionBox = () => {
    return (
            <div>
                <textarea className="answerBox-textArea" rows="8" cols="100" 
                        placeholder="Add your question">
                </textarea>
                <button>Add</button>
            </div>
    );
}

export default QuestionBox;