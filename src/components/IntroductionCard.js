import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { PRIMARY_GREEN } from '../styles/theme';

const cardSx = {
  backgroundColor: '#E8F7FF',
  border: '2px solid #000',
  borderRadius: '24px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  width: '100%',
  maxWidth: 600,
  mx: 'auto',
  p: { xs: 3, sm: 4 },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  textAlign: 'center'
};

const IntroductionCard = () => {
  const { t } = useTranslation();

  return (
    <Box sx={cardSx}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: PRIMARY_GREEN, textTransform: 'uppercase', letterSpacing: 1 }}
      >
        {t('introTitle')}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.6, color: '#1a1a1a' }}
      >
        {t('intro')}
      </Typography>
    </Box>
  );
};

export default IntroductionCard;
