export const FRANKFURTER_URL =
  'https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR,CNY,GBP,KRW,JPY,CAD'

export const EXCHANGE_RATE_API_URL =
  'https://open.er-api.com/v6/latest/USD'

export const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,the-open-network&vs_currencies=usd'

export const FRANKFURTER_CURRENCIES = ['EUR', 'CNY', 'GBP', 'KRW', 'JPY', 'CAD']
export const EXCHANGE_RATE_CURRENCIES = ['RUB', 'VND', 'UAH']

export const COINGECKO_ID_MAP: Record<string, string> = {
  bitcoin: 'BTC',
  ethereum: 'ETH',
  'the-open-network': 'TON',
}

export const FETCH_TIMEOUT_MS = 10_000
