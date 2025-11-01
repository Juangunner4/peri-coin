import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import { PRIMARY_GREEN } from '../styles/theme';

const Socials = () => {
  const socials = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/perionsol',
      icon: <FontAwesomeIcon icon={faXTwitter} size="2x" />,
      color: '#000000'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+rNFvjrSESP0yY2Ix',
      icon: <FontAwesomeIcon icon={faTelegram} size="2x" />,
      color: '#0088cc'
    },
    {
      name: 'Mobyscreener',
      url: 'https://www.mobyscreener.com/solana/EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd',
      icon: (
        <Box
          component="img"
          src="https://www.mobyscreener.com/favicon.ico"
          alt="Mobyscreener"
          sx={{ width: 32, height: 32 }}
        />
      ),
      color: PRIMARY_GREEN
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        my: 4,
        flexWrap: 'wrap'
      }}
    >
      {socials.map((social) => (
        <Tooltip key={social.name} title={social.name} arrow>
          <IconButton
            component="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 80,
              height: 80,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.1)',
                '& svg, & img': {
                  color: social.color,
                  filter: 'brightness(1.2)'
                }
              },
              '& svg, & img': {
                color: social.color,
                transition: 'all 0.3s ease'
              }
            }}
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Socials;
