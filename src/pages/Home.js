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
          {/* Stats grid section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gapX: 2,
              textAlign: 'center',
              fontSize: '0.875rem',
              p: 4,
              maxWidth: 600,
              mt: 1,
              mx: 'auto',
              backgroundColor: '#E8F7FF',
              border: '2px solid #000',
              borderRadius: '24px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            {/* Market Cap */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                {t('stats.marketCap')}
              </Typography>
              <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                NULL
              </Typography>
            </Box>
            {/* Total Supply */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                {t('stats.totalSupply')}
              </Typography>
              <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                NULL PERI
              </Typography>
            </Box>
            {/* Circulating Supply */}
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
              <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                {t('stats.circulatingSupply')}
              </Typography>
              <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                NULL PERI
              </Typography>
            </Box>
            {/* Contract Address */}
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
              <Typography sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#000' }}>
                {t('stats.holders')}
              </Typography>
              <Typography sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', mr: 0.5, color: '#000' }}>
                NULL
              </Typography>
            </Box>
          </Box>
          {/* Intro text */}
          <Typography
            variant="body1"
            sx={{
              // Dark sky blue background with black border
              backgroundColor: '#00BFFF',
              color: '#000',
              border: '2px solid #000',
              p: 4,
              borderRadius: '24px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
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
      <Box id="contract" sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden' }}>
        <Paper
          onClick={handleCopyAddress}
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 3,                       // increased padding for emphasis
            mb: 2,
            cursor: 'pointer',
            maxWidth: '100%',
            border: '3px solid #000',  // bolder dark border
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
          <Typography variant="body1" sx={{ mr: 1, fontSize: '1.25rem' }} noWrap>
            {contractAddress}
          </Typography>
          <ContentCopyIcon fontSize="medium" />
        </Paper>
        {showCopied && (
          <Box sx={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: PRIMARY_GREEN, color: 'white', p: 1.5, borderRadius: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }}>
            {t('contractcopied')}
          </Box>
        )}
      </Box>
      <Box id="why">
        <WhyPerico />
      </Box>
    </Container>
  );
}

export default Home;
