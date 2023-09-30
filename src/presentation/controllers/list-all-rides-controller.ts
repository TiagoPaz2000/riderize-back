import TokenHandler from '@/domain/usecases/token-handler';
import { IController } from '../protocols/controller-protocol';
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol';
import { errorHandler } from '../helpers/error-handler';
import RidesRepository from '@/domain/entities/rides-model';

export default class ListAllRidesController implements IController {
  constructor(private ridesRepository: RidesRepository, private tokenHandler: TokenHandler) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      this.tokenHandler.validate(request.body.authorization)
      const rides = await this.ridesRepository.listAll()

      return {
        statusCode: 200,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
} 