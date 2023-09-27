import RideValidator from '@/domain/usecases/ride-validator'
import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'

export default class AddRidesController implements IController {
  constructor(private rideValidator: RideValidator) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    const isValid = this.rideValidator.validate(request.body)
    if (!isValid) {
      return {
        statusCode: 400,
        body: 'Missing params',
      }
    }
    return {
      statusCode: 201,
      body: 'Ride created successfully!',
    }
  }
}