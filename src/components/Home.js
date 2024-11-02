import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoCoin from '../images/logo.svg';
import dexLogo from '../images/dexlogo.png';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="homeContainer">
      <div className="logoCoin">
        <img src={logoCoin} alt="Logo Coin" />
      </div>
      <div className="content">
        <p className="intro">
          Introducing <span className="highlight">$Peri</span> This chirpy meme coin brings Latinos to Web3 faster than abuela chasing after her missing chancla. Our blockchain feathered friend is not just about crypto; he is also about fashion, with every transaction strutting its stuff down the digital catwalk. Peri aims to be #1 in Latino meme coin culture and fashion. Peri will one day have fans all over the globe chanting <span className="phrase">“Saquen el perico”</span>.
        </p>
        <span onClick={handleCopyAddress} className="contract-address">
          {contractAddress}
        </span>
        {showCopied && (
          <div className="notification">Contract Copied</div>
        )}
        <button onClick={() => window.location.href = 'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd'} className="cta-button">
          Buy on Pump.fun
        </button>
        <div className="socials">
          <a href="https://dexscreener.com/solana/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd" target="_blank" rel="noopener noreferrer">
            <img src={dexLogo} alt="Dexscreener Logo" className="dexlogo" />
          </a>
          <a href="https://twitter.com/Perionsol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a href="https://t.me/+rNFvjrSESP0yY2Ix" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
