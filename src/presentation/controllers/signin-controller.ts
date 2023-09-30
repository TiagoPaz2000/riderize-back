import SignInValidator from '@/domain/usecases/signup-validator';
import { IController } from '../protocols/controller-protocol';
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol';
import EncryptPassword from '@/domain/usecases/hash-password';
import TokenHandler from '@/domain/usecases/token-handler';
import { errorHandler } from '../helpers/error-handler';
import UserRepository from '@/domain/usecases/user-model';
import ErrorEntity from '@/domain/entities/error-entity';

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
      const validPass = await this.encryptPassword.compare(request.body.password, newUser.password);
      if (!validPass) throw new ErrorEntity('Invalid password', 400);
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