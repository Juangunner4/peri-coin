import React, { useState, useEffect } from 'react';
import Bird from './Bird';
import Pipes from './Pipes';
import Ground from './Ground';
import '../styles/PeriGame.css';

const PeriGame = () => {
    const [birdPosition, setBirdPosition] = useState({ x: 50, y: 200 });
    const [pipes, setPipes] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const jump = () => {
        if (!gameOver && gameStarted) {
            setBirdPosition((prev) => ({ ...prev, y: prev.y - 60 }));
        } else if (!gameOver && !gameStarted) {
            // Start the game on the first jump
            setGameStarted(true);
        } else {
            // Restart the game
            setBirdPosition({ x: 50, y: 200 });
            setPipes([]);
            setGameOver(false);
            setGameStarted(true);
        }
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default scrolling behavior when pressing space
            jump();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [gameOver, gameStarted]); // Ensure the event listener is properly cleaned up

    const checkCollision = () => {
        const birdTop = birdPosition.y;
        const birdBottom = birdPosition.y + 50; // Assuming bird height is 50px
        const birdLeft = birdPosition.x;
        const birdRight = birdPosition.x + 50; // Assuming bird width is 50px
        const containerHeight = 800; // Height of the game container
        const groundHeight = 50; // Height of the ground element
    
        // Check for collisions with pipes
        pipes.forEach((pipe) => {
            const pipeTop = pipe.y;
            const pipeBottom = pipe.y + 600;
            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + 100;
    
            const isColliding =
                birdRight > pipeLeft &&
                birdLeft < pipeRight &&
                birdBottom > pipeTop &&
                birdTop < pipeBottom;
    
            if (isColliding) {
                // Bird has hit a pipe, end the game
                setGameOver(true);
                setGameStarted(false);
            }
        });
    
        // Check if bird touches the ground
        if (birdBottom >= containerHeight - groundHeight) {
            // Bird touches the ground, end the game
            setGameOver(true);
            setGameStarted(false);
        }
    };
    


    useEffect(() => {
        checkCollision();
    }, [birdPosition, pipes, gameOver]);

    useEffect(() => {
        const gravity = setInterval(() => {
            setBirdPosition((prev) => ({ ...prev, y: prev.y + 5 }));
            checkCollision();
        }, 30);

        const pipeGenerator = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) => [
                    ...prev,
                    { x: 400, y: Math.floor(Math.random() * 300) },
                ]);
            }
        }, 2000);

        const pipeMove = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
                );
            }
        }, 30);

        return () => {
            clearInterval(gravity);
            clearInterval(pipeGenerator);
            clearInterval(pipeMove);
        };
    }, [gameOver, gameStarted]);

    return (
        <div className="game-container">
            <div className={`App ${gameOver ? 'game-over' : ''}`} onClick={jump}>
                <Bird birdPosition={birdPosition} />
                {pipes.map((pipe, index) => (
                    <Pipes key={index} pipePosition={pipe} />
                ))}
                {gameOver && (
                    <div className="game-over-message">
                        <center>
                            Game Over!
                            <br />
                            <p style={{ backgroundColor: 'blue', padding: "2px 6px", borderRadius: '5px' }}>Click anywhere or press Space to Restart</p>
                        </center>
                    </div>
                )}
                <Ground /> {/* Add the Ground component here */}
            </div>
        </div>
    );

};

export default PeriGame;