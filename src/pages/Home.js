import React, { useState, useEffect } from 'react';
import periMan from '../images/PeriMan.png';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import WhyPerico from '../components/WhyPerico';
import Box from '@mui/material/Box';
import { PRIMARY_GREEN } from '../styles/theme';
import { CONTRACT_ADDRESS } from '../config/token';
import ContractAddressCard from '../components/ContractAddressCard';
import IntroductionCard from '../components/IntroductionCard';
import TokenInformation from '../components/TokenInformation';

function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const contractAddress = CONTRACT_ADDRESS;
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

  const handleContractCopied = () => {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
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
      <Box
        sx={{
          position: 'fixed',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
          zIndex: 1000
        }}
      >
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
          minHeight: '60vh',
          width: '100%'
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
          <Box id="contract" sx={{ width: '100%', mb: { xs: 3, sm: 4 } }}>
            <ContractAddressCard contractAddress={contractAddress} onCopied={handleContractCopied} />
          </Box>
          <Box sx={{ width: '100%', mb: { xs: 3, sm: 4 } }}>
            <TokenInformation />
          </Box>
          <IntroductionCard />
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
