import EncryptPasswordAdapter from '../adapters/encrypt-password-adapter';
import UserValidatorAdapter from '../adapters/signup-validator-adapter';
import TokenHandlerAdapter from '../adapters/token-handler-adapter';
import UserRepositoryAdapter from '../adapters/user-repository-adapter';
import SignInController from '../controllers/signin-controller';
import { IController } from '../protocols/controller-protocol';

export const SignInFactory = (): IController => {
  const signinValidator = new UserValidatorAdapter()
  const encryptPassword = new EncryptPasswordAdapter()
  const tokenHandler = new TokenHandlerAdapter()
  const userRepository = new UserRepositoryAdapter()

  return new SignInController(signinValidator, encryptPassword, tokenHandler, userRepository)
}