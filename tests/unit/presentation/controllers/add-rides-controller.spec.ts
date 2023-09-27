import RideValidator from '@/domain/usecases/ride-validator'
import AddRidesController from '@/presentation/controllers/add-rides-controller'
import { makeRideValidatorStub } from '../../stubs/usecases/ride-validator-stub'


describe('AddRidesController', () => {
  const makeSut = () => {
    const rideValidatorStub = makeRideValidatorStub()
    const sut = new AddRidesController(rideValidatorStub)
    return { sut, rideValidatorStub }
  }

  it('should return 201 if everything is ok', async () => {
    const { sut } = makeSut()

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(201)
  })

  it('should return 400 if RideValidator returns false and error message', async () => {
    const { sut, rideValidatorStub } = makeSut()

    jest.spyOn(rideValidatorStub, 'validate').mockReturnValueOnce(false)

    const httpResponse = await sut.handle({ body: {} })

    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toBe('Missing params')
  })
})