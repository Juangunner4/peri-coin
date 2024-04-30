import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../images/homeBanner.svg'; // Ensure the path is correct
import logoCoin from '../images/logo.svg'; // Import the new logo image
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      alert("Contract address copied to clipboard!");
    } catch (err) {
      alert("Failed to copy!");
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
        <h1 className="tagline">Saquen el perico</h1>
        <p className="intro">Discover the fun and engaging world of Memecoin, your gateway to innovative cryptocurrency experiences.</p>
        <span onClick={handleCopyAddress} className="contract-address">
          {contractAddress}
        </span>
        <button onClick={() => navigate('/buy')} className="cta-button">Buy Memecoin</button>
        <div className="socials">
          <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">Dexscreener</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </div>
      <footer>
        <p>© 2024 Perico. All rights reserved.</p>
        <p>Disclaimer* $PERI is a memecoin and has no utility. Don't risk money you are afraid of losing. The price may go up or it may go down. We are not responsible for the price of the token.</p>
        <p>Contact: EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd | contact@perionsol.xyz</p>
      </footer>
    </div>
  );
}

export default Home;
