import React from 'react';
import '../styles/Manga.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

const Manga = () => {
  return (
    <div className="manga-page">
      <div className="manga-loader">
        <FontAwesomeIcon icon={faPenNib} className="writing-icon" />
        <svg className="pen-stroke" viewBox="0 0 200 50">
          <path d="M10 30 Q70 5 130 30" />
          <text x="140" y="35">PERI</text>
        </svg>
      </div>
    </div>
  );
};

export default Manga;
