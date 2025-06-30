import React, { useState, useEffect } from 'react';
// import logoCoin from '../images/logo.svg';
import '../styles/Home.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 50000);
    return () => clearTimeout(timer);
  }, []);

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
        <Typography
          variant="body1"
          className={`intro-message ${fadeOut ? 'fade-out' : ''}`}
        >
          {t('intro')}
        </Typography>
      </section>

      <div className="content">
        <Paper
          onClick={handleCopyAddress}
          className="contract-address"
          sx={{ display: 'flex', alignItems: 'center', p: 1, mb: 2, cursor: 'pointer', maxWidth: '100%' }}
          elevation={3}
        >
          <Typography variant="body2" sx={{ mr: 1 }} noWrap>
            {contractAddress}
          </Typography>
          <ContentCopyIcon fontSize="small" />
        </Paper>
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
      </div>
    </Container>
  );
}

export default Home;
