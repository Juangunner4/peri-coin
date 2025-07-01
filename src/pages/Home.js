import React, { useState, useEffect } from 'react';
import logoCoin from '../images/logo.svg';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BirdBuyButton from '../components/BirdBuyButton';
import WhyPerico from '../components/WhyPerico';
import Box from '@mui/material/Box';
import { PRIMARY_GREEN } from '../styles/theme';

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
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        textAlign: 'center',
        pb: 5,
        overflowX: 'hidden',
        background: 'linear-gradient(to bottom, #f0f8ff, #add8e6)',
      }}
    >
      <Box sx={{ p: 4, color: '#333', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
          <img src={logoCoin} alt="Peri Logo" style={{ width: 120, height: 120 }} />
          <Typography sx={{ ml: 1, fontSize: '2rem', color: PRIMARY_GREEN, fontWeight: 'bold' }}>
            $PERI
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: '#000',
            p: 2,
            borderRadius: 1,
            maxWidth: 600,
            fontSize: 16,
            lineHeight: 1.4,
            mt: 1,
            transition: 'opacity 3s ease',
            opacity: fadeOut ? 0 : 1,
          }}
        >
          {t('intro')}
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
        <Paper
          onClick={handleCopyAddress}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            mb: 2,
            cursor: 'pointer',
            maxWidth: '100%',
            backgroundColor: PRIMARY_GREEN,
            color: 'white',
            borderRadius: '20px',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}
          elevation={3}
        >
          <Typography variant="body2" sx={{ mr: 1 }} noWrap>
            {contractAddress}
          </Typography>
          <ContentCopyIcon fontSize="small" />
        </Paper>
        {showCopied && (
          <Box sx={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: PRIMARY_GREEN, color: 'white', p: 1.5, borderRadius: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
            {t('contractcopied')}
          </Box>
        )}
        <Button
          variant="contained"
          onClick={() =>
            (window.location.href =
              'https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd')
          }
          sx={{
            backgroundColor: PRIMARY_GREEN,
            color: 'white',
            px: 2,
            py: 1,
            fontSize: '1.5rem',
            borderRadius: 1,
            border: '2px solid #3a1a00',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            '&:hover': { backgroundColor: '#3c8c3c' },
            mt: 1,
            mb: 1,
          }}
        >
          {t('buy')}
        </Button>
      </Box>
      <WhyPerico />
      <BirdBuyButton />
    </Container>
  );
}

export default Home;
