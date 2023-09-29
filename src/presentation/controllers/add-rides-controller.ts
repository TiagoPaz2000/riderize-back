import RidesValidator from '@/domain/usecases/rides-validator'
import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'
import { errorHandler } from '../helpers/error-handler'
import RidesRepository from '@/domain/entities/rides-model'

export default class AddRidesController implements IController {
  constructor(private ridesValidator: RidesValidator, private RidesRepository: RidesRepository) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      await this.ridesValidator.validate(request.body)

      const rides = await this.RidesRepository.add(request.body)

      return {
        statusCode: 201,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
}}