import RidesRepositoryAdapter from '../adapters/rides-repository-adapter';
import TokenHandlerAdapter from '../adapters/token-handler-adapter';
import ValidateSubscriptionDateAdapter from '../adapters/validate-subcription-date-adapter';
import RidesSubscribeController from '../controllers/rides-subscribe-controller';
import { IController } from '../protocols/controller-protocol';

export const ridesSubscribeFactory = (): IController => {
  const tokenHandlerAdapter = new TokenHandlerAdapter()
  const validateSubscriptionDateAdapter = new ValidateSubscriptionDateAdapter()
  const ridesRepositoryAdapter = new RidesRepositoryAdapter()
  
  return new RidesSubscribeController(
    tokenHandlerAdapter,
    validateSubscriptionDateAdapter,
    ridesRepositoryAdapter
  )
}