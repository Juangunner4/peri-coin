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
    <Box sx={{ p: 2, textAlign: 'center' }}>
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
    </Box>
  );
};

export default Manga;
