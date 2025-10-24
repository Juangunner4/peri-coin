import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { fetchMarketStats } from '../services/market';
import { PRIMARY_GREEN } from '../styles/theme';

const PUMP_TOKEN_ADDRESS = 'EdopmgERFJbgJLVTwm9fuvt2Y5DmwjbjdZhVRrM3dpFd';

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

const PumpFunFeed = () => {
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

    fetchMarketStats(PUMP_TOKEN_ADDRESS)
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
    { label: 'Market Cap', value: formatCurrency(stats.marketCap) },
    { label: 'Ticker', value: stats.ticker ?? '--' },
    { label: '24h Change', value: formatPercent(stats.priceChange24h) },
    { label: '24h Volume', value: formatCurrency(stats.volume24h) },
    { label: '24h Buys', value: formatInteger(stats.buys24h) },
    { label: '24h Sells', value: formatInteger(stats.sells24h) }
  ];

  return (
    <Paper
      sx={{
        my: 2,
        width: '100%',
        border: '3px solid #000',
        backgroundColor: PRIMARY_GREEN,
        color: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        p: { xs: 2, sm: 3 }
      }}
      elevation={3}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Pump.fun Token Stats
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {metrics.map(({ label, value }) => (
          <Grid item xs={12} sm={6} key={label}>
            <Typography
              variant="overline"
              display="block"
              sx={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {label}
            </Typography>
            <Typography variant="h6">{value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default PumpFunFeed;
