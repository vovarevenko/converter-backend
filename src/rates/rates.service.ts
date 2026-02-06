import { Injectable } from '@nestjs/common'
import { Rate } from './types'
import { CURRENCIES } from './currencies'
import { RatesFetcherService } from './rates-fetcher.service'

@Injectable()
export class RatesService {
  constructor(private readonly ratesFetcher: RatesFetcherService) {}

  getRates(): Rate[] {
    return CURRENCIES.map(currency => ({
      currency,
      rate: this.ratesFetcher.getRate(currency.code),
    }))
  }
}
