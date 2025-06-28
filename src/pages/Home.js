import React, { useState } from 'react';
// import logoCoin from '../images/logo.svg';
import dexLogo from '../images/dexlogo.png';
import '../styles/Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import PriceChart from '../components/PriceChart';

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
    <Container className="homeContainer">
      {/* <div className="logoCoin">
        <img src={logoCoin} alt="Logo Coin" />
      </div> */}

      <section className="hero">
        <Typography variant="h2" className="hero-title">
          {t('heroTitle')}
        </Typography>
        <Typography variant="subtitle1" className="hero-subtitle">
          {t('heroSubtitle')}
        </Typography>
      </section>

      <div className="content">
        <div
          onClick={handleCopyAddress}
          className="contract-address"
        >
          {contractAddress}
        </div>
        {showCopied && (
          <div className="notification">{t("contractcopied")}</div>
        )}
        <Button
          variant="contained"
          onClick={() =>
            window.location.href =
              'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd'
          }
          className="cta-button"
        >
          {t('buy')}
        </Button>
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
      </div>
    </Container>
  );
}

export default Home;
