import RideValidator from '@/domain/usecases/ride-validator'
import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'
import ErrorEntity from '@/domain/entities/error-entity'
import { errorHandler } from '../helpers/error-handler'

export default class AddRidesController implements IController {
  constructor(private rideValidator: RideValidator) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
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
    } catch (error) {
      return errorHandler(error as Error)
    }
}}