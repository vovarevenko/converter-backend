import { Currency } from './types'

export const CURRENCIES: Currency[] = [
  { code: 'USD', title: 'US Dollar', symbol: '$', decimals: 2 },
  { code: 'EUR', title: 'Euro', symbol: '€', decimals: 2 },
  { code: 'RUB', title: 'Russian Ruble', symbol: '₽', decimals: 2 },
  { code: 'BTC', title: 'Bitcoin', symbol: '₿', decimals: 8 },
  { code: 'ETH', title: 'Ethereum', symbol: 'Ξ', decimals: 8 },
  { code: 'VND', title: 'Vietnamese Dong', symbol: '₫', decimals: 0 },
  { code: 'CNY', title: 'Chinese Yuan', symbol: '¥', decimals: 2 },
  { code: 'GBP', title: 'British Pound', symbol: '£', decimals: 2 },
  { code: 'TON', title: 'Toncoin', symbol: 'TON', decimals: 9 },
  { code: 'UAH', title: 'Ukrainian Hryvnia', symbol: '₴', decimals: 2 },
  { code: 'KRW', title: 'South Korean Won', symbol: '₩', decimals: 0 },
  { code: 'JPY', title: 'Japanese Yen', symbol: 'JP¥', decimals: 0 },
  { code: 'CAD', title: 'Canadian Dollar', symbol: 'CA$', decimals: 2 },
]
