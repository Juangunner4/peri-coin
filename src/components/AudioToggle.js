import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import '../styles/AudioToggle.css';

const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(p => !p);
  };

  return (
    <div className="audio-toggle" onClick={toggle}>
      {playing ? <VolumeOffIcon /> : <VolumeUpIcon />}
      <ReactHowler src="/song.mp3" playing={playing} loop volume={0.5} />
    </div>
  );
};

export default AudioToggle;
