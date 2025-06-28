import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import '../styles/PeriGame.css';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

const PeriGame = () => {
  const { t } = useTranslation();
  return (
    <div className="game-construction">
      <FontAwesomeIcon icon={faPersonDigging} className="construction-icon" />
      <Typography variant="h5">{t('underConstruction')}</Typography>
    </div>
  );
};

export default PeriGame;
