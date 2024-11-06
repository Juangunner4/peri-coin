import React, { useEffect, useRef, useState } from 'react';
import '../styles/PeriGame.css';
import flappyBirdImg from '../resource/flappy-bird.png';
import pipeImg from '../resource/flappybird-pipe.png';
import backgroundImg from '../resource/fb-game-background.png';

const PeriGame = () => {
  // Game state constants
  const MOVE_SPEED = 3;
  const GRAVITY = 0.5;
  const PIPE_GAP = 35;

  const [gameState, setGameState] = useState('Start');
  const [score, setScore] = useState(0);
  const birdRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && gameState !== 'Play') {
        // Reset game state
        document.querySelectorAll('.pipe_sprite').forEach((el) => el.remove());
        birdRef.current.style.top = '40vh';
        setGameState('Play');
        setScore(0);
        play();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState]);

  const play = () => {
    let birdDy = 0;
    let pipeSeparation = 0;

    const move = () => {
      if (gameState !== 'Play') return;

      const pipeSprites = document.querySelectorAll('.pipe_sprite');
      const birdProps = birdRef.current.getBoundingClientRect();

      pipeSprites.forEach((element) => {
        const pipeSpriteProps = element.getBoundingClientRect();

        // Remove pipes if they move out of the screen
        if (pipeSpriteProps.right <= 0) {
          element.remove();
        } else {
          // Collision detection
          if (
            birdProps.left < pipeSpriteProps.left + pipeSpriteProps.width &&
            birdProps.left + birdProps.width > pipeSpriteProps.left &&
            birdProps.top < pipeSpriteProps.top + pipeSpriteProps.height &&
            birdProps.top + birdProps.height > pipeSpriteProps.top
          ) {
            setGameState('End');
            return;
          } else {
            // Increase score if bird passes the pipe
            if (
              pipeSpriteProps.right < birdProps.left &&
              pipeSpriteProps.right + MOVE_SPEED >= birdProps.left &&
              element.increase_score === '1'
            ) {
              setScore((prevScore) => prevScore + 1);
            }
            element.style.left = pipeSpriteProps.left - MOVE_SPEED + 'px';
          }
        }
      });

      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);

    const applyGravity = () => {
      if (gameState !== 'Play') return;
      birdDy += GRAVITY;

      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === ' ') {
          birdDy = -7.6;
        }
      });

      const birdProps = birdRef.current.getBoundingClientRect();
      const backgroundProps = backgroundRef.current.getBoundingClientRect();

      // Collision detection with top and bottom boundaries
      if (birdProps.top <= 0 || birdProps.bottom >= backgroundProps.bottom) {
        setGameState('End');
        return;
      }

      birdRef.current.style.top = birdProps.top + birdDy + 'px';
      requestAnimationFrame(applyGravity);
    };
    requestAnimationFrame(applyGravity);

    const createPipe = () => {
      if (gameState !== 'Play') return;

      if (pipeSeparation > 115) {
        pipeSeparation = 0;
        const pipePosi = Math.floor(Math.random() * 43) + 8;

        const pipeSpriteInv = document.createElement('div');
        pipeSpriteInv.className = 'pipe_sprite';
        pipeSpriteInv.style.backgroundImage = `url(${pipeImg})`;
        pipeSpriteInv.style.top = pipePosi - 70 + 'vh';
        pipeSpriteInv.style.left = '100vw';
        document.body.appendChild(pipeSpriteInv);

        const pipeSprite = document.createElement('div');
        pipeSprite.className = 'pipe_sprite';
        pipeSprite.style.backgroundImage = `url(${pipeImg})`;
        pipeSprite.style.top = pipePosi + PIPE_GAP + 'vh';
        pipeSprite.style.left = '100vw';
        pipeSprite.increase_score = '1';
        document.body.appendChild(pipeSprite);
      }
      pipeSeparation++;
      requestAnimationFrame(createPipe);
    };
    requestAnimationFrame(createPipe);
  };

  return (
    <div className="flappy-bird-container">
      <div ref={backgroundRef} className="background" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div ref={birdRef} className="bird" style={{ backgroundImage: `url(${flappyBirdImg})` }}></div>
        <div className="message">
          {gameState === 'Start' ? 'Press Enter to Start' : gameState === 'End' ? 'Press Enter to Restart' : ''}
        </div>
        <div className="score">
          <span className="score_title">Score: </span>
          <span className="score_val">{score}</span>
        </div>
      </div>
    </div>
  );
};

export default PeriGame;
