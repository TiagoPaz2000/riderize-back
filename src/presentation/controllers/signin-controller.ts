import SignInValidator from '@/domain/usecases/signup-validator';
import { IController } from '../protocols/controller-protocol';
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol';
import EncryptPassword from '@/domain/usecases/hash-password';
import TokenHandler from '@/domain/usecases/token-handler';
import { errorHandler } from '../helpers/error-handler';
import UserRepository from '@/domain/usecases/user-model';

export default class SignInController implements IController {
  constructor(
    private signInValidator: SignInValidator,
    private encryptPassword: EncryptPassword,
    private tokenHandler: TokenHandler,
    private userRepository: UserRepository,
  ) {}
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      this.signInValidator.validate(request.body);
      const newUser = await this.userRepository.signin({ ...request.body });
      await this.encryptPassword.compare(request.body.password, newUser.password);
      const token = this.tokenHandler.generate(newUser);

      return {
        statusCode: 200,
        body: { token },
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
}