import React, { useState } from "react";
import "./BoredPage.css";

export default function TriviaPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const fetchTriviaQuestions = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
      const data = await response.json();

      if (data.results) {
        setQuestions(data.results);
        setUserAnswer(null);  
        setIsAnswered(false); 
      } else {
        setError("No trivia questions found.");
      }
    } catch (error) {
      console.error("Error fetching trivia questions:", error);
      setError("Oops! Something went wrong.");
    }

    setLoading(false);
  };

  const handleAnswerSelect = (answer) => {
    setUserAnswer(answer);
    setIsAnswered(true);
  };

  const checkAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex]?.correct_answer;
    return selectedAnswer === correctAnswer ? "correct" : "incorrect";
  };

  const nextQuestion = () => {
    setUserAnswer(null);
    setIsAnswered(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="trivia-page">
      <h1>Bored? Try and answer these trivial questions:</h1>
      <button onClick={fetchTriviaQuestions}>Get Trivia Question</button>

      {loading && <p>Loading trivia question...</p>}

      {error && <p>{error}</p>}

      {questions.length > 0 && (
        <div className="trivia-question">
          <h3 dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }}></h3>
          <ul>
            {[
              ...questions[currentQuestionIndex]?.incorrect_answers,
              questions[currentQuestionIndex]?.correct_answer,
            ].map((answer, answerIndex) => (
              <li
                key={answerIndex}
                onClick={() => handleAnswerSelect(answer)}
                className={
                  userAnswer === answer ? checkAnswer(answer) : ""
                }
                style={{ cursor: "pointer" }}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </li>
            ))}
          </ul>

          {isAnswered && (
            <p className={checkAnswer(userAnswer)}>
              {checkAnswer(userAnswer) === "correct" ? "Correct!" : "Incorrect!"}
            </p>
          )}

          {isAnswered && currentQuestionIndex + 1 < questions.length && (
            <button onClick={nextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
}
