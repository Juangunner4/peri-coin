import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const items = [
  { emoji: '🕊️', key: 'why1' },
  { emoji: '🛫', key: 'why2' },
  { emoji: '🎉', key: 'why3' }
];

const WhyPerico = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {t('whyTitle')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {items.map((item, i) => (
          <Box key={i} sx={{ backgroundColor: 'rgba(255,255,255,0.9)', p: 2, borderRadius: 1, width: 200, boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
            <Typography component="span" sx={{ fontSize: '2rem' }}>{item.emoji}</Typography>
            <Typography>{t(item.key)}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyPerico;
