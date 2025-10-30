import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PRIMARY_GREEN } from '../styles/theme';
import PeriDice from '../images/PeriDice.svg';
import PeriBillsOnFloor from '../images/PeriBillsOnFloor .svg';
import Pericoin from '../images/Pericoin.png';

const WhyPerico = () => {
  const { t } = useTranslation();

  const items = [
    { icon: <Box component="img" src={PeriDice} alt="Peri Dice" sx={{ width: 80, height: 80, objectFit: 'contain' }} />, key: 'why1' },
    { icon: <Box component="img" src={PeriBillsOnFloor} alt="Peri Bills" sx={{ width: 80, height: 80, objectFit: 'contain' }} />, key: 'why2' },
    { icon: <Box component="img" src={Pericoin} alt="Pericoin" sx={{ width: 80, height: 80, objectFit: 'contain' }} />, key: 'why3' }
  ];

  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {t('whyTitle')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 2 }}>
        {items.map((item, i) => (
          <Box
            key={item.key}
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
