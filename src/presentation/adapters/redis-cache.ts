import Redis, { Redis as RedisClient } from 'ioredis'
import redisConnection from '@/infra/database/redis-connection'

export default class RedisCache {
  private client = new Redis(redisConnection.config.redis)

  async set(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value))
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key)
    if (!data) {
      return null
    }

    const parsedData = JSON.parse(data) as T
    return parsedData
  }

  async invalidate(key: string): Promise<void> {
    await this.client.del(key)
  }
}