import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { fetchMarketStats } from '../services/market';
import { PRIMARY_GREEN } from '../styles/theme';
import { CONTRACT_ADDRESS } from '../config/token';

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
  gap: 2,
  textAlign: 'center'
};

const formatCurrency = (value) => {
  if (value === null || value === undefined) return '--';

  const num = Number(value);
  if (!Number.isFinite(num)) return '--';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: num >= 100 ? 0 : 2
  }).format(num);
};

const formatPercent = (value) => {
  if (value === null || value === undefined) return '--';

  const num = Number(value);
  if (!Number.isFinite(num)) return '--';

  const fractionDigits = Math.abs(num) >= 10 ? 1 : 2;
  const formatted = num.toFixed(fractionDigits);
  const prefix = num > 0 ? '+' : '';
  return `${prefix}${formatted}%`;
};

const formatInteger = (value) => {
  if (value === null || value === undefined) return '--';

  const num = Number(value);
  if (!Number.isFinite(num)) return '--';

  return new Intl.NumberFormat('en-US').format(num);
};

const TokenInformation = () => {
  const { t } = useTranslation();

  const [stats, setStats] = useState({
    marketCap: null,
    priceChange24h: null,
    volume24h: null,
    buys24h: null,
    sells24h: null,
    ticker: null
  });

  useEffect(() => {
    let isActive = true;

    fetchMarketStats(CONTRACT_ADDRESS)
      .then((data) => {
        if (!isActive) return;
        setStats(data);
      })
      .catch(() => {
        if (isActive) {
          setStats((previous) => ({ ...previous }));
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  const metrics = [
    { label: t('stats.marketCap'), value: formatCurrency(stats.marketCap) },
    { label: t('stats.ticker'), value: stats.ticker ?? '--' },
    { label: t('stats.priceChange24h'), value: formatPercent(stats.priceChange24h) },
    { label: t('stats.volume24h'), value: formatCurrency(stats.volume24h) },
    { label: t('stats.h24Buys'), value: formatInteger(stats.buys24h) },
    { label: t('stats.h24Sells'), value: formatInteger(stats.sells24h) }
  ];

  return (
    <Box sx={cardSx}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', color: PRIMARY_GREEN, textTransform: 'uppercase', letterSpacing: 1 }}
      >
        {t('statsTitle')}
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 0, sm: 2 }}
        justifyContent="center"
        sx={{ width: '100%', margin: 0 }}
      >
        {metrics.map(({ label, value }) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={label}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5,
              px: { xs: 1, sm: 0 }
            }}
          >
            <Typography
              variant="overline"
              display="block"
              sx={{ color: 'rgba(26,26,26,0.7)', fontWeight: 'bold' }}
            >
              {label}
            </Typography>
            <Typography variant="h6" sx={{ color: '#1a1a1a', wordBreak: 'break-word' }}>
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TokenInformation;
