import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import * as Dialog from '@radix-ui/react-dialog';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PRIMARY_GREEN } from '../styles/theme';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  return (
    <AppBar position="sticky" sx={{ backgroundColor: PRIMARY_GREEN }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Memecoin Logo" style={{ width: 50, height: 50 }} />
          <Typography sx={{ ml: 1, fontWeight: 'bold', color: 'white' }}>
            $PERI
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button onClick={() => changeLanguage('en')} size="small">English</Button>
          <Button onClick={() => changeLanguage('es')} size="small">Español</Button>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/">{t('home')}</Button>
          <Button component={Link} to="/manga">{t('manga')}</Button>
          <Button component={Link} to="/game">{t('game')}</Button>
        </Box>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: 'inherit' }}>
              <HamburgerMenuIcon />
            </IconButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay style={{ backgroundColor: 'rgba(0,0,0,0.4)', position: 'fixed', inset: 0, zIndex: 1001 }} />
            <Dialog.Content style={{ backgroundColor: PRIMARY_GREEN, position: 'fixed', top: 0, left: 0, height: '100%', width: '200px', padding: '20px', zIndex: 1002 }}>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <li><Button component={Link} to="/" onClick={() => setOpen(false)} color="inherit">{t('home')}</Button></li>
                <li><Button component={Link} to="/manga" onClick={() => setOpen(false)} color="inherit">{t('manga')}</Button></li>
                <li><Button component={Link} to="/game" onClick={() => setOpen(false)} color="inherit">{t('game')}</Button></li>
              </Box>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
