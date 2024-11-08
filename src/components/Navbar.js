import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Memecoin Logo" />
      </div>
      
      {/* Language buttons */}
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')} className="language-button">English</button>
        <button onClick={() => changeLanguage('es')} className="language-button">Español</button>
      </div>

      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>{t('home')}</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>{t('merch')}</Link></li>
          <li><Link to="/" onClick={() => setIsOpen(false)}>{t('game')}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
