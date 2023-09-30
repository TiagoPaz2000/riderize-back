import RidesRepository from '@/domain/usecases/rides-model'
import { IController } from '../protocols/controller-protocol'
import TokenHandler from '@/domain/usecases/token-handler'
import { errorHandler } from '../helpers/error-handler'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'

export default class ListOwnerRidesController implements IController {
  constructor(
    private tokenHandler: TokenHandler,
    private ridesRepository: RidesRepository,
  ) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const tokenPayload = this.tokenHandler.validate(request.body.authorization)
      const rides = await this.ridesRepository.listByOwnerId(tokenPayload.id)

      return {
        statusCode: 200,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
}