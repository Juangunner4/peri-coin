import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PRIMARY_GREEN } from '../styles/theme';

const PeriGame = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', fontSize: 24, color: PRIMARY_GREEN, fontWeight: 'bold' }}>
      <FontAwesomeIcon icon={faSpinner} spin data-testid="construction-icon" style={{ fontSize: 60, color: PRIMARY_GREEN }} />
      <Typography variant="h5">{t('underConstruction')}</Typography>
    </Box>
  );
};

export default PeriGame;
