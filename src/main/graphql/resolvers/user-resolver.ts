import { SignInFactory } from '@/presentation/factories/signin-factory'
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserInput } from '../dtos/inputs/user-input';
import { UserModel } from '../dtos/models/user-model';
import { SignUpFactory } from '@/presentation/factories/signup-factory';

@Resolver()
export default class UserResolver {
  @Query(() => UserModel)
  async login(@Arg('data') data: UserInput) {
    const signInFactory = SignInFactory()

    const response = await signInFactory.handle({ body: data })
    return response.body
  }

  @Mutation(() => UserModel)
  async register(@Arg('data') data: UserInput) {
    const signUpFactory = SignUpFactory()

    const response = await signUpFactory.handle({ body: data })
    return response.body
  }
}