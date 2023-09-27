import { IController } from '../protocols/controller-protocol'
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol'

export default class AddRidesController implements IController {
  constructor() {}

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    return {
      statusCode: 201,
      body: 'Ride created successfully!',
    }
  }
}