import React from 'react';
import { Link } from 'react-router-dom';

const QuizRules = () => {
    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='py-4 px-5 shadow-lg border border-2 rounded-3 border-primary'>
                <h1>Some Rules of This Quiz</h1>
                <hr />
                <p>1. You will have only <span className='text-primary'>15 seconds</span> per each question.</p>
                <p>2. Once you select your answer, it can't be undone.</p>
                <p>3. You can't select any option once time goes off.</p>
                <p>4. You can't exit from the Quiz while you're playing.</p>
                <p>5. You'll get points on the basis of your correct answers.</p>
                <hr />
                <div className='d-flex justify-content-end gap-3'>
                    <Link to="/startQuiz"><button type="button" className="btn btn-primary">Exit Quiz</button></Link>
                    <Link to="/quiz"><button type="button" className="btn btn-primary">Continue</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizRules;