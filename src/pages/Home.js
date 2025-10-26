import React, { useState, useEffect } from 'react';
import periMan from '../images/PeriMan.png';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhyPerico from '../components/WhyPerico';
import Box from '@mui/material/Box';
import { PRIMARY_GREEN } from '../styles/theme';
import PumpFunFeed from '../components/PumpFunFeed';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const contractAddress = "EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd";
  const { t } = useTranslation();
  // Track active section for navigation dots
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const handleScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight / 2;
      // const heroEl is not needed for scroll detection
      const contractEl = document.getElementById('contract');
      const whyEl = document.getElementById('why');
      if (whyEl && scrollMid >= whyEl.offsetTop) {
        setActiveSection('why');
      } else if (contractEl && scrollMid >= contractEl.offsetTop) {
        setActiveSection('contract');
      } else {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
      }}
    >
      {/* Section navigation dots */}
      <Box sx={{ position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 1, zIndex: 1000 }}>
        {['hero', 'contract', 'why'].map((sec) => (
          <Box
            key={sec}
            onClick={() => document.getElementById(sec).scrollIntoView({ behavior: 'smooth' })}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: activeSection === sec ? PRIMARY_GREEN : 'grey.500',
              cursor: 'pointer',
              '&:hover': { bgcolor: PRIMARY_GREEN }
            }}
          />
        ))}
      </Box>
      <Box
        id="hero"
        sx={{
          position: 'relative',
          overflow: 'visible',
          mt: 8,
          p: { xs: 2, sm: 4 },
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh'
        }}
      >
        {/* Hero content overlay */}
        <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Logo and title */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <img
              src={periMan}
              alt="Peri Logo"
              style={{ width: 250, height: 250, filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}
            />
          </Box>
          {/* Contract section */}
          <Box
            id="contract"
            sx={{
              width: '100%',
              maxWidth: 600,
              mb: { xs: 3, sm: 4 },
              mx: 'auto'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              {t('contracto')}
            </Typography>
            <Paper
              onClick={handleCopyAddress}
              sx={{
                display: 'flex',
                alignItems: { xs: 'stretch', sm: 'center' },
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1.5, sm: 2 },
                width: '100%',
                p: { xs: 3, sm: 4 },
                cursor: 'pointer',
                border: '3px solid #000',
                backgroundColor: PRIMARY_GREEN,
                color: 'white',
                borderRadius: '24px',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}
              elevation={3}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.95rem', md: '1.25rem' },
                  '@media (max-width:700px)': {
                    fontSize: '0.85rem'
                  },
                  '@media (max-width:500px)': {
                    fontSize: '0.7rem'
                  },
                  wordBreak: 'break-all',
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                {contractAddress}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ContentCopyIcon fontSize="medium" />
              </Box>
            </Paper>
          </Box>
          <PumpFunFeed />
          {/* Intro text */}
          <Typography
            variant="body1"
            sx={{
              backgroundColor: PRIMARY_GREEN,
              color: 'white',
              border: '3px solid #000',
              p: 4,
              borderRadius: '24px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              maxWidth: 600,
              fontSize: '1.5rem',
              lineHeight: 1.6,
              mt: 1
            }}
          >
            {t('intro')}
          </Typography>
        </Box>
      </Box>
      {showCopied && (
        <Box sx={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: PRIMARY_GREEN, color: 'white', p: 1.5, borderRadius: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.3)', zIndex: 2000 }}>
          {t('contractcopied')}
        </Box>
      )}
      <Box id="why">
        <WhyPerico />
      </Box>
    </Container>
  );
}

export default Home;
