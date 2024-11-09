import React, { useState } from 'react';
import './Quiz.css';

const quizQuestions = [
  { question: "What is Shopify?", options:["E-commerce platform", "Social media app", "Gaming platform", "Search engine"], answer: "E-commerce platform" },
  {  question: "Which Shopify plan is the most basic?",  options: ["Shopify Plus", "Basic Shopify", "Shopify", "Advanced Shopify"], answer: "Basic Shopify"},
  {  question: "What is the name of Shopify's templating language?",options: ["HTML", "Liquid", "CSS", "JavaScript"], answer: "Liquid" },
  { question: "What is the primary use of Shopify Apps?",     options: ["To edit product descriptions", "To enhance store functionality", "To change store theme", "To manage customer accounts"], 
    answer: "To enhance store functionality", }
];

function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizQuestions[currentStep].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="result">
          <h2>Your Score: {score}/{quizQuestions.length}</h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-step">
          <h2>Question {currentStep + 1} of {quizQuestions.length}</h2>
          <p>{quizQuestions[currentStep].question}</p>
          <div className="options">
            {quizQuestions[currentStep].options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="checkbox"
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="navigation">
            <button onClick={handlePrevious} disabled={currentStep === 0}>Previous</button>
            <button onClick={handleNext} disabled={!selectedOption}>
              {currentStep === quizQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
