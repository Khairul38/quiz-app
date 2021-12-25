import React from 'react';
import { Link } from 'react-router-dom';

const Result = (props) => {
    const {score, questions} = props
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='py-4 px-5 shadow-lg border border-2 rounded-3 border-primary'>
                <h1>You scored {score} out of {questions.length}</h1>
                <div className='d-flex justify-content-center gap-3 mt-5'>
                    <Link to="/quiz"><button onClick={() => props.handleRestart()} type="button" className="btn btn-primary">Restart</button></Link>
                    <Link to="/startQuiz"><button type="button" className="btn btn-primary">Exit Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Result;