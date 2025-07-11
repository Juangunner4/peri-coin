import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { PRIMARY_GREEN } from '../styles/theme';

const Manga = () => {
  const [message, setMessage] = useState('');

  const handleMint = () => {
    setMessage('Manga minting is in progress!');
  };

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <LinearProgress variant="determinate" value={1} sx={{ height: 8, borderRadius: 5, mb: 2 }} />
      <Tooltip title="Pay with USDC, SOL, or PERI">
        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }} data-testid="price">
          $2.99
        </Typography>
      </Tooltip>
      <Button variant="contained" onClick={handleMint} sx={{ mt: 2, backgroundColor: PRIMARY_GREEN }}>
        Mint Manga
      </Button>
      {message && (
        <Typography sx={{ mt: 2 }} data-testid="mint-message">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Manga;
