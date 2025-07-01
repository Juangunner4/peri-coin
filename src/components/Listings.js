import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { SKY_BLUE, ACCENT_BROWN } from '../styles/theme';

const Listings = () => {
  const { t } = useTranslation();
  return (
      <Card sx={{ backgroundColor: SKY_BLUE, p: 2, my: 2, textAlign: 'center', borderRadius: '8px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ color: ACCENT_BROWN }}>
          {t('cex')}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {t('upcoming')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Listings;
