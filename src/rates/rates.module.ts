import { Module } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { RatesController } from './rates.controller'
import { RatesService } from './rates.service'
import { RatesFetcherService } from './rates-fetcher.service'

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [RatesController],
  providers: [RatesService, RatesFetcherService],
})
export class RatesModule {}
