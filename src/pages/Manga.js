import React from 'react';
import '../styles/Manga.css';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Manga = () => {
  const { t } = useTranslation();
  // Future chapter announcements will appear here

  return (
    <div className="manga-page">
      <h2>{t('manga')}</h2>
      <Card className="mint-card">
        <CardContent>
          <h3>{t('mintTitle')}</h3>
          <Button variant="contained" className="mint-btn">{t('mint')}</Button>
        </CardContent>
      </Card>
      <div className="manga-coming-soon">{t('mangaComingSoon')}</div>
    </div>
  );
};

export default Manga;
