import React, { useState } from 'react';

const QuizComponent = ({ onEndQuiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    // Handle the submission of the selected answer
    console.log('Selected Answer:', selectedAnswer);
    // You can implement your logic to check if the answer is correct and handle marks
  };

  const handleEndQuiz = () => {
    // Add any cleanup logic or necessary actions before ending the quiz
    setSelectedAnswer(null); // Reset selected answer
    onEndQuiz(); // Trigger the callback to end the quiz
  };

  return (
    <div className="container" style={{ width: '60%', margin: '5% auto', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4">Quiz Question</h2>
      <form>
        <div className="mb-3">
          <p className="lead">You _____ drink and drive.</p>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="optionMay"
              value="May"
              checked={selectedAnswer === 'May'}
              onChange={() => handleAnswerChange('May')}
            />
            <label className="form-check-label" htmlFor="optionMay">
              May
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="optionRome"
              value="Must"
              checked={selectedAnswer === 'Must'}
              onChange={() => handleAnswerChange('Must')}
            />
            <label className="form-check-label" htmlFor="optionRome">
              Must
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="optionRome"
              value="Rome"
              checked={selectedAnswer === 'Rome'}
              onChange={() => handleAnswerChange('Rome')}
            />
            <label className="form-check-label" htmlFor="optionRome">
              May not
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="optionRome"
              value="Rome"
              checked={selectedAnswer === 'Rome'}
              onChange={() => handleAnswerChange('Rome')}
            />
            <label className="form-check-label" htmlFor="optionRome">
              Must not
            </label>
          </div>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="btn btn-danger" onClick={handleEndQuiz}  style={{ marginLeft: '10px' }}>
            End Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

const StartQuizButton = ({ onClick }) => {
  return (
    <div className="container text-center mt-5">
      <button type="button" className="btn btn-success btn-lg" onClick={onClick}>
        Start Quiz
      </button>
    </div>
  );
};

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleEndQuiz = () => {
    setQuizStarted(false);
  };
  
  return (
    <div>
      {!quizStarted && <StartQuizButton onClick={handleStartQuiz} />}
      {quizStarted ? <QuizComponent onEndQuiz={handleEndQuiz} /> : null}
    </div>
  );
};

export default App;
