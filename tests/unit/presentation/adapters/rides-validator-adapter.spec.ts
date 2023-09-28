import RidesValidatorAdapter from "@/presentation/adapters/rides-validator-adapter"
import { ridesMock } from "../../stubs/mocks/rides-mock"
import { ridesSchema } from "@/presentation/adapters/schemas/rides-validator-schema"

describe('RidesValidatorAdapter', () => {
  const makeSut = () => {
    const sut = new RidesValidatorAdapter()
    
    return { sut }
  }

  it('should return true if data is ok', async () => {
    const { sut } = makeSut()

    jest.spyOn(ridesSchema, 'parseAsync').mockReturnValueOnce(Promise.resolve(ridesMock[0]))

    const isValid = await sut.validate(ridesMock[0])

    expect(isValid).toBe(true)
  })

  it('should throw if data is not ok', async () => {
    const { sut } = makeSut()

    jest.spyOn(ridesSchema, 'parseAsync')
      .mockImplementationOnce(() => { throw new Error() })

    const promise = sut.validate({})

    await expect(promise).rejects.toThrow()
  })

  it('should test if ridesSchema.parseAsync is called with correct values', async () => {
    const { sut } = makeSut()

    const parseAsyncSpy = jest.spyOn(ridesSchema, 'parseAsync')

    await sut.validate(ridesMock[0])

    expect(parseAsyncSpy).toHaveBeenCalledWith(ridesMock[0])
  })
})