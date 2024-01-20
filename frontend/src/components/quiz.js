import React, { useState, useEffect } from 'react';

const QuizComponent = ({ onEndQuiz }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/exercise/question');
      const data = await response.json();
      setQuestion(data.question);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleAnswerChange = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = async () => {
    console.log('Selected Answer:', selectedAnswer);
    await fetchQuestion();
  };

  const handleEndQuiz = () => {
    setSelectedAnswer(null); // Reset selected answer
    onEndQuiz(); // Trigger the callback to end the quiz
  };

  return (
    <div className="container" style={{ width: '60%', margin: '5% auto', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
      <h2 className="mb-4">Quiz Question</h2>
      {question && (
        <form>
          <div className="mb-3">
            <p className="lead">
              {question.Question} (Level {question.Level})
            </p>
            {['Op1', 'Op2', 'Op3', 'Op4'].map((option, index) => (
              <div className="form-check" key={index}>
                <input
                  type="radio"
                  className="form-check-input"
                  id={`option${index}`}
                  value={question[option]}
                  checked={selectedAnswer === question[option]}
                  onChange={() => handleAnswerChange(question[option])}
                />
                <label className="form-check-label" htmlFor={`option${index}`}>
                  {question[option]}
                </label>
              </div>
            ))}
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary mr-2" onClick={handleSubmit}>
              Submit
            </button>
            <button type="button" className="btn btn-danger" onClick={handleEndQuiz} style={{ marginLeft: '10px' }}>
              End Quiz
            </button>
          </div>
        </form>
      )}
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
