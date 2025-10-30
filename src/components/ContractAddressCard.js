import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import { PRIMARY_GREEN } from '../styles/theme';

const cardSx = {
  backgroundColor: '#E8F7FF',
  border: '2px solid #000',
  borderRadius: '24px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  width: '70%',
  maxWidth: 600,
  mx: 'auto',
  p: { xs: 3, sm: 4 },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
};

const addressBoxSx = {
  display: 'flex',
  alignItems: { xs: 'flex-start', sm: 'center' },
  justifyContent: 'center',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: { xs: 1.5, sm: 2 },
  width: '100%'
};

const addressTypographySx = {
  fontSize: { xs: '0.75rem', sm: '0.95rem', md: '1.15rem' },
  wordBreak: 'break-all',
  color: '#000'
};

const ContractAddressCard = ({ contractAddress, onCopied }) => {
  const { t } = useTranslation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      if (onCopied) {
        onCopied();
      }
    } catch (error) {
      console.error('Failed to copy contract address', error);
    }
  };

  return (
    <Box sx={cardSx} onClick={handleCopy}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: PRIMARY_GREEN }}>
        {t('contracto')}
      </Typography>
      <Box sx={addressBoxSx}>
        <Typography variant="body1" sx={addressTypographySx}>
          {contractAddress}
        </Typography>
        <ContentCopyIcon fontSize="medium" sx={{ color: PRIMARY_GREEN }} />
      </Box>
    </Box>
  );
};

ContractAddressCard.propTypes = {
  contractAddress: PropTypes.string.isRequired,
  onCopied: PropTypes.func
};

ContractAddressCard.defaultProps = {
  onCopied: undefined
};

export default ContractAddressCard;
