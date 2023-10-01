import { SignInFactory } from '@/presentation/factories/signin-factory'
import { Query, Resolver } from 'type-graphql';

@Resolver()
export default class UserResolver {
  @Query(() => String)
  async helloWorld() {
    return 'hello world'
  }
}