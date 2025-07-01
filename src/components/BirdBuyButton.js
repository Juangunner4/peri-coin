import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        backgroundColor: '#006400',
        borderRadius: '20px',
        transition: 'top 5s linear, left 5s linear, transform 0.2s',
        zIndex: 100,
        '&:active': { transform: 'scale(0.9)' },
      }}
    >
      {t('buyBird')}
    </Button>
  );
};

export default BirdBuyButton;
