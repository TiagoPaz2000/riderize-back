import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class HelloWorldModel {
  @Field()
  declare title: String
}