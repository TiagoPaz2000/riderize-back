import { Field, InputType } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  declare username: String

  @Field()
  declare password: String
}