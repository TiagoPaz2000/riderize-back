import RidesRepositoty from "@/domain/entities/rides-model"
import { ridesMock } from "../mocks/rides-mock"
import RidesEntity from "@/domain/entities/ride-entity"

export const makeRidesRepositotyStub = (): RidesRepositoty => {
  class RidesRepositotyStub implements RidesRepositoty {
    add(Ride: Omit<RidesEntity, 'id'>): Promise<RidesEntity> {
      return new Promise(resolve => resolve(ridesMock[0]))
    }
  
  }

  return new RidesRepositotyStub()
}