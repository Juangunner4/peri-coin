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
          <Button
            onClick={() => changeLanguage('en')}
            size="small"
            sx={{
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              '&:hover': { border: '2px solid #388e3c' }
            }}
          >
            English
          </Button>
          <Button
            onClick={() => changeLanguage('es')}
            size="small"
            sx={{
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              '&:hover': { border: '2px solid #388e3c' }
            }}
          >
            Español
          </Button>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" color="inherit" sx={{ color: 'white', '&:hover': { border: '2px solid #388e3c' } }}>{t('home')}</Button>
          <Button component={Link} to="/manga" color="inherit" sx={{ color: 'white', '&:hover': { border: '2px solid #388e3c' } }}>{t('manga')}</Button>
          <Button
            variant="contained"
            component="a"
            href="https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#2e7d32',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#1b5e20' }
            }}
          >
            {t('buyPeri')}
          </Button>
        </Box>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, color: 'inherit' }}>
              <HamburgerMenuIcon />
            </IconButton>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay style={{ backgroundColor: 'rgba(0,0,0,0.4)', position: 'fixed', inset: 0, zIndex: 1200 }} />
            <Dialog.Content style={{ backgroundColor: PRIMARY_GREEN, position: 'fixed', top: 0, left: 0, height: '100%', width: '200px', padding: '20px', zIndex: 1201 }}>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <li><Button component={Link} to="/" onClick={() => setOpen(false)} sx={{ color: 'white', '&:hover': { border: '2px solid #388e3c' } }}>{t('home')}</Button></li>
                <li><Button component={Link} to="/manga" onClick={() => setOpen(false)} sx={{ color: 'white', '&:hover': { border: '2px solid #388e3c' } }}>{t('manga')}</Button></li>
                <li>
                  <Button
                    component="a"
                    href="https://www.pump.fun/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    sx={{ color: 'white', backgroundColor: '#2e7d32', fontWeight: 'bold', '&:hover': { backgroundColor: '#1b5e20' } }}
                  >
                    {t('buyPeri')}
                  </Button>
                </li>
              </Box>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
