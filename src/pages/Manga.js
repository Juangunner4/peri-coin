import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import { PRIMARY_GREEN } from '../styles/theme';

const Manga = () => {
  return (
    <Box sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}>
      <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', color: PRIMARY_GREEN, fontSize: '1.5rem' }}>
        <FontAwesomeIcon icon={faPaintBrush} data-testid="writing-icon" style={{ fontSize: 50, marginBottom: 10, color: PRIMARY_GREEN }} />
        <svg data-testid="pen-stroke" viewBox="0 0 200 50" style={{ width: 200, height: 50 }}>
          <path d="M10 30 Q70 5 130 30" fill="none" stroke={PRIMARY_GREEN} strokeWidth="2" strokeDasharray="200" strokeDashoffset="200">
            <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" fill="freeze" />
          </path>
        </svg>
      </Box>
    </Box>
  );
};

export default Manga;
