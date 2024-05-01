import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../images/homeBanner.svg'; // Ensure the path is correct
import logoCoin from '../images/logo.svg'; // Import the new logo image
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

function Home() {
  const navigate = useNavigate();

  const [showCopied, setShowCopied] = useState(false); // State to manage notification visibility

  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setShowCopied(true); // Show the notification
      setTimeout(() => {
        setShowCopied(false); // Hide the notification after 3 seconds
      }, 3000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="homeContainer">
      <div className="border-left"></div>
      <div className="banner">
        <img src={banner} alt="Memecoin Banner" />
      </div>
      <div className="logoCoin">
        <img src={logoCoin} alt="Logo Coin" />
      </div>
      <div className="content">
        <p className="intro">
          Introducing <span className="highlight">$Peri</span> This chirpy meme coin brings Latinos to Web3 faster than abuela chasing after her missing chancla. Our blockchain feathered friend is not just about crypto he is also about fashion, and every transaction strutting its stuff down the digital catwalk. Peri aims to be #1 in Latino meme coin culture and fashion. Peri will one day have fans all over the globe chanting <span className="phrase">“Saquen el perico”</span>.
        </p>
        <span onClick={handleCopyAddress} className="contract-address">
          {contractAddress}
        </span>
        {showCopied && (
          <div className="notification">Contract Copied</div>
        )}
        <button onClick={() => window.location.href = 'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd'} className="cta-button">
          Buy Memecoin
        </button>        <div className="socials">
          {/* <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">Dexscreener</a> */}
          <a href="https://twitter.com/Perionsol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
          </a>
          <a href="https://t.me/+xTHM3MA4MjpkODVh" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegramPlane} className="social-icon" />
          </a>
        </div>
      </div>
      <footer>
        <p>© 2024 Perico. All rights reserved.</p>
        <p>Disclaimer* $PERI is a memecoin and has no utility... Don't risk money you are afraid of losing. The price may go up or it may go down. We are not responsible for the price of the token.</p>
        <p>Contact: EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd | contact@perionsol.xyz</p>
      </footer>
    </div>
  );
}

export default Home;
