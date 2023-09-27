import RidesModel from "@/domain/entities/rides-model"
import { ridesMock } from "../mocks/rides-mock"
import RidesEntity from "@/domain/entities/ride-entity"

export const makeRidesModelStub = (): RidesModel => {
  class RidesModelStub implements RidesModel {
    add(Ride: RidesEntity): Promise<Omit<RidesEntity, 'id'>> {
      return new Promise(resolve => resolve(ridesMock[0]))
    }
  
  }

  return new RidesModelStub()
}