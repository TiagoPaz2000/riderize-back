import { IHttpResponse, IHttpRequest } from './http-protocol'

export interface IController {
  handle(request: IHttpRequest): Promise<IHttpResponse>
}