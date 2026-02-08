import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import {
  FRANKFURTER_URL,
  EXCHANGE_RATE_API_URL,
  COINGECKO_URL,
  FRANKFURTER_CURRENCIES,
  EXCHANGE_RATE_CURRENCIES,
  COINGECKO_ID_MAP,
  FETCH_TIMEOUT_MS,
} from './constants'

@Injectable()
export class RatesFetcherService implements OnModuleInit {
  private readonly logger = new Logger(RatesFetcherService.name)
  private readonly rates = new Map<string, number>([['USD', 1]])

  async onModuleInit() {
    await Promise.allSettled([this.fetchFiatRates(), this.fetchCryptoRates()])
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async fetchFiatRates() {
    await Promise.allSettled([
      this.fetchFrankfurter(),
      this.fetchExchangeRateApi(),
    ])
  }

  @Cron('*/10 * * * *')
  async fetchCryptoRates() {
    await this.fetchCoinGecko()
  }

  getRate(code: string): number {
    return this.rates.get(code) ?? 0
  }

  private async fetchWithTimeout(url: string): Promise<Response> {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
    try {
      return await fetch(url, { signal: controller.signal })
    } finally {
      clearTimeout(timeout)
    }
  }

  private async fetchFrankfurter() {
    try {
      const res = await this.fetchWithTimeout(FRANKFURTER_URL)
      const data = (await res.json()) as { rates: Record<string, number> }
      const rates = data.rates

      for (const code of FRANKFURTER_CURRENCIES) {
        if (rates[code]) {
          this.rates.set(code, 1 / rates[code])
        }
      }
      this.logger.log(
        `Frankfurter rates updated: ${FRANKFURTER_CURRENCIES.join(', ')}`,
      )
    } catch (err) {
      this.logger.error(
        `Failed to fetch Frankfurter rates: ${(err as Error).message}`,
      )
    }
  }

  private async fetchExchangeRateApi() {
    try {
      const res = await this.fetchWithTimeout(EXCHANGE_RATE_API_URL)
      const data = (await res.json()) as { rates: Record<string, number> }
      const rates = data.rates

      for (const code of EXCHANGE_RATE_CURRENCIES) {
        if (rates[code]) {
          this.rates.set(code, 1 / rates[code])
        }
      }
      this.logger.log(
        `ExchangeRate-API rates updated: ${EXCHANGE_RATE_CURRENCIES.join(', ')}`,
      )
    } catch (err) {
      this.logger.error(
        `Failed to fetch ExchangeRate-API rates: ${(err as Error).message}`,
      )
    }
  }

  private async fetchCoinGecko() {
    try {
      const res = await this.fetchWithTimeout(COINGECKO_URL)
      const data = (await res.json()) as Record<string, { usd: number }>

      for (const [id, code] of Object.entries(COINGECKO_ID_MAP)) {
        if (data[id]?.usd) {
          this.rates.set(code, data[id].usd)
        }
      }
      this.logger.log(
        `CoinGecko rates updated: ${Object.values(COINGECKO_ID_MAP).join(', ')}`,
      )
    } catch (err) {
      this.logger.error(
        `Failed to fetch CoinGecko rates: ${(err as Error).message}`,
      )
    }
  }
}
