import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box component="footer" sx={{ backgroundColor: '#ae6d06', p: 2, textAlign: 'center', fontWeight: 'bold' }}>
      <Typography component="p">&copy;{t('copyr')}</Typography>
      <Typography component="p" sx={{ fontSize: 14, color: 'black' }}>{t('disclaimer')}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, flexWrap: 'wrap' }}>
        <Box sx={{ flex: 1 }}>
          <a
            href="https://solscan.io/address/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} /> {t('contract')}
          </a>
        </Box>
        <Box sx={{ flex: 1 }}>
          <a href="mailto:contact@perionsol.xyz" style={{ color: 'black', textDecoration: 'none' }}>contact@perionsol.xyz</a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
