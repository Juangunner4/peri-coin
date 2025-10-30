import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PeriStanding from '../images/PeriStanding.png';

const Manga = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        p: 0,
        m: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative'
      }}
    >
      {/* Coming Soon Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '30px 50px',
          margin: '20px',
          borderRadius: '15px',
          border: '3px solid rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(5px)',
          '@media (max-width: 700px)': {
            top: '15%',
            padding: '20px 30px',
            margin: '10px'
          }
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            '@media (max-width: 700px)': {
              fontSize: '2rem'
            }
          }}
        >
          Próximamente...
        </Typography>
      </Box>

      <Box
        component="img"
        src={PeriStanding}
        alt="Peri Standing"
        sx={{
          width: '100%',
          height: '100vh',
          objectFit: 'contain',
          objectPosition: 'bottom',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
          display: 'block',
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 1,
          '@media (max-width: 700px)': {
            height: '100vh',
            objectFit: 'contain'
          }
        }}
      />
    </Box>
  );
};

export default Manga;
