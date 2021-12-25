import React from 'react';

const QuestionCounter = (props) => {
    const { questions, currentQuestion } = props;
    return (
        <div className='p-4'>
            <div className='d-flex justify-content-between fw-bold'>
                <p>Question {currentQuestion + 1}/{questions.length}</p>
                <p>Need Help?</p>
            </div>
            <div className='d-flex flex-wrap mx-2'>
                <button type="button" className="btn btn-success rounded-circle m-2">1</button>
                <button type="button" className="btn btn-success rounded-circle m-2">2</button>
                <button type="button" className="btn btn-success rounded-circle m-2">3</button>
                <button type="button" className="btn btn-success rounded-circle m-2">4</button>
                <button type="button" className="btn btn-danger rounded-circle m-2">5</button>
                <button type="button" className="btn btn-danger rounded-circle m-2">6</button>
                <button type="button" className="btn btn-secondary rounded-circle m-2">7</button>
                <button type="button" className="btn btn-secondary rounded-circle m-2">8</button>
            </div>
        </div>
    );
};

export default QuestionCounter;