import React from 'react';

const Question = () => {
    return (
        <div className='pe-lg-5'>
            <div className='p-3 shadow border border-2 rounded-3 border-primary mb-4'>
                <h4>Question 1</h4>
                <p className='fw-bold'>A train passes a station platform in 36 second and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?</p>
            </div>
            <h5 className='mb-3 px-5 py-3 shadow rounded-3'>120 m</h5>
            <h5 className='mb-3 px-5 py-3 shadow rounded-3'>240 m</h5>
            <h5 className='mb-3 px-5 py-3 shadow rounded-3'>300 m</h5>
            <h5 className='px-5 py-3 shadow rounded-3'>None of these</h5>
            <div className='mt-4 d-flex justify-content-center gap-5'>
                <button type="button" className="btn btn-outline-primary shadow rounded-3">Prev</button>
                <button type="button" className="btn btn-outline-primary shadow rounded-3">Next</button>
            </div>
        </div>
    );
};

export default Question;