import RidesRepositoryAdapter from "../adapters/rides-repository-adapter";
import TokenHandlerAdapter from "../adapters/token-handler-adapter";
import ListUserRidesController from "../controllers/list-user-rides-controller";
import { IController } from "../protocols/controller-protocol";

export const listUserRidesFactory = (): IController => {
  const ridesRepositoryAdapter = new RidesRepositoryAdapter()
  const tokenHandlerAdapter = new TokenHandlerAdapter()

  return new ListUserRidesController(ridesRepositoryAdapter, tokenHandlerAdapter)
}