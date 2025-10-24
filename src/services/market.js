const DEXSCREENER_BASE_URL = 'https://api.dexscreener.com/tokens/v1/solana/';

const parseNumeric = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : null;
};

export const fetchMarketStats = async (tokenAddress) => {
  const response = await fetch(`${DEXSCREENER_BASE_URL}${tokenAddress}`);

  if (!response.ok) {
    throw new Error('Failed to fetch market data');
  }

  const data = await response.json();
  const pair = data?.pairs?.[0];

  if (!pair) {
    throw new Error('No market data available');
  }

  return {
    marketCap: parseNumeric(pair.marketCap),
    volume24h: parseNumeric(pair.volume?.h24),
    priceChange24h: parseNumeric(pair.priceChange?.h24),
    buys24h: parseNumeric(pair.txns?.h24?.buys),
    sells24h: parseNumeric(pair.txns?.h24?.sells),
  };
};
