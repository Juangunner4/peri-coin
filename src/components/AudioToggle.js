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
    <button
      className="audio-toggle"
      type="button"
      onClick={toggle}
      aria-pressed={playing}
    >
      {playing ? <VolumeOffIcon /> : <VolumeUpIcon />}
      <ReactHowler src="/song.mp3" playing={playing} loop volume={0.5} />
    </button>
  );
};

export default AudioToggle;
