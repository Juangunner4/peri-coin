import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import IconButton from '@mui/material/IconButton';

const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(p => !p);
  };

  return (
    <IconButton
      onClick={toggle}
      aria-pressed={playing}
      sx={{ cursor: 'pointer', ml: 1, display: 'flex', alignItems: 'center' }}
    >
      {playing ? <VolumeOffIcon /> : <VolumeUpIcon />}
      <ReactHowler src="/song.mp3" playing={playing} loop volume={0.5} />
    </IconButton>
  );
};

export default AudioToggle;
