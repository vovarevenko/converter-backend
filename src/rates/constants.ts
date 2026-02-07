// Frankfurter (ECB data) — all 29 available currencies
const FRANKFURTER_SYMBOLS = [
  'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK',
  'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'ISK',
  'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN',
  'RON', 'SEK', 'SGD', 'THB', 'TRY', 'ZAR',
]

export const FRANKFURTER_URL =
  `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${FRANKFURTER_SYMBOLS.join(',')}`

export const EXCHANGE_RATE_API_URL =
  'https://open.er-api.com/v6/latest/USD'

// CoinGecko — popular cryptocurrencies
const COINGECKO_IDS = [
  'bitcoin', 'ethereum', 'the-open-network', 'binancecoin',
  'ripple', 'solana', 'cardano', 'dogecoin', 'polkadot',
  'avalanche-2', 'chainlink', 'litecoin', 'tron',
  'polygon-ecosystem-token', 'uniswap', 'stellar',
]

export const COINGECKO_URL =
  `https://api.coingecko.com/api/v3/simple/price?ids=${COINGECKO_IDS.join(',')}&vs_currencies=usd`

export const FRANKFURTER_CURRENCIES = FRANKFURTER_SYMBOLS

// Popular currencies not covered by Frankfurter (sourced from ExchangeRate API)
export const EXCHANGE_RATE_CURRENCIES = [
  'AED', 'ARS', 'BDT', 'CLP', 'COP', 'EGP', 'GEL',
  'KZT', 'NGN', 'PEN', 'PKR', 'RUB', 'SAR', 'TWD',
  'UAH', 'UZS', 'VND',
]

export const COINGECKO_ID_MAP: Record<string, string> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  'the-open-network': 'TON',
  binancecoin: 'BNB',
  ripple: 'XRP',
  solana: 'SOL',
  cardano: 'ADA',
  dogecoin: 'DOGE',
  polkadot: 'DOT',
  'avalanche-2': 'AVAX',
  chainlink: 'LINK',
  litecoin: 'LTC',
  tron: 'TRX',
  'polygon-ecosystem-token': 'POL',
  uniswap: 'UNI',
  stellar: 'XLM',
}

export const FETCH_TIMEOUT_MS = 10_000
