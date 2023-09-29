import RidesRepositoryAdapter from "../adapters/rides-repository-adapter"
import RidesValidatorAdapter from "../adapters/rides-validator-adapter"
import TokenHandlerAdapter from "../adapters/token-handler-adapter"
import AddRidesController from "../controllers/add-rides-controller"
import { IController } from "../protocols/controller-protocol"

export const addRidesFactory = (): IController => {
  const ridesValidatorAdapter = new RidesValidatorAdapter()
  const ridesRepositoryAdapter = new RidesRepositoryAdapter()
  const tokenHandlerAdapter = new TokenHandlerAdapter()

  return new AddRidesController(ridesValidatorAdapter, ridesRepositoryAdapter, tokenHandlerAdapter)
}