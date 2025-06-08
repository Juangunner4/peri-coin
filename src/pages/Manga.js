import React from 'react';
import '../styles/Manga.css';
import { useTranslation } from 'react-i18next';

const Manga = () => {
  const { t } = useTranslation();
  return (
    <div className="manga-page">
      <h2>{t('manga')}</h2>
      <ul className="manga-list">
        <li>Perico Adventures - Chapter 5 releasing soon!</li>
        <li>Crypto Feathers - New arc drops next week!</li>
        <li>The Blockchain Bird - Volume 2 on the way!</li>
      </ul>
    </div>
  );
};

export default Manga;
