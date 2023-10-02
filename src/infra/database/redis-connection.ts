import { RedisOptions } from 'ioredis'

const redisConnection = {
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS || undefined,
    }
  },
  driver: 'redis'
} as { config: { redis: RedisOptions }, driver: string }

export default redisConnection