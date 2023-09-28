import RidesValidatorAdapter from "@/presentation/adapters/rides-validator-adapter"
import { ridesMock } from "../../stubs/mocks/rides-mock"

describe('RidesValidatorAdapter', () => {
  const makeSut = () => {
    const sut = new RidesValidatorAdapter()
    
    return { sut }
  }

  it('should return true if data is ok', async () => {
    const { sut } = makeSut()

    const isValid = await sut.validate(ridesMock[0])

    expect(isValid).toBe(true)
  })

  it('should throw if data is not ok', async () => {
    const { sut } = makeSut()

    const promise = sut.validate({})

    await expect(promise).rejects.toThrow()
  })
  
})