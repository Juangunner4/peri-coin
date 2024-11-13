import React, { useState, useEffect} from 'react';
import logoCoin from '../images/logo.svg';
import dexLogo from '../images/dexlogo.png';
import '../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="homeContainer">
      {/* <div className="logoCoin">
        <img src={logoCoin} alt="Logo Coin" />
      </div> */}

      <div className="content">
        <p className="intro">
          <span className="highlight">$Peri</span> {t("intro")} <span className="phrase">“Saquen el perico”</span>.
        </p>
        <span onClick={handleCopyAddress} className="contract-address">
        {contractAddress}
        </span>
        {showCopied && (
          <div className="notification">Contract Copied</div>
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
        <div className={`guide ${isScrolled ? 'scrolled' : ''}`}>
          <div className="guide-text">
            <h2>{t("howtobuy")}</h2>
            <ol>
              <li>{t("guide_step1")}</li>
              <li>{t("guide_step2")}</li>
              <li>{t("guide_step3")}</li>
              <li>{t("guide_step4")}</li>
            </ol>
          </div>
          <div className="guide-images">
            {/* <img src={step1Img} alt="Step 1" />
            <img src={step2Img} alt="Step 2" />
            <img src={step3Img} alt="Step 3" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
