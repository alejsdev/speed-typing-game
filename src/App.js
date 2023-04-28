import React from "react";
import useWordGame from "./Hooks/useWordGame";

function App() {
  const {
    content,
    timeRemaining,
    isGameStarted,
    words,
    textRef,
    handleChange,
    startGame,
  } = useWordGame();

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textRef}
        disabled={!isGameStarted}
        onChange={handleChange}
        value={content}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isGameStarted} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {words}</h1>
    </div>
  );
}

export default App;
