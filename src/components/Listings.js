import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../styles/Listings.css';
import { useTranslation } from 'react-i18next';

const Listings = () => {
  const { t } = useTranslation();
  return (
    <Card className="listings-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {t('cex')}
        </Typography>
        <Typography variant="body2" className="listings-text">
          {t('upcoming')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Listings;
