import React from 'react';
import '../styles/Manga.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

const Manga = () => {
  const { t } = useTranslation();
  // Future chapter announcements will appear here

  return (
    <div className="manga-page">
      <h2>{t('manga')}</h2>
      <div className="manga-loader">
        <FontAwesomeIcon icon={faPenNib} className="writing-icon" />
        <span className="typing-text">Writing new chapters...</span>
      </div>
      <div className="manga-coming-soon">{t('mangaComingSoon')}</div>
    </div>
  );
};

export default Manga;
