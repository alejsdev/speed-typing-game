import React, { useState, useEffect } from "react";

function App() {
  const [content, setContent] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(2);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [words, setWords] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setContent(value);
  }

  function calculateWordCount(txt) {
    const arr = txt.trim().split(" ");
    return arr.filter((word) => word !== "").length;
  }

  function restartGame() {
    const wordsCounted = calculateWordCount(content);
    setWords(wordsCounted);
    setIsGameStarted(false);
    setTimeRemaining(2);
    setContent("");
  }

  function startGame() {
    setIsGameStarted(true);
    setWords(0);
  }

  useEffect(() => {
    if (timeRemaining >= 1 && isGameStarted) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      restartGame();
    }
  }, [timeRemaining, isGameStarted]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={content} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isGameStarted ? true : false} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {words}</h1>
    </div>
  );
}

export default App;
