import React from 'react';
import './Question.css';

const Question = (props) => {
    const { questions, currentQuestion } = props;
    return (
        <div className='pe-lg-5'>
            <div className='p-3 shadow border border-2 rounded-3 border-primary mb-4'>
                <h4>Question {currentQuestion + 1}</h4>
                <p className='fw-bold'>{questions[currentQuestion].questionText}</p>
            </div>
            {
                questions[currentQuestion].answerOptions.map(answerOption => <div className="d-grid mb-3 shadow rounded-3">
                    <button onClick={() => props.handleAnswerOptionClick(answerOption.isCorrect)} className="btn btn-outline-success text-start px-5 py-3" type="button"><h5 className='m-0'>{answerOption.answerText}</h5></button>
                </div>)
            }
            <div className='mt-4 d-flex justify-content-center gap-5'>
                {(currentQuestion + 1) > 1 ?
                    <>
                        <button onClick={() => props.handlePrevQuestion()} type="button" className="btn btn-outline-primary shadow rounded-3">Prev</button>
                        <button onClick={() => props.handleNextQuestion()} type="button" className="btn btn-outline-primary shadow rounded-3">Next</button>
                    </>
                    :
                    <button onClick={() => props.handleNextQuestion()} type="button" className="btn btn-outline-primary shadow rounded-3">Next</button>}
            </div>
        </div>
    );
};

export default Question;