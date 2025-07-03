import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PublicIcon from '@mui/icons-material/Public';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { PRIMARY_GREEN } from '../styles/theme';

const WhyPerico = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <PublicIcon sx={{ fontSize: 48, color: PRIMARY_GREEN }} />, key: 'why1' },
    { icon: <FlightTakeoffIcon sx={{ fontSize: 48, color: PRIMARY_GREEN }} />, key: 'why2' },
    { icon: <CelebrationIcon sx={{ fontSize: 48, color: PRIMARY_GREEN }} />, key: 'why3' }
  ];

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {t('whyTitle')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: '#E8F7FF',
              p: 2,
              border: '2px solid #000',
              borderRadius: '24px',
              width: 200,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1
            }}
          >
            {item.icon}
            <Typography>{t(item.key)}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyPerico;
