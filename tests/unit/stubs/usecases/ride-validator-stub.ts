import RideValidator from "@/domain/usecases/ride-validator"

export const makeRideValidatorStub = (): RideValidator => {
  class RideValidatorStub implements RideValidator {
    validate(ride: any): boolean {
      return true
    }
  }

  return new RideValidatorStub()
}