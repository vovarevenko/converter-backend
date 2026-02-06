export interface Currency {
  code: string
  title: string
  symbol: string
  decimals: number
}

export interface Rate {
  currency: Currency
  rate: number
}
