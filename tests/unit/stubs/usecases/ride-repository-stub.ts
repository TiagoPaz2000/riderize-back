import RidesRepository from "@/domain/usecases/rides-model"
import { ridesMock } from "../../../mocks/rides-mock"
import RidesEntity from "@/domain/entities/ride-entity"

export const makeRidesRepositoryStub = (): RidesRepository => {
  class RidesRepositoryStub implements RidesRepository {
    add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity> {
      return new Promise(resolve => resolve(ridesMock[0]))
    }
    listAll(): Promise<RidesEntity[]> {
      return new Promise(resolve => resolve(ridesMock))
    }
    listByUserId(_userId: string): Promise<RidesEntity[]> {
      return new Promise(resolve => resolve(ridesMock))
    }
    listByOwnerId(ownerId: string): Promise<RidesEntity[]> {
      return new Promise(resolve => resolve(ridesMock.filter(ride => ride.ownerId === ownerId)))
    }
    subcribeOnRide(_userId: string, _rideId: string, _subscriptionDate: Date): Promise<void> {
      return new Promise(resolve => resolve())
    }
    listById(_rideId: string): Promise<RidesEntity> {
      return new Promise(resolve => resolve(ridesMock[0]))
    }
  }

  return new RidesRepositoryStub()
}