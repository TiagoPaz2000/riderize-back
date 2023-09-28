import AddRidesController from '@/presentation/controllers/add-rides-controller'
import { makeRideValidatorStub } from '../../stubs/usecases/ride-validator-stub'
import { makeRidesModelStub } from '../../stubs/usecases/ride-model-stub'
import { ridesMock } from '../../stubs/mocks/rides-mock'

describe('AddRidesController', () => {
  const makeSut = () => {
    const rideValidatorStub = makeRideValidatorStub()
    const ridesModelStub = makeRidesModelStub()
    const sut = new AddRidesController(rideValidatorStub, ridesModelStub)
    return { sut, rideValidatorStub }
  }

  it('should return 201 and new ride if everything is ok', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(201)
    expect(httpResponse.body).toEqual(ridesMock[0])
  })

  it('should return 400 if RideValidator returns false and error message', async () => {
    const { sut, rideValidatorStub } = makeSut()

    jest.spyOn(rideValidatorStub, 'validate').mockReturnValueOnce(Promise.resolve(false))

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toBe('Missing params')
  })

  it('should return 500 if RideValidator throws', async () => {
    const { sut, rideValidatorStub } = makeSut()

    jest.spyOn(rideValidatorStub, 'validate').mockImplementationOnce(() => {
      throw new Error()
    })

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toBe('Internal server error')
  })
})