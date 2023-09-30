import RidesValidator from '@/domain/usecases/rides-validator'
import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'
import { errorHandler } from '../helpers/error-handler'
import RidesRepository from '@/domain/entities/rides-model'
import TokenHandler from '@/domain/usecases/token-handler'

export default class AddRidesController implements IController {
  constructor(
    private ridesValidator: RidesValidator,
    private ridesRepository: RidesRepository,
    private tokenHandler: TokenHandler,
  ) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const tokenPayload = this.tokenHandler.validate(request.body.authorization)
      delete request.body.authorization
      await this.ridesValidator.validate(request.body)

      const rides = await this.ridesRepository.add(request.body)

      return {
        statusCode: 201,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
}}