import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts, speed, eraseSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;

    if (isErasing) {
      // Erasing phase: remove one character at a time
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, prev.length - 1));
          setIndex(index - 1);
        }, eraseSpeed);
      } else {
        // Once erased, pause before moving to the next string
        timeout = setTimeout(() => {
          setIsErasing(false); // Start typing the next text
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 500); // Pause before starting to type the next text
      }
    } else {
      // Typing phase: Add one character at a time
      if (index < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[textIndex][index]);
          setIndex(index + 1);
        }, speed);
      } else {
        // Once the text is fully typed, hold it for a second before erasing
        timeout = setTimeout(() => {
          setIsErasing(true); // Start erasing after a pause
        }, 1000); // 1 second delay before erasing
      }
    }

    return () => clearTimeout(timeout);
  }, [index, textIndex, isErasing, texts, speed, eraseSpeed]);

  return (
    <div className="relative inline-block">
      <span className="text-inherit font-bold">{displayedText}</span>
      <span className="absolute right-[-7%] animate-blink opacity-100 ml-1">|</span>
    </div>
  );
};

export default Typewriter;
