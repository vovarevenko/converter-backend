import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { RatesModule } from './rates/rates.module'

@Module({
  imports: [RatesModule],
  controllers: [AppController],
})
export class AppModule {}
