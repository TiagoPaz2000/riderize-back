import RidesRepositoryAdapter from "../adapters/rides-repository-adapter";
import TokenHandlerAdapter from "../adapters/token-handler-adapter";
import listOwnerRidesController from "../controllers/list-owner-rides-controller";
import { IController } from "../protocols/controller-protocol";

export const listOwnerRidesFactory = (): IController => {
  const ridesRepositoryAdapter = new RidesRepositoryAdapter()
  const tokenHandlerAdapter = new TokenHandlerAdapter()

  return new listOwnerRidesController(tokenHandlerAdapter, ridesRepositoryAdapter)
}