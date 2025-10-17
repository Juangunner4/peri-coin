import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { PRIMARY_GREEN } from '../styles/theme';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Manga = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleMint = () => {
    setShowOptions(true);
  };

  const handleSelectLang = (lang) => {
    setMessage(i18n.t('mintingProgress', { lng: lang }));
    setShowOptions(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        p: { xs: 3, sm: 5 },
        textAlign: 'center',
        maxWidth: 640,
        mx: 'auto',
        backgroundColor: 'background.paper',
        borderRadius: { xs: 2, sm: 3 },
        boxShadow: { xs: '0px 12px 30px rgba(15, 23, 42, 0.12)', sm: '0px 18px 45px rgba(15, 23, 42, 0.14)' },
        overflow: 'hidden',
        minHeight: { xs: 360, sm: 420 }
      }}
    >
      <Typography sx={{ fontWeight: 'bold', mb: 1 }} data-testid="top-message">
        {t('mangaTopMessage')}
      </Typography>
      <LinearProgress variant="determinate" value={1} sx={{ height: 8, borderRadius: 5, mb: 2 }} />
      <Tooltip title="Pay with USDC, SOL, or PERI">
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }} data-testid="price">
          $0.99
        </Typography>
      </Tooltip>
      <Button variant="contained" onClick={handleMint} sx={{ mt: 2, backgroundColor: PRIMARY_GREEN }}>
        {t('mintManga')}
      </Button>
      {showOptions && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <Button variant="outlined" onClick={() => handleSelectLang('en')}>{t('mintEnglish')}</Button>
          <Button variant="outlined" onClick={() => handleSelectLang('es')}>{t('mintSpanish')}</Button>
        </Box>
      )}
      {message && (
        <Typography sx={{ mt: 2 }} data-testid="mint-message">
          {message}
        </Typography>
      )}
      <Box
        data-testid="manga-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.55)',
          color: 'common.white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: { xs: 3, sm: 6 },
          gap: { xs: 1.5, sm: 2 },
          pointerEvents: 'none',
          backdropFilter: 'blur(2px)',
          zIndex: 1
        }}
      >
        <Typography
          variant="h3"
          component="p"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            fontSize: { xs: '1.75rem', sm: '2.5rem' },
            '@media (max-width:700px)': {
              fontSize: '2rem'
            }
          }}
        >
          {t('mangaOverlayTitle')}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            maxWidth: 420,
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            '@media (max-width:700px)': {
              fontSize: '1rem'
            }
          }}
        >
          {t('mangaOverlaySubtitle')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Manga;
