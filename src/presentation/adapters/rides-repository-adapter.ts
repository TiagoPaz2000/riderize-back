import RidesEntity from '@/domain/entities/ride-entity';
import RidesRepository from '@/domain/usecases/rides-model';
import connection from '../../infra/database/connection';
import ErrorEntity from '@/domain/entities/error-entity';
import RedisCache from './redis-cache';

export default class RidesRepositoryAdapter implements RidesRepository {
  private redisCache = new RedisCache()

  async add(ride: Omit<RidesEntity, "id">): Promise<RidesEntity> {
    const newRide = await connection.rides.create({ data: ride })
    await this.redisCache.invalidate('rides')
    return newRide
  }

  async listAll(): Promise<RidesEntity[]> {
    const cachedRides = await this.redisCache.get<RidesEntity[]>('rides')
    if (!cachedRides) {
      
      return connection.rides.findMany()
        .then(async (rides) => {
          await this.redisCache.set('rides', rides);
          return rides;
        })
    }
    
    return cachedRides.map((ride) => {
      const dates = {
        startDate: new Date(ride.startDate),
        endDateRegistration: new Date(ride.endDateRegistration),
        startDateRegistration: new Date(ride.startDateRegistration)
      }
      
      return { ...ride, ...dates }
    })
  }

  async listByUserId(userId: string): Promise<RidesEntity[]> {
    const rides = (await connection.usersOnRides.findMany({
      where: {
        userId,
      },
      include: { subscriptions: true },
    })).map((ride) => ride.subscriptions)

    return rides
  }

  async listByOwnerId(ownerId: string): Promise<RidesEntity[]> {
    const rides = await connection.rides.findMany({
      where: {
        ownerId,
      }
    })
    return rides
  }

  async subcribeOnRide(userId: string, rideId: string, subscriptionDate: Date): Promise<void> {
    await connection.usersOnRides.create({
      data: {
        userId,
        rideId,
        subscriptionDate,
      }
    }).catch((_err: Error) => { throw new ErrorEntity('Invalid subscription', 400) })
  }

  async listById(rideId: string): Promise<RidesEntity> {
    const ride = await connection.rides
      .findUniqueOrThrow({ where: { id: rideId } })
      .catch((_err: Error) => { throw new ErrorEntity('Ride not found', 400) })

    return ride
  }
}