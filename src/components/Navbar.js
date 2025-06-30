import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import * as Dialog from '@radix-ui/react-dialog';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Memecoin Logo" />
        <span className="navbar-ticker">$PERI</span>
      </div>
      
      {/* Language buttons */}
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')} className="language-button">English</button>
        <button onClick={() => changeLanguage('es')} className="language-button">Español</button>
      </div>

      <div className="navbar-links desktop-links">
        <ul>
          <li><Link to="/" >{t('home')}</Link></li>
          <li><Link to="/manga" >{t('manga')}</Link></li>
          <li><Link to="/game" >{t('game')}</Link></li>
        </ul>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="burger-button">
            <HamburgerMenuIcon />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="drawer-overlay" />
          <Dialog.Content className="drawer-content">
            <ul>
              <li><Link to="/" onClick={() => setOpen(false)}>{t('home')}</Link></li>
              <li><Link to="/manga" onClick={() => setOpen(false)}>{t('manga')}</Link></li>
              <li><Link to="/game" onClick={() => setOpen(false)}>{t('game')}</Link></li>
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
};

export default Navbar;
