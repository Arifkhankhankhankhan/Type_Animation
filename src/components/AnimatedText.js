import React, { useState, useEffect } from 'react';

function AnimatedText({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const speed = 50; // Adjust the speed as needed

  useEffect(() => {
    const animate = () => {
      setDisplayedText(text.substring(0, index));
      setIndex((prevIndex) => (prevIndex >= text.length ? 0 : prevIndex + 1));
    };

    const timeout = setTimeout(animate, speed);
    return () => clearTimeout(timeout);
  }, [index, text]);

  return <div className="animated-text">{displayedText}</div>;
}

export default AnimatedText;
