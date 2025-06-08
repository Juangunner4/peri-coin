import React, { useState } from 'react';
// import logoCoin from '../images/logo.svg';
import dexLogo from '../images/dexlogo.png';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import PriceChart from '../components/PriceChart';
import HowToBuy from '../components/HowToBuy';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";
  const { t } = useTranslation();

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
      {/* <div className="logoCoin">
        <img src={logoCoin} alt="Logo Coin" />
      </div> */}

      <div className="content">
        <p className="intro">
          <span className="highlight">$Peri</span> {t("intro")} <span className="phrase">“Saquen el perico”</span>.
        </p>
        <div className="contract-container">
          <h2 className="contract-label">{t("contractv2")}</h2>
          <span onClick={handleCopyAddress} className="contract-address">
            {contractAddress}
          </span>
        </div>
        {showCopied && (
          <div className="notification">{t("contractcopied")}</div>
        )}
        <button onClick={() => window.location.href = 'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd'} className="cta-button">
          {t("buy")}
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
        <PriceChart />
        <HowToBuy />
      </div>
    </div>
  );
}

export default Home;
