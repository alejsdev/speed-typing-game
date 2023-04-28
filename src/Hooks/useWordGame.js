import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [content, setContent] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [words, setWords] = useState(0);
  const textRef = useRef(null);

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
    setTimeRemaining(startingTime);
    setContent("");
  }

  function startGame() {
    setIsGameStarted(true);
    setWords(0);
    textRef.current.disabled = false;
    textRef.current.focus();
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

  return {content, timeRemaining, isGameStarted, words, textRef, handleChange, startGame}
}

export default useWordGame;
