import React, { useState, useEffect } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import Bird from './Bird';
import Pipesv3 from './Pipesv3'; 
import Ground from './Ground';
import '../styles/PeriGame.css';
import { useTranslation } from 'react-i18next';


const PeriGame = () => {
    const { t } = useTranslation();

    const [walletAddress, setWalletAddress] = useState(null);

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

    const disconnectWallet = () => {
        setWalletAddress(null);
    };

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

    const containerHeight = 800;
    const pipeMaxHeight = containerHeight * 0.7;
    const pipeMinHeight = containerHeight * 0.5;
    const birdWidth = 50;
    const birdHeight = 62.5;
    const pipeSpacing = 600;

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
            setScore(0); 
        }
    };

    const handleKeyPress = (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            jump();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [gameOver, gameStarted]);

    const checkCollision = () => {
        const birdBottom = birdPosition.y + birdHeight;
        const birdLeft = birdPosition.x;
        const birdRight = birdPosition.x + birdWidth;
        const groundHeight = 50;

        pipes.forEach((pipe) => {
            const pipeTop = pipe.y;
            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + 100;
            const isHorizontalOverlap = birdRight > pipeLeft && birdLeft < pipeRight;
            let isVerticalOverlap = birdBottom > pipeTop;

            const isColliding = isHorizontalOverlap && isVerticalOverlap;

            if (isColliding) {
                setGameOver(true);
                setGameStarted(false);
            }
        });

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
                const bottomPipeHeight = Math.random() * (pipeMaxHeight - pipeMinHeight) + pipeMinHeight;
                const gapBetweenPipes = 55 + birdHeight;
                const topPipeHeight = containerHeight - bottomPipeHeight - gapBetweenPipes;

                if (topPipeHeight > 0) {
                    setPipes((prev) => [
                        ...prev,
                        {
                            x: prev.length > 0 ? prev[prev.length - 1].x + pipeSpacing : 600,
                            y: containerHeight - bottomPipeHeight,
                            height: bottomPipeHeight
                        }
                    ]);
                }
            }
        }, 2000);

        const pipeMove = setInterval(() => {
            if (!gameOver && gameStarted) {
                setPipes((prev) =>
                    prev.map((pipe) => ({ ...pipe, x: pipe.x - 5 })).filter((pipe) => pipe.x + 100 > 0)
                );
                setScore((prev) => prev + 1); 
            }
        }, 30);

        return () => {
            clearInterval(gravity);
            clearInterval(pipeGenerator);
            clearInterval(pipeMove);
        };
    }, [gameOver, gameStarted]);

    return (
        <div>
            <div className="wallet-connect-container">
                {walletAddress ? (
                    <button onClick={disconnectWallet} className="connect-wallet-button">
                        {t("disconnectWallet")} ({walletAddress})
                    </button>
                ) : (
                    <button onClick={connectWallet} className="connect-wallet-button">
                        {t("connectWallet")}
                    </button>
                )}
            </div>
            <div className="dev-info-container">
                <a href="https://x.com/0x1Juangunner4" target="_blank" rel="noopener noreferrer" className="dev-link">
                {t("devBy")}
                </a>
                <div className="beta-badge">BETA</div>
            </div>
            <div className="game-container">
                <div className={`App ${gameOver ? 'game-over' : ''}`} onClick={jump}>
                    <div className="score-display">{t("score")} {score}</div>

                    <Bird birdPosition={birdPosition} />
                    {pipes.map((pipe, index) => (
                        <Pipesv3 key={index} pipePosition={pipe} />
                    ))}
                    {gameOver && (
                        <div className="game-over-message">
                            <center>
                            {t("gameOver")}
                                <br />
                                <p style={{ backgroundColor: '#4CAF50', padding: "2px 6px", borderRadius: '5px' }}>{t("clickToRestart")}</p>
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
