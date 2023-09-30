import TokenHandler from '@/domain/usecases/token-handler';
import { errorHandler } from '../helpers/error-handler';
import { IController } from '../protocols/controller-protocol';
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol';
import RidesRepository from '@/domain/usecases/rides-model';
import ValidateSubscriptionDate from '@/domain/usecases/validate-subscription-date';

export default class RidesSubscribeController implements IController {
  constructor(
    private tokenHandler: TokenHandler,
    private validateSubscriptionDate: ValidateSubscriptionDate,
    private ridesRepository: RidesRepository,
  ) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const tokenPayload = this.tokenHandler.validate(request.body?.authorization)
      const ride = await this.ridesRepository.listById(request.body?.rideId)
      const dateNow = this.validateSubscriptionDate.validate(ride.endDateRegistration)
      await this.ridesRepository.subcribeOnRide(tokenPayload.id, request.body.rideId, dateNow)

      return {
        statusCode: 201,
        body: { message: 'User subscribed successfully' },
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
}