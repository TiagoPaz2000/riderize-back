import { SignInFactory } from '@/presentation/factories/signin-factory'
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { HelloWorldInput } from '../dtos/inputs/hello-world-input';
import { HelloWorldModel } from '../dtos/models/hello-world-model';

@Resolver()
export default class UserResolver {
  @Query(() => String)
  async helloWorld() {
    return 'hello world'
  }

  @Mutation(() => HelloWorldModel)
  async helloWorldMutation(@Arg('data') data: HelloWorldInput) {
    const res = {
      title: data.title
    }

    return res
  }
}