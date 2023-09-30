import TokenHandler from "@/domain/usecases/token-handler";
import { errorHandler } from "../helpers/error-handler";
import { IController } from "../protocols/controller-protocol";
import { IHttpRequest, IHttpResponse } from "../protocols/http-protocol";
import RidesRepository from "@/domain/entities/rides-model";

export default class ListUserRidesController implements IController {
  constructor(
    private ridesRepository: RidesRepository,
    private tokenHandler: TokenHandler,
  ) {}
  
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const tokenPayload = this.tokenHandler.validate(request.body.authorization)
      const rides = await this.ridesRepository.listByUserId(tokenPayload.id)

      return {
        statusCode: 200,
        body: rides,
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
}