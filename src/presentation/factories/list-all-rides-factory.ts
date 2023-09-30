import TokenHandlerAdapter from '../adapters/token-handler-adapter'
import RidesRepositoryAdapter from '../adapters/rides-repository-adapter'
import { IController } from '../protocols/controller-protocol'
import ListAllRidesController from '../controllers/list-all-rides-controller'

export const listAllRidesFactory = (): IController => {
  const ridesRepositoryAdapter = new RidesRepositoryAdapter()
  const tokenHandlerAdapter = new TokenHandlerAdapter()

  return new ListAllRidesController(ridesRepositoryAdapter, tokenHandlerAdapter)
}