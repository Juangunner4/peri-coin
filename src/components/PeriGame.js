import React, { useState, useEffect } from 'react';
import Bird from './Bird';
import Pipes from './Pipes';
import Pipesv2 from './Pipesv2'; // Import Pipesv2 component
import Pipesv3 from './Pipesv3'; // Import Pipesv3 component
import Ground from './Ground';
import '../styles/PeriGame.css';

const PeriGame = () => {
    const [birdPosition, setBirdPosition] = useState({ x: 50, y: 200 });
    const [pipes, setPipes] = useState([]);
    const [pipesv2, setPipesv2] = useState([]);
    const [pipesv3, setPipesv3] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const containerHeight = 800; // Adjust as per your game's container height
    const pipeMaxHeight = containerHeight * 0.7;
    const pipeMinHeight = containerHeight * 0.5;
    const birdWidth = 50; // Bird width
    const birdHeight = 50; // Bird height
    const gapHeight = 300; // Increased gap between top and bottom pipes
    const pipeSpacing = 600; // Increased spacing between consecutive pipes to prevent overlap

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
            setPipesv2([]);
            setPipesv3([]);
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
        const birdBottom = birdPosition.y + birdHeight;
        const birdLeft = birdPosition.x;
        const birdRight = birdPosition.x + birdWidth;
        const groundHeight = 50; // Height of the ground element

        // Check for collisions with pipes
        [...pipes, ...pipesv2, ...pipesv3].forEach((pipe) => {
            const pipeTop = pipe.y;
            const pipeBottom = pipe.y + pipe.height;
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
    }, [birdPosition, pipes, pipesv2, pipesv3, gameOver]);

    useEffect(() => {
        const gravity = setInterval(() => {
            setBirdPosition((prev) => ({ ...prev, y: prev.y + 5 }));
            checkCollision();
        }, 30);

        const pipeGenerator = setInterval(() => {
            if (!gameOver && gameStarted) {
                const height = Math.random() * (pipeMaxHeight - pipeMinHeight) + pipeMinHeight; // Random height between min and max
                const bottomPipeHeight = height;
                const topPipeHeight = containerHeight - bottomPipeHeight - gapHeight;
                setPipes((prev) => [
                    ...prev,
                    {
                        x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 600, // Ensure spacing between pipes
                        y: containerHeight - bottomPipeHeight, // Position at the bottom
                        height: bottomPipeHeight
                    },
                    {
                        x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 600, // Ensure spacing between pipes
                        y: 0, // Position at the top
                        height: topPipeHeight
                    },
                ]);
            }
        }, 4000);

        // const pipesv2Generator = setInterval(() => {
        //     if (!gameOver && gameStarted) {
        //         const height = Math.random() * (pipeMaxHeight - pipeMinHeight) + pipeMinHeight;
        //         const bottomPipeHeight = height;
        //         setPipesv2((prev) => [
        //             ...prev,
        //             {
        //                 x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 600, // Ensure spacing between pipesv2
        //                 y: containerHeight - bottomPipeHeight, // Position at the bottom
        //                 height: bottomPipeHeight
        //             }
        //         ]);
        //     }
        // }, 4000);

        // const pipesv3Generator = setInterval(() => {
        //     if (!gameOver && gameStarted) {
        //         const height = Math.random() * (pipeMaxHeight - pipeMinHeight) + pipeMinHeight;
        //         const bottomPipeHeight = height;
        //         const topPipeHeight = containerHeight - bottomPipeHeight - gapHeight;
        //         setPipesv3((prev) => [
        //             ...prev,
        //             {
        //                 x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 1800, // Ensure spacing between pipesv3
        //                 y: containerHeight - bottomPipeHeight, // Position at the bottom
        //                 height: bottomPipeHeight
        //             },
        //             {
        //                 x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 1800, // Ensure spacing between pipesv3
        //                 y: 0, // Position at the top
        //                 height: topPipeHeight
        //             },
        //         ]);
        //     }
        // }, 8000);

        const pipeMove = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 })).filter((pipe) => pipe.x + 100 > 0)
                );
                setPipesv2((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 })).filter((pipe) => pipe.x + 100 > 0)
                );
                setPipesv3((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 })).filter((pipe) => pipe.x + 100 > 0)
                );
            }
        }, 30);

        return () => {
            clearInterval(gravity);
            clearInterval(pipeGenerator);
            // clearInterval(pipesv2Generator);
            // clearInterval(pipesv3Generator);
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
                {pipesv2.map((pipe, index) => (
                    <Pipesv2 key={index} pipePosition={pipe} />
                ))}
                {pipesv3.map((pipe, index) => (
                    <Pipesv3 key={index} pipePosition={pipe} />
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
                <Ground />
            </div>
        </div>
    );
};

export default PeriGame;
