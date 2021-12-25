import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import QuizRules from './components/QuizRules/QuizRules';
import StartQuiz from './components/StartQuiz/StartQuiz';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartQuiz></StartQuiz>}></Route>
          <Route path="/startQuiz" element={<StartQuiz></StartQuiz>}></Route>
          <Route path="/quizRules" element={<QuizRules></QuizRules>}></Route>
          <Route path="/quiz" element={<Quiz></Quiz>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
