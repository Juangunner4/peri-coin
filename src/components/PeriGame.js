import React, { useState, useEffect } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import Bird from './Bird';
import Pipes from './Pipes';
import Pipesv2 from './Pipesv2'; // Import Pipesv2 component
import Pipesv3 from './Pipesv3'; // Import Pipesv3 component
import Ground from './Ground';
import '../styles/PeriGame.css';

const PeriGame = () => {

    // State for the wallet connection
    const [walletAddress, setWalletAddress] = useState(null);

    // Function to connect to the Phantom wallet
    const connectWallet = async () => {
        if ('solana' in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                try {
                    const response = await provider.connect();
                    setWalletAddress(response.publicKey.toString());
                } catch (err) {
                    console.error('Failed to connect wallet:', err);
                }
            } else {
                alert('Solana object not found! Get a Phantom Wallet 👻');
            }
        } else {
            alert('Solana object not found! Install Phantom Wallet 👻');
        }
    };

    // Check if the wallet is already connected on component mount
    useEffect(() => {
        if ('solana' in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                provider.connect({ onlyIfTrusted: true })
                    .then((response) => {
                        setWalletAddress(response.publicKey.toString());
                    })
                    .catch((err) => console.error('Failed to auto-connect wallet:', err));
            }
        }
    }, []);

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
    const birdHeight = 62.5; // Bird height
    const pipeSpacing = 600; // Increased spacing between consecutive pipes to prevent overlap

    const jump = () => {
        if (!gameOver && gameStarted) {
            setBirdPosition((prev) => ({
                ...prev,
                y: Math.max(prev.y - 60, 0)
            }));
        } else if (!gameOver && !gameStarted) {

            setGameStarted(true);
        } else {
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


        pipes.forEach((pipe) => {
            const pipeTop = pipe.y; // y value for pipe (0 for top pipe, > 0 for bottom pipe)
            const pipeBottom = pipeTop + pipe.height; // Bottom edge of the pipe
            const pipeLeft = pipe.x; // Left edge of the pipe
            const pipeRight = pipe.x + 100; // Right edge of the pipe
            const isTopPipe = 0; // Determine if this is a top pipe

            // Check for horizontal overlap
            const isHorizontalOverlap = birdRight > pipeLeft && birdLeft < pipeRight;

            // Check for vertical overlap
            let isVerticalOverlap = false;

            if (isTopPipe) {
                // Check if the bird is colliding with the top pipe
                isVerticalOverlap = birdTop < pipeBottom;
            } else {
                // Check if the bird is colliding with the bottom pipe
                isVerticalOverlap = birdBottom > pipeTop;
            }

            const isColliding = isHorizontalOverlap && isVerticalOverlap;

            if (isColliding) {
                // Bird has hit a pipe, end the game
                setGameOver(true);
                setGameStarted(false);
            }
        });

        // Check if bird touches the ground
        if (birdBottom >= containerHeight - groundHeight) {
            setGameOver(true);
            setGameStarted(false);
        }
    };





    useEffect(() => {
        checkCollision();
    }, [birdPosition, pipes, pipesv2, pipesv3, gameOver]);

    useEffect(() => {
        const gravity = setInterval(() => {
            setBirdPosition((prev) => {
                const newY = prev.y + 5;
                return {
                    ...prev,
                    y: Math.min(newY, containerHeight - birdHeight - 50)
                };
            });
            checkCollision();
        }, 30);

        const pipeGenerator = setInterval(() => {
            if (!gameOver && gameStarted) {
                // Random height for the bottom pipe, ensuring it leaves enough space for the gap
                const bottomPipeHeight = Math.random() * (pipeMaxHeight - pipeMinHeight) + pipeMinHeight;

                // Fixed gap between pipes (considering the bird's height)
                const gapBetweenPipes = 55 + birdHeight;

                // Calculate the height of the top pipe
                const topPipeHeight = containerHeight - bottomPipeHeight - gapBetweenPipes;

                // Ensure the calculated heights make sense and the gap is always available
                if (topPipeHeight > 0) {
                    setPipes((prev) => [
                        ...prev,
                        {
                            // Bottom pipe
                            x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 600, // Ensure spacing between pipes
                            y: containerHeight - bottomPipeHeight, // Bottom pipe's position from the bottom of the container
                            height: bottomPipeHeight
                        }
                    ]);
                    console.log('Generated Pipes:', {
                        bottomPipeHeight,
                        topPipeHeight,
                        gapBetweenPipes,
                        yTopPipe: 0,
                        yBottomPipe: containerHeight - bottomPipeHeight
                    });

                }
            }
        }, 2000);


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
        <div>
            {/* Wallet connection UI */}
            <div className="wallet-connect-container">
                {walletAddress ? (
                    <div className="wallet-info">
                        Connected: {walletAddress}
                    </div>
                ) : (
                    <button onClick={connectWallet} className="connect-wallet-button">
                        Connect Wallet
                    </button>
                )}
            </div>

            {/* Game container */}
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
        </div>
    );
};

export default PeriGame;
