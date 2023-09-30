import EncryptPasswordAdapter from '../adapters/encrypt-password-adapter';
import UserValidatorAdapter from '../adapters/signup-validator-adapter';
import TokenHandlerAdapter from '../adapters/token-handler-adapter';
import UserRepositoryAdapter from '../adapters/user-repository-adapter';
import SignUpController from '../controllers/signup-controller';
import { IController } from '../protocols/controller-protocol';

export const SignUpFactory = (): IController => {
  const signupValidator = new UserValidatorAdapter()
  const encryptPassword = new EncryptPasswordAdapter()
  const tokenHandler = new TokenHandlerAdapter()
  const userRepository = new UserRepositoryAdapter()

  return new SignUpController(signupValidator, encryptPassword, tokenHandler, userRepository)
}