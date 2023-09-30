import SignUpValidator from '@/domain/usecases/signup-validator';
import { IController } from '../protocols/controller-protocol';
import { IHttpRequest, IHttpResponse } from '../protocols/http-protocol';
import EncryptPassword from '@/domain/usecases/hash-password';
import TokenHandler from '@/domain/usecases/token-handler';
import { errorHandler } from '../helpers/error-handler';
import UserRepository from '@/domain/usecases/user-model';

export default class SignUpController implements IController {
  constructor(
    private signupValidator: SignUpValidator,
    private encryptPassword: EncryptPassword,
    private tokenHandler: TokenHandler,
    private userRepository: UserRepository,
  ) {}
  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      this.signupValidator.validate(request.body);
      const hashedPassword = await this.encryptPassword.hash(request.body.password);
      const newUser = await this.userRepository.signup({ ...request.body, password: hashedPassword });
      const { password, ...user } = newUser;
      const token = this.tokenHandler.generate(user);

      return {
        statusCode: 201,
        body: { token },
      }
    } catch (error) {
      return errorHandler(error as Error)
    }
  }
}