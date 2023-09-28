import RidesValidator from '@/domain/usecases/rides-validator'
import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'
import ErrorEntity from '@/domain/entities/error-entity'
import { errorHandler } from '../helpers/error-handler'
import RidesModel from '@/domain/entities/rides-model'

export default class AddRidesController implements IController {
  constructor(private ridesValidator: RidesValidator, private ridesModel: RidesModel) {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const isValid = await this.ridesValidator.validate(request.body)
      if (!isValid) {
        return {
          statusCode: 400,
          body: 'Missing params',
        }
      }

      const rides = await this.ridesModel.add(request.body)

      return {
        statusCode: 201,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
}}