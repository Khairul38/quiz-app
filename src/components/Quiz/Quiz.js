import React, { useState } from 'react';
import Question from '../Question/Question';
import QuestionCounter from '../QuestionCounter/QuestionCounter';
import Result from '../Result/Result';
import './Quiz.css'

const Quiz = () => {
    const questions = [
        {
            key: 1,
            questionText: 'A train passes a station platform in 36 second and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            answerOptions: [
                { answerText: '120 m', isCorrect: false },
                { answerText: '240 m', isCorrect: true },
                { answerText: '300 m', isCorrect: false },
                { answerText: 'None of these', isCorrect: false },
            ],
        },
        {
            key: 2,
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            key: 3,
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            key: 4,
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            key: 5,
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) =>{
        if(isCorrect){
            setScore(score + 1);
        }
    }
    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowScore(true);
        }
    }
    const handlePrevQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion < questions.length) {
            setCurrentQuestion(prevQuestion);
        }
    }
    const handleRestart = () => {
        setShowScore(false);
        setCurrentQuestion(0)
    }
    return (
        <div>
            {
                showScore ?
                <div>
                        <Result score={score} questions={questions} handleRestart={handleRestart}></Result>
                </div>
                :
                    <div className='m-5'>
                        <h2 className='text-center'>Quiz Title</h2>
                        <div className="timer mt-5">
                            <div className="time_left_txt">Time Left</div>
                            <div className="timer_sec">15</div>
                        </div>
                        <div className='row mt-3 g-0'>
                            <div className='col-lg-8'>
                                <Question questions={questions} currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick} handleNextQuestion={handleNextQuestion} handlePrevQuestion={handlePrevQuestion}></Question>
                            </div>
                            <div className='col-lg-4 shadow rounded-3'>
                                <QuestionCounter questions={questions} currentQuestion={currentQuestion}></QuestionCounter>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Quiz;