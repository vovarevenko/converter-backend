import { Controller, Get } from '@nestjs/common'
import { RatesService } from './rates.service'
import { Rate } from './types'

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  getRates(): Rate[] {
    return this.ratesService.getRates()
  }
}
