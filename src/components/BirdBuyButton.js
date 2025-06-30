import React, { useState, useEffect } from 'react';
import '../styles/BirdBuyButton.css';

const BirdBuyButton = () => {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    let timer;
    const move = () => {
      const top = Math.random() * 80;
      const left = Math.random() * 80;
      setPosition({ top: `${top}%`, left: `${left}%` });
      const delay = 10000 + Math.random() * 10000;
      timer = setTimeout(move, delay);
    };
    timer = setTimeout(move, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href =
      'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd';
  };

  return (
    <button
      className="bird-buy-button"
      style={{ top: position.top, left: position.left }}
      onClick={handleClick}
    >
      BUY
    </button>
  );
};

export default BirdBuyButton;
