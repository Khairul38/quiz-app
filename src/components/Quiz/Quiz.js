import React from 'react';
import Question from '../Question/Question';
import QuestionCounter from '../QuestionCounter/QuestionCounter';
import './Quiz.css'

const Quiz = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center'>Quiz Title</h2>
            <div className="timer mt-5">
                <div className="time_left_txt">Time Left</div>
                <div className="timer_sec">15</div>
            </div>
            <div className='row mt-3 g-0'>
                <div className='col-lg-8'>
                    <Question></Question>
                </div>
                <div className='col-lg-4 shadow rounded-3'>
                    <QuestionCounter></QuestionCounter>
                </div>
            </div>
        </div>
    );
};

export default Quiz;