import { Injectable } from '@nestjs/common'
import { Rate } from './types'
import { CURRENCIES } from './currencies'

@Injectable()
export class RatesService {
  getRates(): Rate[] {
    return CURRENCIES.map(currency => ({ currency, rate: 0 }))
  }
}
