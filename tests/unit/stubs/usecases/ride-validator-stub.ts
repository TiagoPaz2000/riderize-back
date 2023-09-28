import RideValidator from "@/domain/usecases/rides-validator"

export const makeRideValidatorStub = (): RideValidator => {
  class RideValidatorStub implements RideValidator {
    validate(ride: any): Promise<boolean> {
      return Promise.resolve(true)
    }
  }

  return new RideValidatorStub()
}