import { Field, InputType } from 'type-graphql';

@InputType()
export class HelloWorldInput {
  @Field()
  declare title: String
}