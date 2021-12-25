import React from 'react';
import { Link } from 'react-router-dom';
import './StartQuiz.css';

const StartQuiz = () => {
    return (
        <div className='text-center my-5'>
            <Link to="/quizRules"><button type="button" className="btn btn-primary shadow-lg">Start Quiz</button></Link>
        </div>
    );
};

export default StartQuiz;