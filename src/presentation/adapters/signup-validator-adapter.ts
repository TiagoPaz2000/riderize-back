import UserValidator from '@/domain/usecases/signup-validator';
import { signupSchema } from '../schemas/signup-validator-schema';


export default class UserValidatorAdapter implements UserValidator {
  async validate(data: any): Promise<boolean> {
    await signupSchema.parseAsync(data)

    return true
  }
}